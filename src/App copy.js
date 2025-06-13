import React, { useEffect, useState } from "react";
import "./App.css";

const categoryTree = {
  "1": {
    A: {
      code: "1_A",
      form: [
        { key: "which_ffi", label: "Which FFI?", type: "text" },
        { key: "name_of_uni_personnel", label: "Name of UNI personnel", type: "text" },
      ],
    },
    B: {
      code: "1_B",
      form: [
        { key: "reason", label: "Reason for interaction", type: "textarea" },
      ],
    },
  },
  "2": {
    A: {
      code: "2_A",
      form: [
        { key: "risk_type", label: "Risk type", type: "text" },
        { key: "risk_level", label: "Risk level", type: "text" },
      ],
    },
  },
};

const downloadCSV = (labels) => {
  if (!labels.length) {
    alert("No labels to export.");
    return;
  }

  // Flatten form data into columns
  const rows = labels.map((label) => {
    const row = {
      highlightedText: label.text,
      pages: (label.pages || []).join(","),
      lines: (label.lines || []).join(","),
      primaryCategory: label.primaryCategory,
      secondaryCategory: label.secondaryCategory,
    };

    // Add form fields
    if (label.customFormData) {
      Object.entries(label.customFormData).forEach(([key, value]) => {
        row[key] = value;
      });
    }

    return row;
  });

  const headers = Array.from(new Set(rows.flatMap(Object.keys)));

  const csvContent = [
    headers.join(","), // header row
    ...rows.map(row => headers.map(h => JSON.stringify(row[h] || "")).join(","))
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "labels.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const flattenHtmlToTextWithSpans = (html) => {
  const container = document.createElement("div");
  container.innerHTML = html;

  const allElements = container.querySelectorAll("[data-page]");
  const spanData = [];

  allElements.forEach((el) => {
    const page = el.getAttribute("data-page");

    if (el.classList.contains("page-marker")) {
      // Handle page marker element
      spanData.push({
        type: "page-marker",
        text: `[Page ${page}]`,
        id: `marker-${page}`,
      });
      return;
    }

    if (el.tagName.toLowerCase() === "p") {
      const line = el.getAttribute("data-line");
      const text = el.textContent;

      spanData.push({
        type: "text-span",
        page,
        line,
        text,
        id: `${page}-${line}`,
        labelId: null,
        highlightColor: null,
      });
    }
  });

  return spanData;
};

function App() {
  const [rawHtml, setRawHtml] = useState("");
  const [lines, setLines] = useState([]); 
  const [labelOpen, setLabelOpen] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [selectedSpan, setSelectedSpan] = useState(null);
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [customFormData, setCustomFormData] = useState({});
  const [labels, setLabels] = useState([]);

  const highlightColors = {
    "1_A": "#ffd54f",
    "1_B": "#81c784",
    "2_A": "#e57373",
  };

  useEffect(() => {
    fetch("/output.html")
      .then((res) => res.text())
      .then((html) => {
        const structured = flattenHtmlToTextWithSpans(html);
        setLines(structured);
      });
  }, []);




  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const selectedText = selection.toString().trim();
    if (!selectedText) return;

    const range = selection.getRangeAt(0);
    const container = document.getElementById("document-container");
    const spans = Array.from(container.querySelectorAll(".text-span"));

    const selectedSpans = spans.filter(span => {
      const spanRange = document.createRange();
      spanRange.selectNodeContents(span);
      return (
        range.compareBoundaryPoints(Range.END_TO_START, spanRange) < 0 &&
        range.compareBoundaryPoints(Range.START_TO_END, spanRange) > 0
      );
    });

    if (selectedSpans.length === 0) return;

    const selectedIds = selectedSpans.map(s => s.getAttribute("data-page") + "-" + s.getAttribute("data-line"));


    setHighlightedText(selectedText);
    setSelectedSpan({ ids: selectedIds });

    setLabelOpen(true);
  };

  const applyHighlight = (spanObj, labelId, color) => {
    if (!spanObj.ids || spanObj.ids.length === 0) return;

    setLines((prev) =>
      prev.map((line) => {
        if (spanObj.ids.includes(line.id)) {
          return {
            ...line,
            labelId,
            highlightColor: color,
          };
        }
        return line;
      })
    );
  };

  const handleFormChange = (key, value) => {
    setCustomFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderDynamicFields = () => {
    if (!primaryCategory || !secondaryCategory) return null;
    const form = categoryTree?.[primaryCategory]?.[secondaryCategory]?.form;
    if (!form) return null;

    return form.map((field) => (
      <div key={field.key}>
        <label>{field.label}</label>
        {field.type === "textarea" ? (
          <textarea
            value={customFormData[field.key] || ""}
            onChange={(e) => handleFormChange(field.key, e.target.value)}
          />
        ) : (
          <input
            type={field.type}
            value={customFormData[field.key] || ""}
            onChange={(e) => handleFormChange(field.key, e.target.value)}
          />
        )}
      </div>
    ));
  };

  const handleSaveLabel = () => {
    if (!selectedSpan || !highlightedText || !primaryCategory || !secondaryCategory) return;

    const pages = [...new Set(selectedSpan.ids.map(id => id.split("-")[0]))];
    const lines = [...new Set(selectedSpan.ids.map(id => id.split("-")[1]))];


    const code = categoryTree[primaryCategory][secondaryCategory].code;

    const label = {
      text: highlightedText,
      pages,
      lines,
      primaryCategory,
      secondaryCategory,
      customFormData,
      code,
    };

    const labelId = `label-${labels.length + 1}`;
      console.log("Label Code:", code);
      console.log("Color used:", highlightColors[code]);
      console.log("Label ID:", labelId);

      applyHighlight(selectedSpan, labelId, highlightColors[code] || "#ffff99");
      setLabels((prev) => [...prev, label]);

      // Reset
      setLabelOpen(false);
      setHighlightedText("");
      setPrimaryCategory("");
      setSecondaryCategory("");
      setCustomFormData({});
      setSelectedSpan(null);
    };

  return (
  <div className="App">
    <h2>Seamless Labeling Interface</h2>

    <div id="document-container" onMouseUp={handleMouseUp}>
      {lines.map((line) => {
        if (line.type === "page-marker") {
          return (
            <div key={line.id} className="page-marker">
              {line.text}
            </div>
          );
        }

        return (
          <span
            key={line.id}
            className="text-span"
            data-page={line.page}
            data-line={line.line}
            data-label-id={line.labelId || ""}
            style={{
              backgroundColor: line.highlightColor || "transparent",
              padding: "1px",
            }}
          >
            {line.text + " "}
          </span>
        );
      })}
    </div>

    {/* Functional buttons outside the document text */}
    <div className="controls">
      <button onClick={() => downloadCSV(labels)}>Download Labels as CSV</button>

      <button onClick={() => {
        const testSpan = document.querySelector('.text-span');
        if (testSpan) {
          testSpan.style.backgroundColor = "orange";
        }
      }}>
        Test highlight manually
      </button>
    </div>

    {labelOpen && (
      <div className="label-form">
        <h3>Create Label</h3>
        <p><strong>Selected:</strong> {highlightedText}</p>

        <label>Primary Category:</label>
        <select
          value={primaryCategory}
          onChange={(e) => {
            setPrimaryCategory(e.target.value);
            setSecondaryCategory("");
          }}
        >
          <option value="">Select...</option>
          {Object.keys(categoryTree).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>

        {primaryCategory && (
          <>
            <label>Secondary Category:</label>
            <select
              value={secondaryCategory}
              onChange={(e) => setSecondaryCategory(e.target.value)}
            >
              <option value="">Select...</option>
              {Object.keys(categoryTree[primaryCategory]).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </>
        )}

        {renderDynamicFields()}

        <button onClick={handleSaveLabel}>Save Label</button>
        <button onClick={() => setLabelOpen(false)}>Cancel</button>
      </div>
    )}
  </div>
);

}

export default App;

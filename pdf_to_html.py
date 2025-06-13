import pdfplumber
import html
import os

def pdf_to_line_html(pdf_path, output_path="/Users/nedwestwood/git_repos/codebase/survey-labeler/public/output.html"):
    html_lines = []
    html_lines.append("<html><body>")

    with pdfplumber.open(pdf_path) as pdf:
        for page_num, page in enumerate(pdf.pages, start=1):
            html_lines.append(f'<div class="page" data-page="{page_num}">')
            html_lines.append(f'<p class="page-marker" data-page="{page_num}">[Page {page_num}]</p>')
            lines = page.extract_text().split('\n')
            for line_num, line in enumerate(lines, start=1):
                safe_text = html.escape(line)
                html_lines.append(f'<p data-page="{page_num}" data-line="{line_num}">{safe_text}</p>')
            html_lines.append('</div>')

    html_lines.append("</body></html>")

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(html_lines))

    print(f"HTML saved to {output_path}")

# Example usage:
pdf_to_line_html("/Users/nedwestwood/git_repos/codebase/survey-labeler/public/White Papers/BigOilgoestoCollege_survey_42.pdf")

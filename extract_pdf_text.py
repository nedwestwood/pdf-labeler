from PyPDF2 import PdfReader

def extract_text_with_page_breaks(pdf_path, output_txt_path):
    reader = PdfReader(pdf_path)
    with open(output_txt_path, "w", encoding="utf-8") as out_file:
        for i, page in enumerate(reader.pages, start=1):
            text = page.extract_text()
            out_file.write(f"--- Page {i} ---\n")
            out_file.write(text if text else "[No text found on this page]")
            out_file.write("\n\n")

extract_text_with_page_breaks("path_to_pdf_file", "/public/extracted_text.txt")

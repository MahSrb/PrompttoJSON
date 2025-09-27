# 📝 Prompt → JSON Enhancer (Chrome Extension)

A simple Chrome extension that converts raw text prompts into clean, structured JSON.

---

## ✨ Features

- Convert any raw prompt into structured JSON
- Choose detail level (Low, Balanced, High)
- Choose schema (General, Chat API, OpenAI Function)
- Output displayed in a scrollable JSON box
- Useful buttons:
  - **Enhance → JSON**: Convert to JSON
  - **Clear**: Reset input/output
  - **Copy**: Copy JSON to clipboard
  - **Download**: Save JSON as a file
- Collapsible **Edit Fields** section:
  - Title
  - Audience
  - Tone
  - Constraints

---

## 🚀 Installation

1. Download or clone the project folder.
2. Open Chrome and go to [chrome://extensions/](chrome://extensions/).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the folder.
5. The extension icon will appear in your Chrome toolbar.

---

## 📖 Usage

1. Click the extension icon.
2. Paste your raw prompt in the input box.
3. Select detail level and schema.
4. Click **Enhance → JSON**.
5. The structured JSON will appear in the output box.
6. You can copy, download, or edit it using the **Edit Fields** section.

---

## 🛠 Development

- Built with **Vanilla JS, HTML, and CSS**.
- No external dependencies.
- Easy to extend with features like:
  - JSON syntax highlighting (PrismJS, CodeMirror)
  - Local history storage
  - Additional metadata fields

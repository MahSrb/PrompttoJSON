function buildJSON(original, complexity, schema) {
  return {
    title: original.slice(0, 40) || "Untitled Prompt",
    context: "User provided a raw prompt.",
    task: original,
    constraints: [],
    tone: "balanced",
    output_format: schema,
    detail: complexity
  };
}

function updateOutput(json) {
  document.getElementById("output").textContent = JSON.stringify(json, null, 2);
}

let currentJSON = {};

document.getElementById("enhance").addEventListener("click", () => {
  const original = document.getElementById("prompt").value.trim();
  const complexity = document.getElementById("complexity").value;
  const schema = document.getElementById("schema").value;

  if (!original) {
    document.getElementById("output").textContent = "{}";
    return;
  }

  currentJSON = buildJSON(original, complexity, schema);
  updateOutput(currentJSON);

  // Fill fields for editing
  document.getElementById("field-title").value = currentJSON.title;
  document.getElementById("field-audience").value = currentJSON.audience || "";
  document.getElementById("field-tone").value = currentJSON.tone;
  document.getElementById("field-constraints").value = (currentJSON.constraints || []).join(", ");
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("prompt").value = "";
  document.getElementById("output").textContent = "{}";
  currentJSON = {};
});

document.getElementById("copy").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("output").textContent)
    .then(() => alert("JSON copied to clipboard!"));
});

document.getElementById("download").addEventListener("click", () => {
  const blob = new Blob([document.getElementById("output").textContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "prompt.json";
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("toggle-fields").addEventListener("click", () => {
  const fields = document.getElementById("fields");
  if (fields.style.display === "block") {
    fields.style.display = "none";
    document.getElementById("toggle-fields").textContent = "▼ Edit Fields";
  } else {
    fields.style.display = "block";
    document.getElementById("toggle-fields").textContent = "▲ Edit Fields";
  }
});

document.getElementById("apply-fields").addEventListener("click", () => {
  currentJSON.title = document.getElementById("field-title").value;
  currentJSON.audience = document.getElementById("field-audience").value;
  currentJSON.tone = document.getElementById("field-tone").value;
  currentJSON.constraints = document.getElementById("field-constraints").value
    .split(",").map(s => s.trim()).filter(Boolean);

  updateOutput(currentJSON);
});

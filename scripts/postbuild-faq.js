const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const sourceIndex = path.join(buildDir, "index.html");
const faqDir = path.join(buildDir, "faq");
const faqIndex = path.join(faqDir, "index.html");

if (!fs.existsSync(sourceIndex)) {
  throw new Error("build/index.html was not found. Run the main build first.");
}

fs.mkdirSync(faqDir, { recursive: true });
fs.copyFileSync(sourceIndex, faqIndex);

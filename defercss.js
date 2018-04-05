const head = document.querySelector("head");
const cssFiles = [
  "reset.css",
  "style.css"
];

cssFiles.forEach((cssFile) => {
  head.appendChild(createLink("stylesheet", cssFile));
});

function createLink(rel, href) {
  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  return link;
}

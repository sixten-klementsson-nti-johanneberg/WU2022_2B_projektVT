// user creates config
// create div, add class and add the style

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePseudocode(lines, anchor) {
  let anchorElement = document.querySelector(anchor);
  let editorElement = document.createElement("div");
  anchorElement.appendChild(editorElement);
  editorElement.classList.add("pseudocode");
  let delay = 400;

  lines.forEach((line) => {
    let codeLine = document.createElement("div");
    codeLine.classList.add("pseudocode__line");

    line.forEach((width) => {
      let codeWord = document.createElement("div");
      codeWord.classList.add("pseudocode__word");
      codeWord.style.transitionDelay = `${delay}ms`;
      codeWord.style.transitionDuration = `${width * 30}ms`;
      codeLine.appendChild(codeWord);
      delay += width * 6;

      setTimeout(() => {
        codeWord.style.width = `${width}%`;
      }, 0);
    });

    editorElement.appendChild(codeLine);
  });
}

async function changeRandomPseudocodeWord(anchor, config) {
  let anchorElement = document.querySelector(anchor);
  let pseudocodeWrapper = anchorElement.querySelector(".pseudocode");

  let codeLines = pseudocodeWrapper.children;
  let codeWords = codeLines[Math.floor(Math.random() * codeLines.length)];
  let randomCodeWord =
    codeWords.children[Math.floor(Math.random() * codeWords.children.length)];
  randomCodeWord.style.transitionDuration = `400ms`;
  randomCodeWord.style.transitionDelay = `0ms`;

  randomCodeWord.style.background =
    config !== undefined ? config.color : `var(--color-primary-default)`;

  setTimeout(() => {
    randomCodeWord.style.width = `${randomIntFromInterval(10, 40)}%`;
  }, 1000);

  setTimeout(() => {
    randomCodeWord.style.background = `var(--color-foreground-default)`;
  }, 2000);
}

let heroLines = [
  [20, 30, 20],
  [10, 40],
  [40, 33, 5],
  [30, 20],
  [17, 39, 23],
  [10, 40],
];

generatePseudocode(heroLines, ".hero-image__you");
generatePseudocode(heroLines, ".hero-image__best-friend");

setInterval(() => {
  changeRandomPseudocodeWord(".hero-image__you");
}, randomIntFromInterval(3000, 5000));

setInterval(() => {
  changeRandomPseudocodeWord(".hero-image__best-friend", {
    color: "var(--color-secondary-default",
  });
}, randomIntFromInterval(3000, 5000));

import "./styles.css";
import shufflePlaceholder from "./assets/images/shufflePlaceholder.jpeg";

function renderCoverPage() {
  const cover = document.createElement("div");
  cover.classList.add("cover");
  const coverTitle = document.createElement("h1");
  coverTitle.textContent = "Pandemania";
//   const coverImage = new Image();
//   coverImage.src = shufflePlaceholder;
  cover.appendChild(coverTitle);
//   cover.appendChild(coverImage);
  return cover;
}

function renderTableOfContents() {
  const tableOfContents = document.createElement("div");
  tableOfContents.classList.add("tableOfContents");
  const leftTOC = document.createElement("div"); // left side of table of contents
  leftTOC.classList.add("leftTOC");
  const verticalText = document.createElement("div");
  verticalText.textContent = "Life in the Pandemic";
  leftTOC.appendChild(verticalText);
  const rightTOC = document.createElement("div"); // right side of table of contents
  rightTOC.classList.add("rightTOC");
  const titleDivTOC = document.createElement("div");
  const titleTopTOC = document.createElement("h2");
  titleTopTOC.textContent = "Anxiety";
  const titleBottomTOC = document.createElement("h2");
  titleBottomTOC.textContent = "Aspirations";
  const titleSubTOC = document.createElement("h3");
  titleSubTOC.textContent = "Contents";
  titleDivTOC.appendChild(titleTopTOC);
  titleDivTOC.appendChild(titleBottomTOC);
  titleDivTOC.appendChild(titleSubTOC);
  rightTOC.appendChild(titleDivTOC);
  tableOfContents.appendChild(leftTOC);
  tableOfContents.appendChild(rightTOC);
  return tableOfContents;
}

// const theMask = document.createElement("div");
// const theFormula = document.createElement("div");
// const aMomentInMyHead = document.createElement("div");
// const aNewChallenge = document.createElement("div");
// const caged = document.createElement("div");
// const future = document.createElement("div");
// const theOverman = document.createElement("div");

function renderFooter(footerContent) {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.innerHTML = footerContent;
  footer.appendChild(footerText);
  return footer;
}

function renderContainer(arrOfDivs) {
  const container = document.createElement("div");
  container.classList.add("container");
  arrOfDivs.forEach((div) => {
    container.appendChild(div);
  });
  return container;
}

document.body.appendChild(
  renderContainer([renderCoverPage(), renderTableOfContents(), renderFooter('© 2021 Pandemania')])
);

import "./styles.css";
import shufflePlaceholder from "./assets/images/shufflePlaceholder.jpeg";
import theMaskPlaceholder from "./assets/images/theMaskPlaceholder.jpeg";

// helper functions

function createElementWithClass(tagName, className, textContent) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function createContentDiv(number, title, author) {
  const contentDiv = document.createElement("div");

  const contentNumber = createElementWithClass("h2", "TOCNumber", number);
  contentNumber.textContent = number;

  const contentRight = document.createElement("div");

  const contentTitle = createElementWithClass("h2", "TOCTitle", title);
  contentTitle.textContent = title;

  const contentCredit = createElementWithClass("h3", "TOCCredit", author);
  contentCredit.textContent = `BY: ${author}`;

  contentRight.appendChild(contentTitle);
  contentRight.appendChild(contentCredit);

  contentDiv.appendChild(contentNumber);
  contentDiv.appendChild(contentRight);

  return contentDiv;
}

// render functions

function renderCoverPage() {
  const cover = createElementWithClass("div", "cover");
  const coverTitle = createElementWithClass("h1", null, "Pandemania");
  const coverImage = new Image();
  coverImage.src = shufflePlaceholder;
  cover.appendChild(coverTitle);
  cover.appendChild(coverImage);
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
  titleDivTOC.classList.add("titleDivTOC");
  const titleTopTOC = document.createElement("h2");
  titleTopTOC.textContent = "Anxiety";
  const titleBottomTOC = document.createElement("h2");
  titleBottomTOC.textContent = "Aspirations";
  const titleSubTOC = document.createElement("h3");
  titleSubTOC.textContent = "Contents";

  const contentsTOC = document.createElement("div");
  contentsTOC.classList.add("contentsTOC");
  const contentData = [
    { number: "01", title: "The Mask", author: "Bulabos, Kyla Cresly" },
    { number: "02", title: "The Formula", author: "Portillo, Kyle Andre" },
    {
      number: "03",
      title: "a moment in my head",
      author: "Rosario, Mara Dominique",
    },
    {
      number: "04",
      title: "A New Challenge",
      author: "Santos, Aleco Emmanuel",
    },
    { number: "05", title: "Caged", author: "Ventura, Diane Grace" },
    { number: "06", title: "FUTURE", author: " Uy, Corven Alfred Joseph" },
    { number: "07", title: "The Overman", author: "Dinglasan, Chris Emmanuel" },
  ];
  contentData.forEach((data) => {
    const contentDiv = createContentDiv(data.number, data.title, data.author);
    contentDiv.classList.add("contentDivTOC");
    contentsTOC.appendChild(contentDiv);
  });

  titleDivTOC.appendChild(titleTopTOC);
  titleDivTOC.appendChild(titleBottomTOC);
  titleDivTOC.appendChild(titleSubTOC);
  rightTOC.appendChild(titleDivTOC);
  rightTOC.appendChild(contentsTOC);
  tableOfContents.appendChild(leftTOC);
  tableOfContents.appendChild(rightTOC);
  return tableOfContents;
}

function renderTheMaskPage() {
  const theMaskPage = createElementWithClass("div", "theMaskPage", null);
  const theMaskTitle = createElementWithClass("h1", null, "The Mask");

  const theMaskContent = createElementWithClass("div", "theMaskContent", null);
  const theMaskImage = new Image();
  theMaskImage.src = theMaskPlaceholder;
  const theMaskText = createElementWithClass(
    "p",
    null,
    "Entering this global pandemic, we have been required to wear masks for the benefit of our safety. This artwork shows a different side of how these masks covered not just our mouth and nose, but also our eyes and the reality we could have had if it weren’t for the global phenomenon and the poor government response."
  );
  theMaskContent.appendChild(theMaskImage);
  theMaskContent.appendChild(theMaskText);

  theMaskPage.appendChild(theMaskTitle);
  theMaskPage.appendChild(theMaskContent);
  return theMaskPage;
}

function renderFooter() {
  const footer = createElementWithClass("footer", null);
  const footerText = createElementWithClass(
    "p",
    null,
    `© ${new Date().getFullYear()} Pandemania`
  );
  footer.appendChild(footerText);
  return footer;
}

function renderPage() {
  const container = createElementWithClass("div", "container");
  const components = [
    renderCoverPage(),
    renderTableOfContents(),
    renderTheMaskPage(),
    renderFooter(),
  ];
  container.append(...components);
  document.body.appendChild(container);
}

renderPage();

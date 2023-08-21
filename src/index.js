import "./styles.css";
import shufflePlaceholder from "./assets/images/shufflePlaceholder.jpeg";
import theMaskPlaceholder from "./assets/images/theMaskPlaceholder.jpeg";
import theFormulaPlaceholder from "./assets/images/theFormulaPlaceholder.jpeg";

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

  const contentNumber = createElementWithClass("h3", "TOCNumber", number);
  contentNumber.textContent = number;

  const contentRight = document.createElement("div");

  const contentTitle = createElementWithClass("h3", "TOCTitle", title);
  contentTitle.textContent = title;

  const contentCredit = createElementWithClass("p", "TOCCredit", author);
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
  const titleTopTOC = document.createElement("h3");
  titleTopTOC.textContent = "Anxiety";
  const titleBottomTOC = document.createElement("h3");
  titleBottomTOC.textContent = "Aspirations";
  const titleSubTOC = document.createElement("h2");
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
  const theMaskTitle = createElementWithClass("h2", null, "The Mask");

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

function renderTheFormulaPage() {
  const theFormulaPage = createElementWithClass("div", "theFormulaPage", null);
  const theFormulaContainer = createElementWithClass("div", "theFormulaContainer", null);
  const theFormulaTitle = createElementWithClass("h2", null, "The Formula");

  const theFormulaContent = createElementWithClass("div", "theFormulaContent", null);
  const theFormulaParagraph1 = createElementWithClass(
    "p",
    null,
    "During this Pandemic, most of my problems and anxieties were due to family problems. In order to cope up with it, I was stress eating most of the time which led me to being overweight. Considering my sport was Basketball that is my usual exercise, contact sports are not allowed, which I cannot do. This has caused a lot of insecurities to myself as I am out of shape."
  );
  const theFormulaParagraph2 = createElementWithClass(
    "p",
    null,
    "Thankfully, the Formula 1 sport came to my life. I was very intrigued and interested in the sport that I wanted to become an F1 Driver even though it is impossible. I discovered that the drivers of the sport need to be physically fit as it is demanded and needed in performing. This has inspired me to workout and enroll in a gym which led me to lose weight recently. I learned that motivation can really be from anything."
  );
  const theFormulaPicture = new Image();
  theFormulaPicture.src = theFormulaPlaceholder;

  theFormulaContent.appendChild(theFormulaParagraph1);
  theFormulaContent.appendChild(theFormulaParagraph2);
  theFormulaContainer.appendChild(theFormulaTitle);
  theFormulaContainer.appendChild(theFormulaContent);
  theFormulaContainer.appendChild(theFormulaPicture);
  theFormulaPage.appendChild(theFormulaContainer);

  return theFormulaPage;
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
    renderTheFormulaPage(),
    renderFooter(),
  ];
  container.append(...components);
  document.body.appendChild(container);
}

renderPage();

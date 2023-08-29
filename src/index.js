import "./styles.css";
import shufflePlaceholder from "./assets/images/shufflePlaceholder.jpeg";
import theMaskPlaceholder from "./assets/images/theMaskPlaceholder.jpeg";
import theFormulaPlaceholder from "./assets/images/theFormulaPlaceholder.jpeg";
import aMomentInMyHeadPlaceholder from "./assets/images/aMomentInMyHeadPlaceholder.jpeg";
import aNewChallengePlaceholder from "./assets/images/aNewChallengePlaceholder.jpeg";

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

  const contentTitle = document.createElement("a");
  contentTitle.classList.add("TOCTitle");
  contentTitle.href = `#${title}`;
  contentTitle.textContent = title;

  const contentCredit = createElementWithClass("p", "TOCCredit", null);
  contentCredit.textContent = `BY: `;
  const contentCreditLink = createElementWithClass("a", null, author);
  contentCreditLink.setAttribute("target", "_blank");
  contentCreditLink.setAttribute("href", "#");
  contentCredit.append(contentCreditLink);

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
  const coverDisclaimer = createElementWithClass("p", "coverDisclaimer", "*All images displayed are merely placeholders. Credits are found in the ")
  const disclaimerLink = createElementWithClass("a", null, "GitHub repository");
  disclaimerLink.setAttribute("href", "https://github.com/adiferrer/pandemania");
  disclaimerLink.setAttribute("target", "_blank");
  const disclaimerContinuation = document.createTextNode(". To view the original artworks, please click on the artist links in the table of contents.");
  coverDisclaimer.append(disclaimerLink, disclaimerContinuation);
  const coverImage = new Image();
  coverImage.src = shufflePlaceholder;
  cover.append(coverTitle, coverDisclaimer, coverImage);
  return cover;
}

function renderTableOfContents() {
  const tableOfContents = createElementWithClass("div", "tableOfContents");

  const leftTOC = createElementWithClass("div", "leftTOC");
  const verticalText = createElementWithClass("div", null, "Life in the Pandemic");
  leftTOC.appendChild(verticalText);

  const rightTOC = createElementWithClass("div", "rightTOC");
  const titleDivTOC = createElementWithClass("div", "titleDivTOC");
  const titleTopTOC = createElementWithClass("h3", null, "Anxiety");
  const titleBottomTOC = createElementWithClass("h3", null, "Aspirations");
  const titleSubTOC = createElementWithClass("h2", null, "Contents");

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

  titleDivTOC.append(titleTopTOC, titleBottomTOC, titleSubTOC);
  rightTOC.append(titleDivTOC, contentsTOC);
  tableOfContents.append(leftTOC, rightTOC);
  return tableOfContents;
}

function renderTheMaskPage() {
  const theMaskPage = createElementWithClass("div", "theMaskPage", null);
  theMaskPage.setAttribute('id', 'The Mask');
  const theMaskTitle = createElementWithClass("h2", null, "The Mask");

  const theMaskContent = createElementWithClass("div", "theMaskContent", null);
  const theMaskImage = new Image();
  theMaskImage.src = theMaskPlaceholder;
  const theMaskText = createElementWithClass(
    "p",
    null,
    "Entering this global pandemic, we have been required to wear masks for the benefit of our safety. This artwork shows a different side of how these masks covered not just our mouth and nose, but also our eyes and the reality we could have had if it weren’t for the global phenomenon and the poor government response."
  );
  theMaskContent.append(theMaskImage, theMaskText);

  theMaskPage.appendChild(theMaskTitle);
  theMaskPage.appendChild(theMaskContent);
  return theMaskPage;
}

function renderTheFormulaPage() {
  const theFormulaPage = createElementWithClass("div", "theFormulaPage", null);
  theFormulaPage.setAttribute('id', 'The Formula');
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
  
  theFormulaContent.append(theFormulaParagraph1, theFormulaParagraph2);
  theFormulaPage.append(theFormulaTitle, theFormulaContent, theFormulaPicture);
  return theFormulaPage;
}

function renderAMomentInMyHeadPage() {
  const aMomentInMyHeadPage = createElementWithClass("div", "aMomentInMyHeadPage", null);
  aMomentInMyHeadPage.setAttribute('id', 'a moment in my head');
  const aMomentInMyHeadContainer = createElementWithClass("div", "aMomentInMyHeadContainer", null);

  const aMomentInMyHeadTitleLeft = createElementWithClass("h2", null, "a moment in my head");
  const aMomentInMyHeadTitleRight = createElementWithClass("h2", null, "a moment in my head");

  const aMomentInMyHeadCenter = createElementWithClass("div", "aMomentInMyHeadCenter", null);
  const aMomentInMyHeadImage = new Image();
  aMomentInMyHeadImage.src = aMomentInMyHeadPlaceholder;
  const aMomentInMyHeadParagraph1 = createElementWithClass(
    "p",
    null,
    "this work represents my anxieties over the course of the pandemic and the lockdown, the grim reaper represents how much death and the anxiety of it has been a cause of worry, as is the symbolism of academic failure and the fear of failing and not graduating scattered around the human representation, the human is in a middle of an anxiety attack reflected on my worries about school, as well as the use of dark colours to help high-light what my worries are compared to other people."
  );

  aMomentInMyHeadCenter.append(aMomentInMyHeadImage, aMomentInMyHeadParagraph1);
  aMomentInMyHeadContainer.append(aMomentInMyHeadTitleLeft, aMomentInMyHeadCenter, aMomentInMyHeadTitleRight);
  aMomentInMyHeadPage.appendChild(aMomentInMyHeadContainer);
  return aMomentInMyHeadPage;
}

function renderANewChallengePage() {
  const aNewChallengePage = createElementWithClass("div", "aNewChallengePage", null);
  aNewChallengePage.setAttribute('id', 'A New Challenge');
  const aNewChallengeTitle = createElementWithClass("h2", null, "A New Challenge");

  const aNewChallengeContent = createElementWithClass("div", "aNewChallengeContent", null);
  const aNewChallengePicture = new Image();
  aNewChallengePicture.src = aNewChallengePlaceholder;
  const aNewChallengeParagraph1 = createElementWithClass(
    "p",
    null,
    "I wanted my art to reflect a positive part of my pandemic life. I often get stressed with the combination of school work and home life, and I usually play Genshin Impact to calm myself down and escape for a while. I also believe the best way I’ve kept myself from the anxieties of this world was by occupying myself with new challenges, to stimulate my brain. So I thought I would try for the first time, some sprite/8bit art of my favourite character from genshin! I wasn’t that good at free-handing it, so I layered an existing photo of the character underneath and kind of outlined it, but I thought it came out pretty good!"
  );

  aNewChallengeContent.append(aNewChallengePicture, aNewChallengeParagraph1);
  aNewChallengePage.append(aNewChallengeTitle, aNewChallengeContent);
  return aNewChallengePage;
}

function renderCagedPage() {
  const cagedPage = createElementWithClass("div", "cagedPage", null);
  cagedPage.setAttribute('id', 'Caged');

  const cagedLeft = createElementWithClass("div", "cagedLeft", null);
  const cagedTitle = createElementWithClass("h2", null, "Caged");
  const leftParagraphs = createElementWithClass("div", null, null);
  const cagedParagraph1 = createElementWithClass(
    "p",
    null,
    "Pandemic has made a lot of changes to our world. And for me, I never felt like I'd been trapped in my own home. The place that used to give me comfort and rest, has now become a place of stress and work. I can no longer go outside as much because of fear of getting sick. There was a time where I felt depressed because of school requirements and my family getting ill."
  );
  const cagedParagraph2 = createElementWithClass(
    "p",
    null,
    "Thankfully, God has helped me through these times. He gave me comfort when I was at my lowest. And now, I have become stronger than before. I can balance both my work in my courses and have some time for myself and my hobbies. As for this pandemic, even though everything seems to go downhill, I still have this positive outlook that this will soon pass and that everything will become better. Because even circumstances like this, I can still find happiness with things I do; either with my friends or family."
  );

  const cagedRight = createElementWithClass("div", "cagedRight", null);
  const cagedImageLoop = createElementWithClass("div", "cagedImageLoop", null);

  leftParagraphs.append(cagedParagraph1, cagedParagraph2);
  cagedLeft.append(cagedTitle, leftParagraphs);
  cagedRight.appendChild(cagedImageLoop);
  cagedPage.append(cagedLeft, cagedRight);
  return cagedPage;
}

function renderFuturePage() {}

function renderTheOvermanPage() {}

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
    renderAMomentInMyHeadPage(),
    renderANewChallengePage(),
    renderCagedPage(),
    renderFooter(),
  ];
  container.append(...components);
  document.body.appendChild(container);
}

renderPage();

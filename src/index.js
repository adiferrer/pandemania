import './styles.css';
import shufflePlaceholder from './assets/images/shufflePlaceholder.jpeg';

const container = document.createElement('div');
container.classList.add('container');

const cover = document.createElement('div');
cover.classList.add('cover');
const coverTitle = document.createElement('h1');
coverTitle.textContent = 'Pandemania';
const coverImage = new Image();
coverImage.src = shufflePlaceholder;
cover.appendChild(coverTitle);
cover.appendChild(coverImage);

const tableOfContents = document.createElement('div');
const theMask = document.createElement('div');
const theFormula = document.createElement('div');
const aMomentInMyHead = document.createElement('div');
const aNewChallenge = document.createElement('div');
const caged = document.createElement('div');
const future = document.createElement('div');
const theOverman = document.createElement('div');

const footer = document.createElement('footer');
const footerText = document.createElement('p');
footerText.textContent = '© 2023 Pandemania';
footer.appendChild(footerText);

container.appendChild(cover);
// container.appendChild(tableOfContents);
// container.appendChild(theMask);
// container.appendChild(theFormula);
// container.appendChild(aMomentInMyHead);
// container.appendChild(aNewChallenge);
// container.appendChild(caged);
// container.appendChild(future);
// container.appendChild(theOverman);
container.appendChild(footer);
document.body.appendChild(container);
// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let head = 0;
let middle = 0;
let bottom = 0;
// set state for all of the character's catchphrases
let catchphrases = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    console.log('clicking head', headDropdown.value);
    // increment the head change count state
    head++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url('./assets/${headDropdown.value}-head.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    console.log('clicking middle', middleDropdown.value);
    // increment the middle change count state
    middle++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url('./assets/${middleDropdown.value}-middle.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    console.log('clicking bottom', bottomDropdown.value);
    // increment the bottom change count state
    bottom++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url('./assets/${bottomDropdown.value}-pants.png')`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    console.log('catching phrase', catchphraseButton.value);
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(catchphraseInput.value);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have change the head ${head} times, the body ${middle} times, and the pants ${bottom} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    // and for each catchphrase
    for (let phrase of catchphrases) {
        // create an HTML element with the catchphrase as its text content
        const phraseList = document.createElement('ul');
        phraseList.textContent = phrase;

        // and append that HTML element to the cleared-out DOM
        catchphrasesEl.append(phraseList);
    }
}

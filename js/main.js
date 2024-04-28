import { textOptions } from './texts.js';

const SELECTORS = {
   MAIN_TEMPLATE: '#main-template',
   MAIN: '.main',
   HEADER: '.header',
   START_BUTTON: '#startButton',
   NEW_TEST_BUTTON: '#newTestButton',
   TEXT_AREA: '#textarea-main',
   TEXT_OVERLAY: '#textarea-overlay',
   LANGUAGE_RADIOS: 'input[name="language"]',
   STATS: '.stats',
   LANGUAGE_BAR: '#language-bar',
 };

const { querySelector, querySelectorAll, addEventListener } = document;

const mainTemplate = querySelector(SELECTORS.MAIN_TEMPLATE).content.cloneNode(true);
addEventListener('DOMContentLoaded', () => document.body.appendChild(mainTemplate));

const main = querySelector(SELECTORS.MAIN);
const header = querySelector(SELECTORS.HEADER);
const startButton = querySelector(SELECTORS.START_BUTTON);
const newTestButton = querySelector(SELECTORS.NEW_TEST_BUTTON);
const textArea = querySelector(SELECTORS.TEXT_AREA);
const textOverlay = querySelector(SELECTORS.TEXT_OVERLAY);
const languageRadios = querySelectorAll(SELECTORS.LANGUAGE_RADIOS);

const stats = querySelector(SELECTORS.STATS);
const languageBar = querySelector(SELECTORS.LANGUAGE_BAR);
stats.style.display = 'none';
newTestButton.hidden = true;

startButton.addEventListener('click', startTest);
newTestButton.addEventListener('click', newTest);

addEventListener('paste', function (event) { // Заборона вставки
   event.preventDefault();
   return false;
});

let timerInterval;
function startTimer() {
   let seconds = 0;
   let minutes = 0;

   const timerDisplay = header;

   document.addEventListener('input', function () {
      if (!timerInterval) {
         timerInterval = setInterval(() => {
            seconds++;

            if (seconds === 60) {
               seconds = 0;
               minutes++;
            }

            const formattedTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            timerDisplay.textContent = formattedTime;
         }, 1000);
      }
   });
   return timerInterval;
}

function stopTimer() {
   clearInterval(timerInterval);
}

function checkAllInputs() {
   const allSpans = textOverlay.querySelectorAll('span');
   let isCorrect = true;

   allSpans.forEach(span => {
      const index = Array.from(span.parentNode.children).indexOf(span);
      const inputValue = textArea.value[index];

      if (inputValue !== span.innerText) isCorrect = false;
   });

   return isCorrect;
}

function getTotalCharacters(arrayOfStrings) {
   let totalCharacters = 0;
   for (let i = 0; i < arrayOfStrings.length; i++)
      totalCharacters += arrayOfStrings[i].length;
   return totalCharacters;
}

function getLineNumber(textarea) {
   const textBeforeCursor = textarea.value.substring(0, textarea.selectionStart);
   const lineNumber = textBeforeCursor.split('\n').length;
   return lineNumber;
}

function resetTextStyle() {
   const allSpans = document.querySelectorAll('span');
   let textAreaIndex = 0;

   for (let index = 0; index < allSpans.length; index++) {
      let textAreaValue = textArea.value[textAreaIndex];
      const span = allSpans[index].innerText;

      if (textAreaValue === '\n') {
         textAreaIndex++;
         textAreaValue = textArea.value[textAreaIndex]
      }
      if (textAreaValue && span === textAreaValue) {
         allSpans[index].style.color = 'rgb(91, 44, 138)';
         allSpans[index].style.textDecoration = 'none';
      } else if (textAreaValue) {
         allSpans[index].style.color = 'red';
         allSpans[index].style.textDecoration = 'underline';
      } else {
         allSpans[index].style.color = '#dddddd';
         allSpans[index].style.textDecoration = 'none';
      }
      textAreaIndex++;
   }
}

function renderNewQuote(textArray) {
   textOverlay.innerHTML = '';

   textArray.forEach(line => {
      line.split('').forEach(character => {
         const characterSpan = document.createElement('span');
         characterSpan.innerText = character;
         textOverlay.appendChild(characterSpan);
      });

      textOverlay.appendChild(document.createElement('br'));
   });
}

function newTest() {
   location.reload();
}

function checkSelectedLanguage() {
   let selectedLanguage = "";
   languageRadios.forEach(radio => {
      if (radio.checked) selectedLanguage = radio.id;
   });
   return selectedLanguage;
}

function getRandomText(selectedLanguage) {
   const selectedTextOptions = textOptions.filter(option => option.type === selectedLanguage);
   const randomIndex = Math.floor(Math.random() * selectedTextOptions.length);
   const randomText = selectedTextOptions[randomIndex].text;
   return randomText;
}

function startTest() {
   textArea.value = '';
   header.innerHTML = 'Start typing..';
   const selectedLanguage = checkSelectedLanguage();
   const textArray = getRandomText(selectedLanguage);
   const totalCharacters = getTotalCharacters(textArray);

   const initialWidth = 600;
   textArea.style.width = initialWidth + 'px';
   const textLines = textArray.length;
   const lineHeight = 23;
   const maxHeight = 2000;
   const requiredHeight = Math.min(maxHeight, textLines * lineHeight);
   textArea.style.height = requiredHeight + 'px';

   startButton.hidden = true;
   stats.style.display = 'flex';
   languageBar.style.display = 'none';

   let mistakes = document.querySelector('#stats-mistakes');
   let accuracy = document.querySelector('#stats-accuracy');

   let mistakesCount = 0;
   let accuracyPercentage = 100;

   renderNewQuote(textArray);
   startTimer();

   textArea.addEventListener('input', function (e) { // Введення тексту
      const inputValue = e.data;
      let cursorPosition = this.selectionStart;
      const linePosition = getLineNumber(textArea);

      const allSpans = textOverlay.querySelectorAll('span');
      const charAtIndex = allSpans[cursorPosition - linePosition];

      resetTextStyle();

      if (inputValue !== charAtIndex.innerText && e.inputType !== 'deleteContentBackward') mistakesCount++;

      const totalCorrectCharacters = totalCharacters - mistakesCount;
      accuracyPercentage = (totalCorrectCharacters / totalCharacters) * 100;

      mistakes.textContent = mistakesCount;
      accuracy.textContent = accuracyPercentage.toFixed(2) + '%';

      if (checkAllInputs()) { // Win case
         textArea.style.border = '2px solid green';
         textArea.readOnly = true;
         stopTimer();

         startButton.innerText = 'New test';
         stats.insertBefore(header, stats.firstChild.nextSibling);
         main.insertBefore(newTestButton, main.firstChild.nextSibling);
         newTestButton.hidden = false;
      }
   });

   textArea.addEventListener('keydown', function (e) {  // Табуляція
      if (e.key === 'Tab') {
         e.preventDefault();

         let start = this.selectionStart;
         let end = this.selectionEnd;
         let value = this.value;

         this.value = value.substring(0, start) + '    ' + value.substring(end);
         this.selectionStart = this.selectionEnd = start + 4;
      }
   });
}

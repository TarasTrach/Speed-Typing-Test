import { textOptions } from './texts.js';

const mainTemplate = document.querySelector('#main-template').content.cloneNode(true);
document.addEventListener('DOMContentLoaded', document.body.appendChild(mainTemplate));

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const startButton = document.querySelector('#startButton');
const newTestButton = document.querySelector("#newTestButton");
const textArea = document.querySelector('#textarea-main');
const textOverlay = document.querySelector('#textarea-overlay');
const languageRadios = document.querySelectorAll('input[name="language"]');

const stats = document.querySelector('.stats');
const languageBar = document.querySelector('#language-bar');
stats.style.display = 'none';
newTestButton.hidden = true;

startButton.addEventListener('click', startTest);
newTestButton.addEventListener('click', newTest);

document.addEventListener('paste', function (event) { // Заборона вставки
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

function getCursorPosition(textarea) {
   const textBeforeCursor = textarea.value.substring(0, textarea.selectionStart);
   const lineNumber = textBeforeCursor.split('\n').length;
   return lineNumber;
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

   let totalCharacters = 0;
   let correctCharacters = 0;
   let mistakesCount = 0;
   let accuracyPercentage = 100;

   renderNewQuote(textArray);
   startTimer();

   textArea.addEventListener('input', function (e) { // Введення тексту
      const inputValue = e.data;
      let cursorPosition = this.selectionStart;
      const linePosition = getCursorPosition(textArea);

      const allSpans = textOverlay.querySelectorAll('span');
      const charAtIndex = allSpans[cursorPosition - linePosition];
      const nextChar = allSpans[cursorPosition - linePosition + 1];

      if (!inputValue || !charAtIndex) {
         if (nextChar) {
            nextChar.style.color = '#cccccc';
            nextChar.style.textDecoration = 'none';
         }
         return;
      }

      totalCharacters++;

      if (inputValue === charAtIndex.innerText) {
         charAtIndex.style.color = "rebeccapurple";
         correctCharacters++;
      } else {
         charAtIndex.style.color = "red";
         charAtIndex.style.textDecoration = "underline";
         mistakesCount++;
      }

      mistakes.textContent = mistakesCount;
      accuracyPercentage = (correctCharacters / totalCharacters * 100).toFixed(2);
      accuracy.textContent = accuracyPercentage + '%';

      if (checkAllInputs()) {
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

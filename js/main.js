const header = document.querySelector('.header');
const startButton = document.querySelector('#startButton');
const textArea = document.querySelector('#textarea-main');
const textOverlay = document.querySelector('#textarea-overlay');


startButton.addEventListener('click', startTest);

const textArray = [
   "async function fetchData() {",
   "    try {",
   "        const response = await fetch('https://example.com/data');",
   "        const data = await response.json();",
   "        console.log(data);",
   "    } catch (error) {",
   "        console.error('Error fetching data:', error);",
   "    }",
   "}"
];

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

function renderNewQuote() {
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


function startTest() {
   textArea.value = '';
   header.innerHTML = 'Start typing..';

   textArea.style.width = '700px';
   textArea.style.height = '200px';

   renderNewQuote();

   textArea.addEventListener('keydown', function (e) { // Табуляція
      if (e.key === 'Tab') {
         e.preventDefault();

         let start = this.selectionStart;
         let end = this.selectionEnd;
         let value = this.value;

         this.value = value.substring(0, start) + '    ' + value.substring(end);
         this.selectionStart = this.selectionEnd = start + 4;
      }
   });

   textArea.addEventListener('input', function (e) { // Введення тексту
      const inputValue = e.data;
      let cursorPosition = this.selectionStart;
      const linePosition = getCursorPosition(textArea);

      const allSpans = textOverlay.querySelectorAll('span');
      const charAtIndex = allSpans[cursorPosition - linePosition];
      const nextChar = allSpans[cursorPosition - linePosition + 1];

      if (!inputValue || !charAtIndex) {
         if (nextChar) {
            nextChar.style.color = '#999';
            nextChar.style.textDecoration = 'none';
         }
         return;
      }

      if (inputValue === charAtIndex.innerText) {
         charAtIndex.style.color = "rebeccapurple";
      } else {
         charAtIndex.style.color = "red";
         charAtIndex.style.textDecoration = "underline";
      }

      if (checkAllInputs()) {

      }
   });
}

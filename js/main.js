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



function startTest() {
   textArea.value = '';
   header.innerHTML = 'Start typing..';

   textArea.style.width = '700px';
   textArea.style.height = '200px';

   textOverlay.innerHTML = textArray.join('<br />');

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

   textArea.addEventListener('input', function (e) {
   });
}

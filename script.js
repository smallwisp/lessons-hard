'use strict'

function DomElement(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;

};

DomElement.prototype.createSquare = function (selector) {
   let div = document.createElement('div');
   div.classList.add(selector.slice(1))
   document.body.append(div);
   let getSquare = document.querySelector(`.${selector.slice(1)}`);
   
   getSquare.style.display = 'block';
   getSquare.style.marginTop = this.marginTop;
   getSquare.style.height = this.height;
   getSquare.style.width = this.width;
   getSquare.style.backgroundColor = this.bg;
   getSquare.style.position = 'absolute';
   
}

let square = new DomElement('.square', '100px', '100px', 'black', '16px');

document.addEventListener('DOMContentLoaded', square.createSquare('.square'));
console.log(square);

document.addEventListener('keydown', (event) => {
   let getSquare = document.querySelector(`.square`);
   let squareCoordinates = getSquare.getBoundingClientRect();
   console.log(squareCoordinates);
   console.log(event.code);
   if (event.code === 'ArrowRight') {
      getSquare.style.left = squareCoordinates.left + 10 + 'px';
      console.log(getSquare.style.left);
   } else if (event.key == 'ArrowLeft') {
      getSquare.style.left = squareCoordinates.left - 10 + 'px';

   } else if (event.key == 'ArrowUp') {
      getSquare.style.top = squareCoordinates.top - 10 + 'px';

   } else {
      getSquare.style.top = squareCoordinates.top + 10 + 'px';

   }
});



















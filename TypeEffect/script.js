const text = ['FULL STACK ENGINEER', 'JAVASCRIPT PROGRAMMER', 'UI/UX DESIGNER'];
let count = 0;
let indexOfWord = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++indexOfWord);

    document.querySelector('.effect').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        indexOfWord = 0;
    }
    setTimeout(type, 300);
})();
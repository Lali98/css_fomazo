document.getElementById('css-form').onsubmit = (event) => {
    event.preventDefault();
    document.getElementsByTagName('style')[0].innerHTML = event.target.elements.cssFormazas.value;
}

document.getElementById('cssFormazas').addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        // put caret at right position again
        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});
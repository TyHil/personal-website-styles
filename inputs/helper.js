/* Inputs */

/*Button*/

const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    alert('Button');
  });
}

/*Text*/

const texts = document.querySelectorAll('input[type=text]');
for (let i = 0; i < texts.length; i++) {
  texts[i].addEventListener('change', function () {
    alert('Text: ' + this.value);
  });
}

/*Number*/

const numbers = document.querySelectorAll('input[type=number]');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('change', function () {
    this.value = Math.max(this.min, Math.min(this.max, this.value));
    alert('Number: ' + this.value);
  });
}

/*Textarea*/

const textareas = document.getElementsByTagName('textarea');
for (let i = 0; i < textareas.length; i++) {
  textareas[i].addEventListener('change', function () {
    alert('Text: ' + this.value);
  });
}

/*File*/

const files = document.querySelectorAll('input[type=file]');
for (let i = 0; i < files.length; i++) {
  files[i].addEventListener('change', function () {
    if (this.value.length) {
      alert(URL.createObjectURL(this.files[0]));
    } else {
      alert('Unset');
    }
  });
}

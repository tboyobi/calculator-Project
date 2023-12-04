let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    if (result === undefined || isNaN(result)) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}

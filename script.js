const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function updateDisplay(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    let expression = display.innerText;

    // Prevent division by zero
    if (/\/0(?!\d)/.test(expression)) {
      throw "Division by zero";
    }

    let result = eval(expression);

    if (!isFinite(result)) {
      throw "Math Error";
    }

    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

// Button click handling
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (button.classList.contains("clear")) {
      clearDisplay();
    } else if (button.classList.contains("delete")) {
      deleteLast();
    } else if (button.classList.contains("equal")) {
      calculate();
    } else {
      updateDisplay(value);
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Prevent Enter from triggering unwanted behavior
  if (key === "Enter") {
    event.preventDefault();
    calculate();
    return;
  }

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    updateDisplay(key);
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

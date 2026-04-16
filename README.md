# 🧮 Simple Calculator

A clean and user-friendly web-based calculator built using **HTML, CSS, and JavaScript**. It supports both **button clicks** and **keyboard input**, and performs basic arithmetic operations following the correct order of operations (BODMAS/BIDMAS).

---

## 🚀 Features

* Basic arithmetic operations:

  * Addition (+)
  * Subtraction (−)
  * Multiplication (*)
  * Division (/)
* Supports **keyboard input**
* Follows **correct operator precedence**
* Handles **errors** (e.g., division by zero, invalid expressions)
* Clean and responsive UI
* Backspace (⌫) and Clear (C) functionality

---

## 📁 Project Structure

```
calculator/
│── index.html   # Structure of the calculator
│── style.css    # Styling and layout
│── script.js    # Functionality and logic
```

---

## ▶️ How to Run the Project

1. Download or clone the project files.
2. Make sure all three files are in the same folder.
3. Open `index.html` in any web browser.

---

## 🖱️ How to Use

### Using Mouse

* Click on the number buttons (0–9) to enter values.
* Click on operators (+, −, *, /) to perform calculations.
* Press `=` to get the result.
* Use:

  * `C` → Clear the display
  * `⌫` → Delete the last character

---

### ⌨️ Using Keyboard

| Key       | Action                |
| --------- | --------------------- |
| 0–9       | Enter numbers         |
| + − * /   | Operators             |
| .         | Decimal point         |
| Enter     | Calculate result      |
| Backspace | Delete last character |
| Escape    | Clear display         |

---

## ⚠️ Error Handling

The calculator handles common errors such as:

* Division by zero
* Invalid mathematical expressions
* Infinite or undefined results

If an error occurs, the display will show:

```
Error
```

---

## 🧠 How It Works

* User input is displayed on the screen dynamically.
* The expression is evaluated using JavaScript.
* The calculator respects operator precedence automatically.
* Keyboard events are captured using event listeners.

---

## ⚡ Future Improvements

* Scientific calculator functions (sin, cos, log, etc.)
* Calculation history
* Dark/light theme toggle
* Replace `eval()` with a safer expression parser

---

## 📌 Notes

* This project is for learning purposes.
* The current version uses `eval()` for simplicity. In production applications, a safer parsing method is recommended.

---

## 👨‍💻 Author

Created as a simple web development project using HTML, CSS, and JavaScript.

---

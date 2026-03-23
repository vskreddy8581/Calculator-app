function append(value) {
    let display = document.getElementById("display");

    if (display.value == '0') {
        display.value = value;
    }
    else {
        display.value += value;
    }
}
function toggleSign() {
    let display = document.getElementById("display");

    if(display.value.startsWith('-'))
    {
        display.value=display.value.slice(1);
    }else if(display.value!=="0"){
        display.value="-"+display.value;
    }
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = '0';
    }

}
function clearDisplay() {
    document.getElementById("display").value = "0";
}
function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;

    try {
        let result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        alert("Invalid Expression!");
        display.value = "0";
    }
}
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        append(key);
    }

    // Operators
    else if (["+", "-", "*", "/", "%", "."].includes(key)) {
        append(key);
    }
    // Enter = calculate
    else if (key === "Enter") {
        calculate();
    }

    // Backspace key
    else if (key === "Backspace") {
        backspace();
    }

    // Escape = clear
    else if (key === "Escape"){
        clearDisplay();
    }
});
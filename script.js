let display = document.getElementById("result");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    if (display.value === "") {
        return;
    }

    try {

        let answer = eval(display.value);

        if (answer === Infinity || answer === -Infinity) {
            display.value = "Error";
        } else {
            display.value = answer;
        }

    } catch {

        display.value = "Error";

    }

}

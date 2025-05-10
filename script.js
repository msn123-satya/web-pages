function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function clearResult() {
    const result = document.getElementById("result");
    result.value = "";
}

function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value) || ""; // Evaluate the expression
    } catch (e) {
        alert("Invalid Expression");
        clearResult();
    }
}

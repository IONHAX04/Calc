let result = document.getElementById("result");

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

// Add keyboard event listeners
document.addEventListener("keydown", function (event) {
    const key = event.key;
    
    if (/[0-9+\-*/.=]/.test(key)) {
        // Allow numeric, operator, and equals keys
        appendToResult(key);
    } else if (key === "Enter") {
        // Calculate result on Enter key
        calculateResult();
    } else if (key === "Escape") {
        // Clear result on Escape key
        clearResult();
    }
});

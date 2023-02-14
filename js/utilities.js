function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementFieldId) {
    const elementField = document.getElementById(elementFieldId);
    const elementFieldValueString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldValueString);
    elementField.value = '';
    return elementFieldValue;
}

function setElementText(elementId, newValue) {
    const elementText = document.getElementById(elementId);
    elementText.innerText = newValue;
}
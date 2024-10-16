// Utility js
const $ = (id) => document.getElementById(id)

const addLocalStroge = () => {
    const inputKey = $("input_key");
    const inputValue = $("input_value");

    const keyValue = inputKey.value;
    const valueValue = inputValue.value;

    // add local stroge
    if (keyValue && inputValue) {
        localStorage.setItem(`${keyValue}`, `${valueValue}`)
        sessionStorage.setItem(`${keyValue}`, `${valueValue}`)
    }

    // remove input value 
    inputKey.value = "";
    inputValue.value = "";

}
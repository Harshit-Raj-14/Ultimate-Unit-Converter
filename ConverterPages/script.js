var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;


function myResult() {

    option_from = inputType.value;
    option_to = resultType.value;

    /*LENGTH CONVERTER*/
    if (option_from === "meter" && option_to === "kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (option_from === "meter" && option_to === "Centimeter") {
        result.value = Number(input.value) * 100;
    } else if (option_from === "meter" && option_to === "meter") {
        result.value = input.value
    }


    if (option_from === "kilometer" && option_to === "meter") {
        result.value = Number(input.value) * 1000;
    } else if (option_from === "kilometer" && option_to === "Centimeter") {
        result.value = Number(input.value) * 100000;
    } else if (option_from === "kilometer" && option_to === "kilometer") {
        result.value = input.value
    }


    if (option_from === "Centimeter" && option_to === "kilometer") {
        result.value = Number(input.value) * 0.00001;
    } else if (option_from === "Centimeter" && option_to === "meter") {
        result.value = Number(input.value) * 0.01;
    } else if (option_from === "Centimeter" && option_to === "Centimeter") {
        result.value = input.value
    }


    /*TEMPERATURE CONVERTER*/
    if (option_from === "celsius" && option_to === "fahrenheit") {
        result.value = ((Number(input.value)*9)/5)+32;  
    } else if (option_from === "celsius" && option_to === "kelvin") {
        result.value = Number(input.value) + 273.15;
    } else if (option_from === "celsius" && option_to === "celsius") {
        result.value = input.value;
    }

    if (option_from === "fahrenheit" && option_to === "celsius") {
        result.value = ((Number(input.value)-32)*5)/9;
    } else if (option_from === "fahrenheit" && option_to === "kelvin") {
        result.value = ((Number(input.value)-32)*5)/9 + 273.15;
    } else if (option_from === "fahrenheit" && option_to === "fahrenheit") {
        result.value = input.value;
    }

    if (option_from === "kelvin" && option_to === "fahrenheit") {
        result.value = ((Number(input.value) - 273.15) * 1.8) + 32;
    } else if (option_from === "kelvin" && option_to === "celsius") {
        result.value = Number(input.value) - 273.15;
    } else if (option_from === "kelvin" && option_to === "Kelvin") {
        result.value = input.value;
    }


    /*WEIGHT CONVERTER*/
    if (option_from === "gram" && option_to === "kilogram") {
        result.value = Number(input.value) * 0.001;
    } else if (option_from === "gram" && option_to === "pound") {
        result.value = Number(input.value) / 453.59237;
    } else if (option_from === "gram" && option_to === "gram") {
        result.value = input.value
    }

    if (option_from === "kilogram" && option_to === "gram") {
        result.value = Number(input.value) * 1000;
    } else if (option_from === "kilogram" && option_to === "pound") {
        result.value = Number(input.value) / 0.453592;
    } else if (option_from === "kilogram" && option_to === "kilogram") {
        result.value = input.value
    }

    if (option_from === "pound" && option_to === "kilogram") {
        result.value = Number(input.value) * 0.453592;
    } else if (option_from === "pound" && option_to === "gram") {
        result.value = Number(input.value) * 453.59237;
    } else if (option_from === "pound" && option_to === "Pound") {
        result.value = input.value
    }



    /*CURRENCY CONVERTER*/
    

}
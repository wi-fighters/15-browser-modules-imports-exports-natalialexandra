// import functions from modules files
import { calculateAspectRatio } from "./aspect-ratio.js";
import * as percent from "./percentage.js";

// functionality ==========================================

// special operations ======================================

// modulo
const moduloForm = document.getElementById("modulo-form");

moduloForm.addEventListener("change", () => {
    const modulo_1 = document.getElementById("modulo_1").value;
    const modulo_2 = document.getElementById("modulo_2").value;
    let moduloResult = document.getElementById("modulo_result");
    // calculate
    moduloResult.value = percent.modulo(Number(modulo_1), Number(modulo_2));
});


// percentage calculations ==================================

// percentage

const percentage_1 = document.getElementById("percentage_1");
const percentage_2 = document.getElementById("percentage_2");
const percentageResult = document.getElementById("percentage_result");

percentage_2.addEventListener("keyup", () => {
    percentageResult.value = percent.percentage(percentage_1.value, percentage_2.value);
});


// percentage of x =========================================

const percentageOf_1 = document.getElementById("percentage_1");
const percentageOf_2 = document.getElementById("percentage_2");
const percentageOfResult = document.getElementById("percentage_result");

percentageOf_2.addEventListener("keyup", () => {
    percentageOfResult.value = percent.percentageOf(percentageOf_1.value, percentageOf_2.value);
});

// difference ================================================

const difference_1 = document.getElementById("difference_1");
const difference_2 = document.getElementById("difference_2");
const differenceResult = document.getElementById("difference_result");

difference_2.addEventListener("keyup", () => {
    differenceResult.value = percent.difference(difference_1.value, difference_2.value);
});


// functionality for ratio calculations ======================

const originalWidth = document.getElementById("ratio_1");
const originalHeight = document.getElementById("ratio_2");
const newWidth = document.getElementById("ratio_result-width");
const newHeight = document.getElementById("ratio_result-height");


newWidth.addEventListener("keyup", () => {
    newHeight.value = calculateAspectRatio(originalWidth.value, originalHeight.value, newWidth.value, newHeight.value);
});

newHeight.addEventListener("keyup", () => {
    newWidth.value = calculateAspectRatio(originalWidth.value, originalHeight.value, newWidth.value, newHeight.value);
});

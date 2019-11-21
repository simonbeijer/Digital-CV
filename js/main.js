/**
 * Adding event listerner for onload event.
 * Later used to use more functions.
 */
window.addEventListener('load', onLoadFunctions)

/**
 * Saving elements for other functions to use when to measureing.
 * Stored globally.
 * @type {{ picDiv: HTMLDivElement }} HTMLElement col-pic-div
 * @type {{ scroll: HTMLScrollHeight }} HTMLScrollHeight
 */
const elements = {}

/**
 * Function that get the width of the col-pic-div, to use in other functions.
 * @type {HTMLDivElement} Element col-pic-div
 * @returns {HTMLDivElement} Element col-pic-div
 */
function getElementWidth(selector) {
    return document.querySelector(selector).offsetWidth;
}

/**
 * Function that get the height of the scroll, to use in other functions.
 * @type {HTMLScrollHeight} HTMLScrollHeight
 * @returns {HTMLScrollHeight} HTMLScrollHeight
 */
function getElementHeight(selector) {
    return document.querySelector(selector).offsetHeight;
}

/* ONLOAD */

/**
 * Function that runs other needed functions when the pages loads.
 */
function onLoadFunctions() {
    setupEventlistner();
    fetchAndStoreElements();
    resizedFunction();
    scrolled();
    calculateSidebar();
    updateTime();
}

/**
 * Function that takes element from page and store them in a global element.
 * The elements are then used in other functions.
 */
function fetchAndStoreElements() {
    elements.picDiv = document.querySelector('.col-pic-div');
    elements.scroll = document.documentElement.scrollTop;
}

/* EVENTLISTNERS */

/**
 * This function adds eventlisterns to resize, scroll and click.
 * This is to be used to make that page act responsiv and look smooth.
 */
function setupEventlistner() {
    window.addEventListener('resize', resizedFunction);
    window.addEventListener("scroll", scrolled);
    document.querySelector('.media-button').addEventListener('click', displayMenuFunction);
}

/* SCROLLFUNCTION */

/**
 * This function checks if the page is scrolled and then redirect thru a if statment, to which menu (sidebar/dropdownmenu)
 * is meant to be activ/showing.
 */
function scrolled() {
    let windowWidth = elements.picDiv.offsetWidth
    if (windowWidth <= 798) {
        downMenu();
        barFunction();
    } if (windowWidth > 798) {
        sidebarFunction();
    }
}

/* RESIZEDFUNCTION */

/**
 * This function checks if the page is resized and then redirect thru a if statment, to which menu (sidebar/dropdownmenu)
 * is meant to be activ/showing.
 */
function resizedFunction() {
    let windowWidth = elements.picDiv.offsetWidth;
    if (windowWidth <= 798) {
        document.querySelector('.down-menu').style.display === "none"
        downMenu();
        barFunction()
    } if (windowWidth > 798) {
        calculateSidebar();
    }
}

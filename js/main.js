/**
 * 
 */
window.addEventListener('load', onLoadFunctions)

/**
 * gfxfdshddg
 * @type {{ picDiv: HTMLDivElement }}
 */ 
const elements = {}

/**
 * 
 */
function onLoadFunctions() {
    setupEventlistner();
    fetchAndStoreElements();
    resizedFunction();
    scrolled();
    calculateSidebar();
    updateTime();
}

function fetchAndStoreElements() {
    elements.picDiv = document.querySelector('.col-pic-div');
    elements.scroll = document.documentElement.scrollTop;
}

function setupEventlistner() {
    window.addEventListener('resize', resizedFunction);
    window.addEventListener("scroll", scrolled);
    document.querySelector('.media-button').addEventListener('click', displayMenuFunction);
}

/**
 * 
 */
function getElementWidth(selector) {
    return document.querySelector(selector).offsetWidth;
}

function getElementHeight(selector) {
    return document.querySelector(selector).offsetHeight;
}

/* SCROLLFUNCTION */


/**
 * This function checks if the page is scrolled and then redirect thru a if statment, to which menu (sidebar/dropdownmenu)
 * is meant to be activ/showing.
 */
function scrolled() {
    console.log('SCROLLED');

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
    console.log('RESIZED');
    let windowWidth = elements.picDiv.offsetWidth;
    if (windowWidth <= 798) {
        document.querySelector('.down-menu').style.display === "none"
        downMenu();
        barFunction()
    } if (windowWidth > 798) {
        calculateSidebar();
    }
}



/* DISPLAY MENU */


/**
 * This function drops down a menu if, the if statment checks if the menu is displayed or not.
 * Sets to fixed if its displayed
 */
function displayMenuFunction() {
    console.log("display-menu");
    if (document.querySelector('.down-menu').style.display === "none") {
        document.querySelector('.down-menu').style.position = "fixed";
        document.querySelector('.down-menu').style.display = "flex";
    } else if (document.querySelector('.down-menu').style.display === "flex") {
        document.querySelector('.down-menu').style.display = "none";
        document.querySelector('.down-menu').style.height = "0px";
    }

}

/* DOWNMENU */

/**
 * This function calulates the height of the div over the menu to make it apper to be sticky.
 * Then stickes to the page if the menu is under the first div.
 * 
 */
function downMenu() {
    let scroll2 = document.documentElement.scrollTop;
    // let scroll2 = $(this).scrollTop();
    console.log("test2");
    let colDivPic2 = document.querySelector('.col-pic-div').offsetHeight;
    let mediaButton = document.querySelector('.media-button').offsetHeight;
    let calculate11 = colDivPic2 - scroll2;
    console.log('calculate11:', calculate11)


    console.log('scroll2:', scroll2)
    console.log('colDivPic2:', colDivPic2);
    if (calculate11) {
        document.querySelector(".down-menu").style.marginTop = calculate11 + 60 + "px";
        document.querySelector(".down-menu div").style.width = "100%";
    }
    if (calculate11 <= 0) {
        document.querySelector(".down-menu").style.marginTop = Math.abs(calculate11) + 60 + "px";
        document.querySelector(".down-menu div").style.width = "100%";
    }
    if (scroll2 >= colDivPic2) {
        document.querySelector(".down-menu").style.marginTop = "60px";
        document.querySelector(".down-menu div").style.width = "100%";
    }
    if (scroll2 > colDivPic2) {
        document.querySelector(".media-button").style.position = "sticky";
        document.querySelector(".media-button").style.top = "0";
    }
}

/* DOWNMENU CLICKED */


/**
 * 
 */
document.querySelector('.down-menu div').addEventListener("click", function () {
    document.querySelector('.down-menu').style.display = "none";
    clicked = false;
    console.log("CLICKED");
});


/* SIDEBAR */





/**
 * * This function calulates the height of the div over the sidebar to make it apper to be sticky.
 * Then gets fixed to the page 30% from top and bottom.
 */
function calculateSidebar() {
    let colDivPicTest = document.querySelector('.col-pic-div').offsetHeight;
    let colDivPic = elements.picDiv.offsetHeight;
    console.log('colDivPic:', colDivPic);
    console.log('colDivPicTest:', colDivPicTest);
    let scroll = document.documentElement.scrollTop;
    console.log('scroll:', scroll);

    let calculate = colDivPic - scroll;

    let calculate5 = colDivPic * 0.7;

    if (calculate) {
        document.querySelector(".sidebar").style.marginTop = calculate + "px";
    } if (scroll > calculate5) {
        document.querySelector(".sidebar").style.position = "fixed";
        document.querySelector(".sidebar").style.margin = "30vh 0 30vh 85vw";
    }
}


/**
 * This function calcuates where the page is viewed and the highlights that part the is viewed on the sidebar.
 * The sidebar parts gets highlighted when the page is 30% over the underlying div, vice versa.
 * 
 */
function sidebarFunction() {
    let colDivPic = document.querySelector('.col-pic-div').offsetHeight;
    let col1Div = document.querySelector('.grid-col-1').offsetHeight;
    let col2Div = document.querySelector('.grid-col-2').offsetHeight;
    let col3Div = document.querySelector('.grid-col-3').offsetHeight;
    let col4Div = document.querySelector('.grid-col-4').offsetHeight;
    let col5Div = document.querySelector('.grid-col-5').offsetHeight;

    let scroll = document.documentElement.scrollTop;
    console.log('scroll:', scroll);

    let calculate = colDivPic - scroll;

    let calculate5 = colDivPic * 0.7;
    let cutDiv = col1Div * 0.1;

    let cutDiv2 = col1Div * 0.3;

    if (calculate) {
        document.querySelector(".sidebar").style.marginTop = calculate + "px";
    } if (scroll > calculate5) {
        document.querySelector(".sidebar").style.position = "fixed";
        document.querySelector(".sidebar").style.margin = "30vh 0 30vh 85vw";
    }
    if (scroll > 1) {
        document.querySelector(".nav-1 a").style.background = "black";
    } if (scroll > col1Div - cutDiv) {
        document.querySelector(".nav-1 a").style.background = "grey";
        document.querySelector(".nav-2 a").style.background = "black";
    } if (scroll > col1Div + col2Div - cutDiv) {
        document.querySelector(".nav-2 a").style.background = "grey";
        document.querySelector(".nav-3 a").style.background = "black";
    } if (scroll > col1Div + col2Div + col3Div - cutDiv) {
        document.querySelector(".nav-3 a").style.background = "grey";
        document.querySelector(".nav-4 a").style.background = "black";
    } if (scroll > col1Div + col2Div + col3Div + col4Div - cutDiv) {
        document.querySelector(".nav-4 a").style.background = "grey";
        document.querySelector(".nav-5 a").style.background = "black";
    }
    if (scroll < 1) {
        document.querySelector(".nav-1 a").style.background = "black";
    } if (scroll < col1Div - cutDiv) {
        document.querySelector(".nav-2 a").style.background = "grey";
    } if (scroll < col1Div + col2Div - cutDiv) {
        document.querySelector(".nav-3 a").style.background = "grey";
    } if (scroll < col1Div + col2Div + col3Div - cutDiv) {
        document.querySelector(".nav-4 a").style.background = "grey";
    } if (scroll < col1Div + col2Div + col3Div + col4Div - cutDiv2) {
        document.querySelector(".nav-5 a").style.background = "grey";
    }

    if (scroll > col1Div) {
        document.querySelector(".media-button").style.position = "sticky";
        document.querySelector(".media-button").style.top = "0";
        console.log("funkar");
    }
    if (scroll > col1Div) {
        document.querySelector(".media-button").style.position = "sticky";
        document.querySelector(".media-button").style.top = "0";
        console.log("funkar");
    }
}


function barFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('winScroll:', winScroll)
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log('height:', height)
    var scrolled = (winScroll / height) * 100;
    console.log('scrolled:', scrolled)
    document.getElementById("bar").style.width = scrolled + "%";
}


// instead of href?? //
// var elmnt = document.getElementById("content");
// elmnt.scrollIntoView();

function addZero(i) {
    if(i < 10) {
    i = "0" + i
    }
    return i;
}


function updateTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    document.querySelector(".time").innerText = hour + ":" + minute + ":" + second;
    update = setTimeout(function() {updateTime()}, 500)
    console.log("uppdaterat nu");
}



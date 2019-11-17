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
    // updateTime();
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
 * 
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
 * 
 */
function resizedFunction() {
    console.log('RESIZED');
    let windowWidth = elements.picDiv.offsetWidth;
    if (windowWidth <= 798) {
        downMenu();
        barFunction()
    } if (windowWidth > 798) {
        calculateSidebar();
    }
}



/* DISPLAY MENU */

/**
 * 
 */
function displayMenuFunction() {

    console.log("display-menu");
    if (document.querySelector('.down-menu').style.display === "none") {
        document.querySelector('.down-menu').style.position = "fixed";
        document.querySelector('.down-menu').style.display = "flex";
        console.log('clicked:', clicked)
    } else {
        document.querySelector('.down-menu').style.display = "none";
        console.log('clicked:', clicked)
    }

}

/* DOWNMENU */

/**
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
 * 
 */
function calculateSidebar() {
    let colDivPicTest = document.querySelector('.col-pic-div').offsetHeight;
    let colDivPic = elements.picDiv.offsetHeight;
    console.log('colDivPic:', colDivPic);
    console.log('colDivPicTest:', colDivPicTest);
    // let scroll = $(this).scrollTop();
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
    // let scroll = $(this).scrollTop();
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

    if (scroll > col1Div && clicked === false) {
        document.querySelector(".media-button").style.position = "sticky";
        document.querySelector(".media-button").style.top = "0";
        console.log("funkar");
    }
    if (scroll > col1Div && clicked === true) {
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



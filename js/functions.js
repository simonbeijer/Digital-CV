/* DISPLAY MENU */

/**
 * This function drops down a menu if, the if statment checks if the menu is displayed or not.
 * Sets to fixed if its displayed
 */
function displayMenuFunction() {
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
 */
function downMenu() {
    let scroll2 = document.documentElement.scrollTop;
    let colDivPic2 = document.querySelector('.col-pic-div').offsetHeight;
    let calculate11 = colDivPic2 - scroll2;

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
 * Function that uses display none on the down-menu if it's clicked
 */
document.querySelector('.down-menu div').addEventListener("click", function () {
    document.querySelector('.down-menu').style.display = "none";
});


/* SIDEBAR */

/**
 * This function calulates the height of the div over the sidebar to make it apper to be sticky.
 * Then gets fixed to the page 30% from top and bottom.
 */
function calculateSidebar() {
    let colDivPic = elements.picDiv.offsetHeight;
    let scroll = document.documentElement.scrollTop;

    let calculate = colDivPic - scroll;
    let calculate2 = colDivPic * 0.7;

    if (calculate) {
        document.querySelector(".sidebar").style.marginTop = calculate + "px";
    } if (scroll > calculate2) {
        document.querySelector(".sidebar").style.position = "fixed";
        document.querySelector(".sidebar").style.margin = "30vh 0 30vh 85vw";
    }
}

/**
 * This function calcuates where the page is viewed and the highlights that part the is viewed on the sidebar.
 * The sidebar parts gets highlighted when the page is 30% over the underlying div, vice versa. 
 */
function sidebarFunction() {
    let colDivPic = document.querySelector('.col-pic-div').offsetHeight;
    let col1Div = document.querySelector('.grid-col-1').offsetHeight;
    let col2Div = document.querySelector('.grid-col-2').offsetHeight;
    let col3Div = document.querySelector('.grid-col-3').offsetHeight;
    let col4Div = document.querySelector('.grid-col-4').offsetHeight;

    let scroll = document.documentElement.scrollTop;

    let calculate = colDivPic - scroll;
    let calculate5 = colDivPic * 0.7;
    let cutDiv = col1Div * 0.05;
    const color1 = "rgb(37, 39, 38)";
    const color2 = "rgb(88, 90, 90)";
    if (calculate) {
        document.querySelector(".sidebar").style.marginTop = calculate + "px";
    } if (scroll > calculate5) {
        document.querySelector(".sidebar").style.position = "fixed";
        document.querySelector(".sidebar").style.margin = "30vh 0 30vh 85vw";
    }
    if (scroll > 1) {
        document.querySelector(".nav-1 a").style.background = color1;
    } if (scroll > col1Div - cutDiv) {
        document.querySelector(".nav-1 a").style.background = color2;
        document.querySelector(".nav-2 a").style.background = color1;
    } if (scroll > col1Div + col2Div - cutDiv) {
        document.querySelector(".nav-2 a").style.background = color2;
        document.querySelector(".nav-3 a").style.background = color1;
    } if (scroll > col1Div + col2Div + col3Div - cutDiv) {
        document.querySelector(".nav-3 a").style.background = color2;
        document.querySelector(".nav-4 a").style.background = color1;
    } if (scroll > col1Div + col2Div + col3Div + col4Div - cutDiv) {
        document.querySelector(".nav-4 a").style.background = color2;
        document.querySelector(".nav-5 a").style.background = color1;
    }
    if (scroll < 1) {
        document.querySelector(".nav-1 a").style.background = color1;
    } if (scroll < col1Div - cutDiv) {
        document.querySelector(".nav-2 a").style.background = color2;
    } if (scroll < col1Div + col2Div - cutDiv) {
        document.querySelector(".nav-3 a").style.background = color2;
    } if (scroll < col1Div + col2Div + col3Div - cutDiv) {
        document.querySelector(".nav-4 a").style.background = color2;
    } if (scroll < col1Div + col2Div + col3Div + col4Div - cutDiv) {
        document.querySelector(".nav-5 a").style.background = color2;
    }

    if (scroll > col1Div) {
        document.querySelector(".media-button").style.position = "sticky";
        document.querySelector(".media-button").style.top = "0";
    }
    if (scroll > col1Div) {
        document.querySelector(".media-button").style.position = "sticky";
        document.querySelector(".media-button").style.top = "0";
    }
}



/**
 * Function that mesures the scroll height and then fills in a div.
 * For knowing how high the site is.
 */
function barFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
}



/**
 * This function adda a zero if the number is under 10 before the number is showed.
 * @param {number} i number from updateTime
 * @returns {number} number with added zero
 */
function addZero(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

/**
 * Function that updates ever half second then updates the time is the time has changed.
 * Then the function refers to itself to update again. 
 */
function updateTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    document.querySelector(".time").innerText = hour + ":" + minute + ":" + second;
    update = setTimeout(function () { updateTime() }, 500)
}
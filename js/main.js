/**
 * 
 */
window.addEventListener('load', onLoadFunctions)

/**
 * 
 */
function onLoadFunctions() {
    // createConsts();
}


// function createConsts() {
//     const displayMenu = document.querySelector('#display-menu');
//     console.log('displayMenu:', displayMenu)
// }



// document.querySelector('#display-menu').addEventListener('click', displayMenuFunction);
let clicked = false;
function displayMenuFunction() {
    
    console.log('clicked:', clicked)

    console.log("display");
    if(clicked === false) {
        document.querySelector('.sidebar').style.display = "block";
        document.querySelector('.sidebar').style.position = "absolute";
        document.querySelector('.sidebar').style.width = "100%";
        clicked = true;
        console.log('clicked:', clicked)
    } else if (clicked === true) {
        document.querySelector('.sidebar').style.display = "none";
        clicked = false;
        console.log('clicked:', clicked)
    }
    
}


// $(document).ready(function () {
//     $(this).scrollTop(0);
// });


// window.addEventListener("scroll",test, test2);


let width = document.querySelector('.col-pic-div').offsetWidth;
console.log('width:', width)

if (width < 798) {
    window.addEventListener("scroll", test2);
} else {
    window.addEventListener("scroll", test);
}

function test() {
    let colDivPic = document.querySelector('.col-pic-div').offsetHeight;
    console.log('colDivPic:', colDivPic);
    let col1Div = document.querySelector('.grid-col-1').offsetHeight;
    console.log('col1Div:', col1Div);
    let col2Div = document.querySelector('.grid-col-2').offsetHeight;
    console.log('col2Div:', col2Div);
    let col3Div = document.querySelector('.grid-col-3').offsetHeight;
    console.log('col3Div:', col3Div);
    let col4Div = document.querySelector('.grid-col-4').offsetHeight;
    console.log('col4Div:', col4Div);
    let col5Div = document.querySelector('.grid-col-5').offsetHeight;
    console.log('col5Div:', col5Div);

    console.log('col1Div:', col1Div);
    let scroll = $(this).scrollTop();
    console.log('scroll:', scroll);
    wH = $(window).height();

    // const heightOfSCroll = documnet.querySelector('scroll');
    let calculate = colDivPic - scroll;

    let calculate5 = colDivPic * 0.7;
    let cutDiv = col1Div * 0.1;

    if (calculate) {
        document.querySelector(".sidebar").style.marginTop = calculate + "px";
        document.querySelector(".sidebar").style.display = "flex";
    } if (scroll > calculate5) {
        document.querySelector(".sidebar").style.position = "fixed";
        document.querySelector(".sidebar").style.margin = "30vh 0 30vh 85vw";
    }

    cutDiv2 = col1Div * 0.3;

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
}

function test2() {
    console.log("test2");
    let colDivPic2 = document.querySelector('.col-pic-div').offsetHeight;
    let calculate10 = 60 + colDivPic2;
    console.log('calculate10:', calculate10)
    console.log('colDivPic2:', colDivPic2);
    if (calculate10) {
        document.querySelector(".sidebar").style.marginTop = calculate10 + "px";
        document.querySelector(".sidebar").style.width = "100%";

    }
}





// $(window).scroll(function() {
//     let colPicT = $('.col-pic-div').offset().top,
//         colPicH = $('.col-pic-div').outerHeight(),
//         col1T = $('.col-1-div').offset().top,
//         col1H = $('.col-1-div').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//      console.log((colPicT-colPicH) , wS);
//     if (wS > (colPicT+colPicH-wH)){
//         document.querySelector(".nav-1 a").style.background = "black";
//     } else if (wS > (col1T+col1H-wH) && wS < (colPicT+colPicH-wH) ) {
//         document.querySelector(".nav-1 a").style.background = "rgba(133, 130, 130, 0.808)";
//         document.querySelector(".nav-2 a").style.background = "black";
//     }
// });

// $(window).scroll(function() {
//     var hT = $('.grid-col-1').offset().top,
//         hH = $('.grid-col-1').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//      console.log((hT-wH) , wS);
//     if (wS > (hT+hH-wH)){
//         document.querySelector(".nav-1 a").style.background = "black";
//     }
// });


// instead of href?? //
// var elmnt = document.getElementById("content");
// elmnt.scrollIntoView();


// // When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };

// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     console.log('winScroll:', winScroll)
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     console.log('height:', height)
//     var scrolled = (winScroll / height) * 100;
//     console.log('scrolled:', scrolled)
//     document.getElementById("myBar").style.width = scrolled + "%";
//     if (winScroll === 0) {
//         document.querySelector("aside").style.display = "flex";
//         document.querySelector("aside").style.marginTop = "99vh";
//     } if (winScroll > 400) {
//         document.querySelector("aside").style.display = "flex";
//         document.querySelector("aside").style.margin = "30vh 0 30vh 78vw;";
//     }
//     // if (winScroll > 800) {
//     //     document.querySelector("aside").style.display = "flex";
//     //     document.querySelector(".aside-1").style.background = "blue";
//     // } if (winScroll > 1200) {
//     //     document.querySelector("aside").style.display = "flex";
//     //     document.querySelector(".aside-1").style.background = "white";
//     //     document.querySelector(".aside-2").style.background = "blue";
//     // } if (winScroll > 1600) {
//     //     document.querySelector("aside").style.display = "flex";
//     //     document.querySelector(".aside-2").style.background = "white";
//     //     document.querySelector(".aside-3").style.background = "blue";
//     // }
//     //  else if (winScroll < 800) {
//     // document.querySelector("aside").style.display = "none";
//     // document.querySelectorAll("aside").style.background = "white";
//     // }
// }


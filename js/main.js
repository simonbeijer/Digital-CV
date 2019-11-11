window.addEventListener('load', onLoadFunctions)

function onLoadFunctions() {
    look();
}

const profile = document.querySelector('profile');

function look() {
    if(window.location.profile) {
        document.querySelector('.aside-1').style.background = "white";
    }
}



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


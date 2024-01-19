/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
// if(window.location.hash) {
//     var hash = window.location.hash;
//     $('html, body').animate({
//         scrollTop: $(hash).offset().top
//     }, 1500, 'swing');
// };

// to top right away
function scrollOnPageLoad() {
    // to top right away
    if (window.location.hash) scroll(0, 0);
    // void some browsers issue
    setTimeout(scroll(0, 0), 1);
    var hashLink = window.location.hash;
    if ($(hashLink).length) {
        $(function () {
            // *only* if we have anchor on the url
            // smooth scroll to the anchor id
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 77
            }, 1600);
        });
    }
}
scrollOnPageLoad();



// var offerPanel;
// var offerPanels;

// window.addEventListener("load", function(event) {
// offerPanel = document.querySelectorAll(".animated-offer-col, .animated-col-special");

// createObserver();
// }, false);

// function createObserver() {
// var observer;

// var options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: .4
// };

// observer = new IntersectionObserver(handleIntersect, options);

// offerPanel.forEach(offerPanels => {
//     observer.observe(offerPanels);
// });
// }

// function handleIntersect(entries, observer) {
//     entries.forEach(function(entry, i) {
//     if (entry.isIntersecting) {
//         setTimeout(() => {
//         entry.target.classList.add("visible", "fadeInUp")
//         }, 2600);
//     } else {
//     }
//     });
// }


// const elements = document.querySelectorAll('.animatedh2');
// const observer2 = new IntersectionObserver(handleIntersection);

// elements.forEach(obs => {
//     observer2.observe(obs);
// });

// function handleIntersection(entries, observer2){
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//         setTimeout(() => {
//             $(".animatedh2").addClass("visible fadeInUp");
//         }, 500);
//       observer2.unobserve(entry.target);
//     }
//   });
// }




$(".navbar-toggler").on('click', function (event) {
    setTimeout(() => {
    $(".navbar-nav").css("opacity", "1");
    }, 1800);
});

$(".navbar-toggler").click(function() {
    setTimeout(() => {
        $( ".navbar-nav" ).toggleClass("opacity")
    }, 400);
});

$(".nav-item").click(function() {
    $( ".navbar-collapse" ).toggleClass("show")
});



function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


$(document).ready(function() {
    if (!(window.location.href.indexOf("portfolio") > -1)) {
        (function () {
            var width = screen.width,
                height = screen.height;
            setInterval(function () {
                if (screen.width !== width || screen.height !== height) {
                    width = screen.width;
                    height = screen.height;
                    replay();
                }
            }, 50);
        }());
    }
});



$(document).ready(function () {
    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
});


for(var i = 0; i < 8; i++) {
    $('#toggle'+i).click(function() {
        $('#toggle1').toggleClass('active');
        $('#overlay-hamburger').toggleClass('open');
    });
};

$(document).ready(function () {
    if (window.location.href.indexOf("my-offer") > -1) {
        document.getElementById("offerscroll").click();
    } else if (window.location.href.indexOf("portfolio") > -1) {
        document.getElementById("portfolioscroll").click();
    } else if (window.location.href.indexOf("about-me") > -1) {
        document.getElementById("aboutmescroll").click();
    } else if (window.location.href.indexOf("skills") > -1) {
        document.getElementById("skillsscroll").click();
    } else if (window.location.href.indexOf("contact") > -1) {
        document.getElementById("contactscroll").click();
    } else if (window.location.href.indexOf("home") > -1) {
        document.getElementById("homescroll").click();
    }
});


// if(!!window.IntersectionObserver){
//     let observer = new IntersectionObserver((entries, observer) => { 
//         entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 console.log(entry);
//                 window.history.pushState(null, null, "/");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {rootMargin: "0px 0px -200px 0px"});
//     document.querySelectorAll('#home').forEach(dark => { observer.observe(dark) });
// }



window.addEventListener("load", (event) => {
    boxElement = document.querySelector("#home");

    createObserver();
}, false);

function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}


function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        window.history.pushState(null, null, "/");
    });
}
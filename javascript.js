// let grasklippning = document.querySelector('.grasklippning:checked').value;
// let planteraBlommor = document.querySelector('.planteraBlommor:checked').value;
// let vattna = document.querySelector('.vattna:checked').value;
// let plockaFrukt = document.querySelector('.plockaFrukt:checked').value;

// const tjanster = [grasklippning, planteraBlommor, vattna, plockaFrukt];

// tjanster.forEach(tjanst => {
//     if (tjanst == true) {
//         alert("hej");

//     }
// });

// function kollaValdaTjanster() {

// }
(function () {
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById("header");

  var checkScroll = function () {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 300) {
      header.classList.add("hide");
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove("hide");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
})();

function smoothScrollIntresse() {
  document.querySelector(".valjTjansterContainer").scrollIntoView({
    behavior: "smooth",
  });
}
function smoothScrollBeskrivning() {
  document.querySelector(".presentation").scrollIntoView({
    behavior: "smooth",
  });
}
function smoothScrollTjanster() {
  document.querySelector(".tjanster-container").scrollIntoView({
    behavior: "smooth",
  });
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  let checkboxes = document.querySelectorAll('input[name="tjanst"]:checked');
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  document.getElementById("valdaTjanster").innerHTML =
    "Du vill ha hjälp med att " + values + "!";
  // values.forEach((value) => {
  //     alert("Du vill ha hjälp med att " + value)
  // })
});

function myFunction() {
  var rec = document.getElementById("rec");
  var rec2 = document.getElementById("rec2");

  rec.style.display = rec.style.display == "none" ? "block" : "none";
  rec.style.animation = "mymove 1s infinite";
  rec2.style.display = rec2.style.display == "none" ? "block" : "none";
}


function revealer() {
  var rev = document.querySelectorAll(".revealRight");
  for (var i = 0; x < rev.length; i++) {
    var winHei = window.innerHeight;
    var eleTop = rev[x].getBoundingClientRect().top;
    var eleVis = 150;
    if (eleTop < winHei - eleVis) {
      rev[x].classList.add("active");
    } else {
      rev[x].classList.remove("active");
    var rev = document.querySelectorAll(".revealRight");
    
    for (var x = 0; x < rev.length; x++) {
        var winHei = window.innerHeight;
        
        var eleTop = rev[x].getBoundingClientRect().top;
        var eleVis = 150;
        if (eleTop < winHei - eleVis) {
            rev[x].classList.add("active");
        }
        else {
            rev[x].classList.remove("active");
        }
    }
  }
}
window.addEventListener("scroll", revealer);
revealer;

function reveal() {
  var reveals = document.querySelectorAll(".revealLeft");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal;

var x = 1;

function updateClass() {
  let a = $(".rec.active");
  a.removeClass("active");
  a = a.parent().next(".progress");
  if (a.length == 0) a = $(".progress").first();
  a.find(".rec").addClass("active");
}

$(document).ready(function () {
  setInterval(function () {
    updateClass();
  }, x * 5000);
});

var o = 1;

function updateClass2() {
  let y = $(".rec2.active2");
  y.removeClass("active2");
  y = y.parent().next(".progress2");
  if (y.length == 0) y = $(".progress2").first();
  y.find(".rec2").addClass("active2");
}

$(document).ready(function () {
  setInterval(function () {
    updateClass2();
  }, o * 5000);
});

// ----------bildspel-----------





let bildIndex = 0;
let nytimeout;
let test = 1;
bildspel();
function bildspel() {
  document.querySelectorAll(".enSlide").forEach((item) => {
    if (item.style.display == "none") {
    }
  });
}
    let i;
    let bild = document.getElementsByClassName("enSlide");
    for (i = 0; i < bild.length; i++) {
        bild[i].style.display = "none";
    }
    bildIndex++;
    if (bildIndex > bild.length) {
        bildIndex = 1;
    }
    bild[bildIndex - 1].style.display = "block";
    nytimeout = setTimeout(bildspel, 4000);
}
let bytBild = document.getElementById("bytBild")
bytBild.addEventListener("click", (function () {
    clearTimeout(nytimeout);
    bildspel();
}
));


// ----- medlemshover ---------
imgMouseEnter(x);
imgMouseLeave(x);
function imgMouseEnter(x) {
    let arvidBild = document.getElementById("arvidProfilbild");
    let arvidText = document.getElementById("textRuta");
    arvidBild.addEventListener("mouseenter", function () {
        arvidBild.classList.add("profilbildBlur");
        arvidText.classList.add("namnTextOpacity");
    }, false);
    arvidText.addEventListener("mouseenter", function () {
        arvidBild.classList.add("profilbildBlur");
        arvidText.classList.add("namnTextOpacity");
    }, false);
}
function imgMouseLeave(x) {
    let arvidBild = document.getElementById("arvidProfilbild");
    let arvidText = document.getElementById("textRuta");

    arvidBild.addEventListener("mouseleave", function () {
        arvidText.classList.remove("namnTextOpacity");

        arvidBild.classList.remove("profilbildBlur");
    }, false);
}




// ------Arvids presentation-----

function slide() {
  setTimeout(function () {
    document.getElementById("profilbildPre").style.left = "500px";
  }, 1000);
}

const cart = () => {
  console.log("wwwww");

  let newWin = window.open("about:blank", "hello", "width=200,height=200");

  newWin.document.write("Hello, world!");
};

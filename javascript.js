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

function revealer() {
  var rev = document.querySelectorAll(".revealRight");

  for (var x = 0; x < rev.length; x++) {
    var winHei = window.innerHeight;

    var eleTop = rev[x].getBoundingClientRect().top;
    var eleVis = 150;
    if (eleTop < winHei - eleVis) {
      rev[x].classList.add("active");
    } else {
      rev[x].classList.remove("active");
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
let bytBild = document.getElementById("bytBild");
bytBild.addEventListener("click", function () {
  clearTimeout(nytimeout);
  bildspel();
});

// ----- medlemshover ---------
imgMouseEnter(x);
imgMouseLeave(x);
function imgMouseEnter(x) {
  let arvidBild = document.getElementById("arvidProfilbild");
  let arvidText = document.getElementById("textRuta");
  arvidBild.addEventListener(
    "mouseenter",
    function () {
      arvidBild.classList.add("profilbildBlur");
      arvidText.classList.add("namnTextOpacity");
    },
    false
  );
  arvidText.addEventListener(
    "mouseenter",
    function () {
      arvidBild.classList.add("profilbildBlur");
      arvidText.classList.add("namnTextOpacity");
    },
    false
  );
}
function imgMouseLeave(x) {
  let arvidBild = document.getElementById("arvidProfilbild");
  let arvidText = document.getElementById("textRuta");

  arvidBild.addEventListener(
    "mouseleave",
    function () {
      arvidText.classList.remove("namnTextOpacity");

      arvidBild.classList.remove("profilbildBlur");
    },
    false
  );
}

// ------Arvids presentation-----

function slide() {
  setTimeout(function () {
    document.getElementById("profilbildPre").style.left = "500px";
  }, 1000);
}

// Påbörjat en koppling med vue

const app = Vue.createApp({
  data() {
    return {
      page: "products",
      cart: [],
      products: [
        {
          namn: "Plantera",
          cost: "40",
          image: "bilder/plant.png",
          beskrivning:
            "Vi hjälper dig att välja ut och plantera blommor som passar klimatet och stilen i din trädgård.",
        },
        {
          namn: "Gräsklippning",
          cost: "50",
          image: "bilder/lawn-mower.png",
          beskrivning:
            "Vi håller din gräsmatta vältrimmad genom gräsklippning av olika typer Både underhåll samt nyklippning.",
        },
        {
          namn: "Klippning",
          cost: "400",
          image: "bilder/scissor.png",
          beskrivning:
            "Vi klipper dina buskar och träd i diverse former eller underhåller för att hålla din trädgård snygg.",
        },
        {
          namn: "Rensa",
          cost: "490",
          image: "bilder/garden.png",
          beskrivning:
            "Ska du resa bort eller har inte tid att vattna dina blommor? Vi hjälper dig med detta så att din trädgård håller sig grön.",
        },
      ],
      antal: 0,
    };
  },
  methods: {
    addItemToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
    test1() {
      this.antal++;
    },
  },
});

app.mount("#app");

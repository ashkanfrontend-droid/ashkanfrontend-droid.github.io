


$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
      setTimeout(function() {
        if ($('.collapse.navbar-collapse').hasClass('show')) {
          $('.collapse.navbar-collapse').closest('.col-8').addClass('active');
          console.log('Navbar geöffnet, active hinzugefügt');
        } else {
          $('.collapse.navbar-collapse').closest('.col-8').removeClass('active');
          console.log('Navbar geschlossen, active entfernt');
        }
      }, 800); // setTimeout, um sicherzustellen, dass der Toggle abgeschlossen ist
    });

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

       //>=, not <=
      if (scroll >= 600) {
          //clearHeader, not clearheader - caps H
          $("#header").addClass("sticky");

      }else{
          $("#header").removeClass("sticky");
      }
  }); //missing );

      // Beim Klick auf das Input-Feld
    $('.form-floating input').on('focus', function() {
        $(this).closest('.form-floating').addClass('effect');
    });

    // Beim Verlassen des Input-Felds (Blur)
    $('.form-floating input').on('blur', function() {
        // Prüfen, ob das Input-Feld leer ist
        if ($(this).val().trim() === '') {
            $(this).closest('.form-floating').removeClass('effect');
        }
    });

    // Klick außerhalb des Input-Felds
    $(document).on('click', function(event) {
        // Wenn das geklickte Element kein Input-Feld und kein Label ist
        if (!$(event.target).closest('.form-floating input').length && !$(event.target).closest('.form-floating label').length) {
            $('.form-floating input').each(function() {
                // Prüfen, ob das Input-Feld leer ist
                if ($(this).val().trim() === '') {
                    $(this).closest('.form-floating').removeClass('effect');
                }
            });
        }
    });













// Intersection Observer für Sichtbarkeitsprüfung
const ring = document.getElementById('myRing');
if (ring){
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ring.classList.add('spin-left');
      observer.unobserve(ring); // nur einmal animieren
    }
  });
}, { threshold: 0.5 }); // mind. 50% sichtbar

observer.observe(ring);
}
//RING


//HOVER Function for RING
$('#myRing span').hover(
    function() {
      // Mouseover → Klasse hinzufügen
      $(this).addClass('hover-aktiv');
    },
    function() {
      // Mouseleave → Klasse entfernen
      $(this).removeClass('hover-aktiv');
    }
);


//Mouseebter Function for RING(Mouseebter)
$('#myRing span').on('mouseenter', function() {
  $(this).addClass('hover-aktiv');
}).on('mouseleave', function() {
  $(this).removeClass('hover-aktiv');
});


//Creation of the square
const quad = $('.punkt-quadrat');
for (let i = 0; i < 30; i++) {
  quad.append('<div class="square-dot"></div>');
}

//Mouseebter Function for SQUARE
$('.square-dot').on('mouseenter', function() {
  $(this).addClass('hover-aktiv');
}).on('mouseleave', function() {
  $(this).removeClass('hover-aktiv');
});



//Quadrat Animation
const quadrat = document.getElementById('quadrat');
if (quadrat) {
  const observer_q = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Finde alle Punkte (z. B. Elemente mit der Klasse 'ball') im quadrat
        const balls = quadrat.querySelectorAll('.square-dot');
        const randomBalls = Array.from(balls).sort(() => Math.random() - 0.5).slice(0, 10); // Z. B. 10 zufällige Punkte
        randomBalls.forEach(ball => {
          ball.classList.add('balls_pulse');
        });
        observer_q.unobserve(quadrat); // Nur einmal animieren
      }
    });
  }, { threshold: 0.5 }); // Mindestens 50% sichtbar

  observer_q.observe(quadrat);
}

//QUADRAT ANIMATION on leistung page
const quadrat_intro_leistung = document.getElementById('quadrat_intro_leistung');
if (quadrat_intro_leistung) {
  const observer_q = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Finde alle Punkte (z. B. Elemente mit der Klasse 'ball') im quadrat_intro_leistung
        const balls = quadrat_intro_leistung.querySelectorAll('.square-dot');
        const randomBalls = Array.from(balls).sort(() => Math.random() - 0.5).slice(0, 10); // Z. B. 10 zufällige Punkte
        randomBalls.forEach(ball => {
          ball.classList.add('balls_pulse');
        });
        observer_q.unobserve(quadrat_intro_leistung); // Nur einmal animieren
      }
    });
  }, { threshold: 0.5 }); // Mindestens 50% sichtbar

  observer_q.observe(quadrat_intro_leistung);
}



//Define classes and randomly assign them to subelements of RING & Quadrat
var classes = ['class1', 'class2', 'class3', 'class4', 'class5'];

$('#myRing span').each(function() {
    // Zufällige Zahl zwischen 0 und 3
    var randomIndex = Math.floor(Math.random() * classes.length);
    // Klasse zuweisen
    $(this).addClass(classes[randomIndex]);
});

$('.punkt-quadrat .square-dot').each(function() {
    // Zufällige Zahl zwischen 0 und 3
    var randomIndex = Math.floor(Math.random() * classes.length);
    // Klasse zuweisen
    $(this).addClass(classes[randomIndex]);
});


//Hoverfuncion für mobile mit Mouseenter 
$('.references .text').on('mouseenter', function() {
  $(this).addClass('aktiv-hover');
}).on('mouseleave', function() {
  $(this).removeClass('aktiv-hover');
});



//GO back to Home
$('.goToHomeSeite').on('click', function(){
    window.location.href = '../index.html'; 
  });



function setEqualHeights() {
    // Zurücksetzen der min-height, um alte Werte zu vermeiden
    $('.lsa_3 .singleModule .text').css('min-height', 'auto');
    $('.lsa_3.lsa_n2 .singleModule .text').css('min-height', 'auto');

    // Höhen für die drei nebeneinander stehenden Elemente
    var height1 = $('.lsa_3 .l_m1 .text').outerHeight();
    var height2 = $('.lsa_3 .l_m2 .text').outerHeight();
    var height3 = $('.lsa_3 .l_m3 .text').outerHeight();
    var maxHeight1 = Math.max(height1, height2, height3);

    // Höhen für die zwei nebeneinander stehenden Elemente
    var height4 = $('.lsa_3.lsa_n2 .l_m1 .text').outerHeight();
    var height5 = $('.lsa_3.lsa_n2 .l_m2 .text').outerHeight();
    var maxHeight2 = Math.max(height4, height5);

    // Setze die berechneten Höhen
    $('.lsa_3 .singleModule .text').css('min-height', maxHeight1);
    $('.lsa_3.lsa_n2 .singleModule .text').css('min-height', maxHeight2);
}

function handleResize() {
    var w = $(window).width();

    if (w > 767) {
        setTimeout(setEqualHeights, 0);
    } else {
        // Bei kleineren Bildschirmen min-height zurücksetzen
        $('.lsa_3 .singleModule .text').css('min-height', 'auto');
        $('.lsa_3.lsa_n2 .singleModule .text').css('min-height', 'auto');
    }
}

// Initialer Aufruf
handleResize();

// Resize-Event
$(window).resize(handleResize);





/* hover für mobile*/
document.querySelectorAll('.punkt-quadrat').forEach(el => {
    el.addEventListener('touchstart', () => el.classList.add('active'));
    el.addEventListener('touchend', () => el.classList.remove('active'));
});


















/*### JS FOR SLIDER ###*/
var cur = 0, // Start Slide Index
  pau = 4000, // Pause Time (ms)
  $ga = $('#divSuperfair'), // Cache Gallery Element
  $sl = $('> div', $ga), // Cache Slides Elements
  $ga_2 = $('#sliderControl'), // Cache Navigation Element
  $sl_2 = $('> div', $ga_2), // Cache Navigation Dots
  tot = $sl.length, // Total number of slides
  itv; // Interval for auto-slide

// Initiale Anzeige: Erster Slide und Navigationspunkt aktiv
$sl.removeClass('active').eq(cur).addClass('active');
$sl_2.removeClass('active').eq(cur).addClass('active');

// Funktion zum Stoppen des Auto-Sliders
function stop() {
  clearInterval(itv);
}

// Funktion zum Starten des Auto-Sliders
function play() {
  itv = setInterval(anim, pau);
}

// Funktion zum Wechseln der Slides und Navigationspunkte
function anim() {
  cur = (cur + 1) % tot; // Nächster Slide-Index
  $sl.removeClass('active').eq(cur).addClass('active'); // Slide wechseln
  $sl_2.removeClass('active').eq(cur).addClass('active'); // Navigationspunkt wechseln
}

// Klick-Event für den Slider, um Auto-Sliding zu stoppen
$ga.on('click', function () {
  stop();
});

// Klick-Event für die Navigationspunkte, um zu einem bestimmten Slide zu wechseln
$sl_2.on('click', function () {
  stop(); // Auto-Sliding stoppen
  cur = $(this).index(); // Index des geklickten Navigationspunkts
  $sl.removeClass('active').eq(cur).addClass('active'); // Slide wechseln
  $sl_2.removeClass('active').eq(cur).addClass('active'); // Navigationspunkt aktualisieren
});

// Auto-Slider starten
play();











});

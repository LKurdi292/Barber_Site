// Creation des variables js
let nav = document.getElementById("navigation");
let liens = document.getElementsByClassName("liensNav");
let icon = document.getElementById("icon");


// ************* Couleur Menu *************

window.onresize = colorHeader;
window.onload = colorHeader;

function colorHeader() {

    let myWidth = window.innerWidth;

    // Changement de couleur du menu et des liens après avoir scrollé, 
    // mais seulement quand width > 768, càd quand le menu est visible.
    // En dessous de 768, on est en mode responsive, le menu est caché, 
    // la couleur ne change plus. 
    
    window.onscroll = function() {
        
        if(myWidth > 768) {

            if(document.documentElement.scrollTop > 980) {
                
                nav.style.background = "#373737";
                liens[0].style.color = "white";
                liens[1].style.color = "white";
                liens[2].style.color = "white";
                liens[3].style.color = "white";
                
            } else {
                // remettre les bonnes couleurs quand on remonte
                nav.style.background = "#F0EAd6";
                liens[1].style.color = "#373737";
                liens[0].style.color = "#373737";
                liens[2].style.color = "#373737";
                liens[3].style.color = "#373737";
            }
        
        } else {
            nav.style.background = "#F0EAd6";
            liens[1].style.color = "#373737";
            liens[0].style.color = "#373737";
            liens[2].style.color = "#373737";
            liens[3].style.color = "#373737";
        }
    }
}


// ************* Menu s'affiche et se referme au clic sur le menu  ****************

function toggleNav() {
    // ajout de la classe "responsive" css à l'élément nav quand il n'en a pas
    if (nav.className === "") {
        nav.className += "responsive"; 
    
    } else {
        nav.className = "";
    }
}

for (var i = 0 ; i < liens.length; i++) {
    liens[i].addEventListener('click' , toggleNav , false ) ; 
}


    // *************** Pour que le menu se referme quand on clique n'importe où sur la page
    // mais à l'éxterieur du menu *************


    // jquery
// $('html').click(function () {
    
    //     if (nav.className += "responsive") {
        //         nav.className = "";
        //     }
        // })
        
// $('#icon').click(function (event) {
//      event.stopPropagation();
// })


    // en JS natif 
window.addEventListener('click', function(event) {
    let img = document.getElementById('icon').firstElementChild;
            
    if (img === event.target) return;

    if (nav.className === "responsive") {
        nav.className = "";
    }
})



// ********* Smooth scroll quand on clique sur un lien du menu *************


    // jquery
$('#cisors').click(function() {
    
    $('html,body').animate({ 
        scrollTop: $('#about').offset().top - 50
    })
        'slow'
})

$('.liensNav:nth-child(1)').click(function() {
    
    $('html,body').animate({ 
        scrollTop: $('#accueil').offset().top + 50
    })
        'slow'
})

$('.liensNav:nth-child(2)').click(function() {
    
    $('html,body').animate({ 
        scrollTop: $('#about').offset().top - 50
    })
        'slow'
})

$('.liensNav:nth-child(3)').click(function() {
    
    $('html,body').animate({ 
        scrollTop: $('#tarifs').offset().top - 50
    })
        'slow'
})

$('.liensNav:nth-child(4)').click(function() {
    
    $('html,body').animate({ 
        scrollTop: $('#contact').offset().top - 50
    })
        'slow'
})

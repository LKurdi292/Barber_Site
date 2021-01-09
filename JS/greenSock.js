
// ***********  Affichage de l'accueil quand on arrive sur la page **************

    //jquery
    //l'animation dure 1.5s
    // si opacity =1 ici, c'est que opacity =0 dans style.css
TweenMax.to('h1', 1.5, {
    opacity: 1, 
    ease: Expo.easeInOut
})

TweenMax.to('#accueil h2', 3, {
    delay: 0.3,
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('#cisors', 2, {
    delay: 2.7,
    opacity: 1,
    ease: Expo.easeInOut
})

    // apparition du menu
TweenMax.to('#navigation', 1, {
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation', 1.5, {
    delay: 0.2,
    y: -40,
    ease: Expo.easeIn
})

        // liens nav qui apparaissent les uns après les autres
TweenMax.from('#navigation a:nth-child(1)', 2.5, {
    delay: 1.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(2)', 3, {
    delay: 1.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(3)', 3.5, {
    delay: 1.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(4)', 4, {
    delay: 1.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
})
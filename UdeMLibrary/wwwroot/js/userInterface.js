// Carrusel 1
function nextCard1() {
    const cards1 = document.querySelectorAll('.carousel-container-1 .card');
    const firstCard1 = cards1[0];
    firstCard1.remove();
    document.querySelector('.carousel-container-1').appendChild(firstCard1);
}
setInterval(nextCard1, 3000);

// Carrusel 2
function nextCard2() {
    const cards2 = document.querySelectorAll('.carousel-container-2 .card');
    const firstCard2 = cards2[0];
    firstCard2.remove();
    document.querySelector('.carousel-container-2').appendChild(firstCard2);
}
setInterval(nextCard2, 3000);


//btn
// Obtener todas las tarjetas
const cards = document.querySelectorAll('.card');

// Agregar un evento de mouseover a cada tarjeta
cards.forEach((card) => {
    const buttonsContainer = card.querySelector('.buttons-container');

    // Ocultar los botones inicialmente
    buttonsContainer.style.display = 'none';

    // Mostrar los botones cuando el mouse entra en la tarjeta
    card.addEventListener('mouseenter', () => {
        buttonsContainer.style.display = 'flex';
    });

    // Ocultar los botones cuando el mouse sale de la tarjeta
    card.addEventListener('mouseleave', () => {
        buttonsContainer.style.display = 'none';
    });
});

/* change views */


/*********************************************************************************/
/*********************************** CHAT SUPPORT ********************************/
/*********************************************************************************/
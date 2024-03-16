// userInterface.js
function addToWishlist(bookId) {
    $.ajax({
        url: '/Home/AddToWishlist',
        type: 'POST',
        data: { bookId: bookId },
        success: function () {
            // Redirige a la página de la lista de deseos después de agregar el libro
            window.location.href = '/Home/wishlist.cstml';
        },
        error: function () {
            console.error('Error al agregar a la lista de deseos');
        }
    });
}
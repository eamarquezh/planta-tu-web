
document.addEventListener('DOMContentLoaded', function () {
    // Cierra el menú al hacer clic en un enlace
    var links = document.querySelectorAll('.navbar-nav a');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            var navbar = document.querySelector('.navbar-collapse');
            var bsCollapse = new bootstrap.Collapse(navbar);
            bsCollapse.hide();
        });
    });
});

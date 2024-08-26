document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 80,
      loop: true,
      navigation: {
        nextEl: '#next',
        prevEl: '#prev',
      },
    });
  });




  function toggleFilter() {
    const filterMenu = document.getElementById('filterMenu');
    const filterOptions = document.getElementById('filterOptions');
    filterOptions.classList.toggle('hidden'); // Assuming you have a hidden class to toggle visibility
    filterMenu.querySelector('svg').classList.toggle('rotate-180'); // Toggle the arrow direction
}




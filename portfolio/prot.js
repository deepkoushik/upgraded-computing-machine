document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
});
    
    function toggleMenu() {
      var menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }
   

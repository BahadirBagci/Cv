window.addEventListener('load', function() {
  const animation = document.querySelector('.animation');
  const navItems = document.querySelectorAll('nav a');

  navItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      const left = item.offsetLeft;
      const width = item.offsetWidth;
      animation.style.left = `${left}px`;
      animation.style.width = `${width}px`;
    });

    item.addEventListener('mouseout', function() {
      animation.style.width = '0';
    });
  });
});

  window.addEventListener('load', function() {
    // Yatay menü bağlantılarına tıklandığında kaydırma işlemini gerçekleştirime 
    var links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
            var targetId = link.getAttribute('href').substring(1); // Hedef ID'sini al
            var targetElement = document.getElementById(targetId); // Hedef elementi bul
            var targetOffset = targetElement.offsetTop; // Hedef elementin konumunu al
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth' // Kaydırma işlemini yavaşça yap (animasyonlu)
            });
        });
    });
});

  


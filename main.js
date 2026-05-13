 const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      document.body.classList.toggle('menu-open', isOpen);
      const icon = hamburger.querySelector('i');
      icon.classList.toggle('bi-list', !isOpen);
      icon.classList.toggle('bi-x', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
        const icon = hamburger.querySelector('i');
        icon.classList.add('bi-list');
        icon.classList.remove('bi-x');
      });
    });

    document.addEventListener('click', (e) => {
      if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
        const icon = hamburger.querySelector('i');
        icon.classList.add('bi-list');
        icon.classList.remove('bi-x');
      }
    });

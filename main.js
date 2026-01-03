// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

        // This script adds a class to the body after scrolling 100px
    // and we used these body.scroll styles to create some on scroll 
    // animations with the navbar
    
    document.addEventListener('scroll', (e) => { 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
    document.querySelector('body').classList.add('scroll')
        } else {
        document.querySelector('body').classList.remove('scroll')
        }
    });


    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }

        


// Service Accordion Script
const items = document.querySelectorAll('.service-item');

items.forEach(item => {
  const header = item.querySelector('.service-header');
  const content = item.querySelector('.service-content');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // CLOSE OTHERS
    items.forEach(i => {
      if (i !== item && i.classList.contains('active')) {
        const c = i.querySelector('.service-content');
        c.style.height = c.scrollHeight + 'px';
        requestAnimationFrame(() => {
          c.style.height = '0px';
        });
        i.classList.remove('active');
      }
    });

    // TOGGLE CURRENT
    if (isOpen) {
      content.style.height = content.scrollHeight + 'px';
      requestAnimationFrame(() => {
        content.style.height = '0px';
      });
      item.classList.remove('active');
    } else {
      item.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
    }
  });
});




// TRANSITIONS
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-section .reveal').forEach(el => {
    el.classList.add('active');
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

// Observe ALL reveal elements directly
document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});










const images = [
  'images/client-imgs/client2.png',
  'images/client-imgs/client3.png',
  'images/client-imgs/client4.png',
  'images/client-imgs/client5.png',
  'images/client-imgs/client6.png',
  'images/client-imgs/client7.png',
  'images/client-imgs/client8.png',
  'images/client-imgs/client9.png'
];

let currentIndex = 0;
const img = document.getElementById('slideshowImage');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');

function updateImage(index) {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1;
  }, 150);
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(currentIndex);
});



// SUB SERVICE INFO

document.querySelectorAll('.service-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.service-content');

    const isOpen = item.classList.contains('active');

    // CLOSE ALL OTHER ITEMS
    document.querySelectorAll('.service-item.active').forEach(openItem => {
      if (openItem !== item) {
        const openContent = openItem.querySelector('.service-content');
        openContent.style.height = openContent.scrollHeight + 'px';
        requestAnimationFrame(() => {
          openContent.style.height = '0px';
        });
        openItem.classList.remove('active');
      }
    });

    // TOGGLE CURRENT ITEM
    if (!isOpen) {
      // OPEN
      content.style.height = content.scrollHeight + 'px';
      item.classList.add('active');
    } else {
      // CLOSE
      content.style.height = content.scrollHeight + 'px';
      requestAnimationFrame(() => {
        content.style.height = '0px';
      });
      item.classList.remove('active');
    }
  });
});


// MODAL TEST
function openBooking() {
  document.getElementById("bookingModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
  document.body.style.overflow = "";
}

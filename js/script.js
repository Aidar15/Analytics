const myMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (myMobile.Android() || 
                myMobile.BlackBerry() || 
                myMobile.iOS() || 
                myMobile.Opera() || 
                myMobile.Windows());
    }
};

if( myMobile.any() ) {
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.main-nav__arrow');
    if(menuArrows.length>0) {
        for (let index = 0; index<menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e) {
                menuArrow.parentElement.classList.toggle('_active');
            })
        }
    }
} else {
    document.body.classList.add('_pc');
}

// Меню бургер

const iconMenu = document.querySelector('.header-burger');
const menuBody = document.querySelector('.main-nav');

if(iconMenu) {
    
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Прокрутка при клике

let menuLinks = document.querySelectorAll('.main-nav__item[data-goto]');
if (menuLinks.length>0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const headerHeight = document.querySelector('.main-header__wrapper')
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;
            const gotoBlockValue2 = gotoBlock.getBoundingClientRect().top + window.pageYOffset - headerHeight.offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            if (document.documentElement.clientWidth > 960) {
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            } else {
                window.scrollTo({
                    top: gotoBlockValue2,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }
}

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    slideActiveClass: 'swiper-slide-active',
    slidesPerView: 1.3,
    spaceBetween: 20,
    breakpoints: {
        960: {
            enabled: false,
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
coverflowEffect: {
   rotate: 0,
   stretch: 0,
   depth: 0,
   modifier: 0,
 },
 });


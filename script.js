// == FOR SMOOTH SCROLL ==
const scrollToTopButton = document.querySelector('.scroll-to-top');

scrollToTopButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// == HAMBURGER MENU ==
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
});


// == SLIDER ON HOME PAGE ==
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        perPage: 3,
        gap: '20px',
        arrows: true,
        type: 'loop',
        //height: '400px',
        breakpoints: {
            1200: {
                perPage: 3,
                gap: '15px',
                //height: '550px'
            },
            992: {
                perPage: 2,
                gap: '10px',
                //height: '450px'
                
            },
            768: {
                perPage: 1,
                gap: '5px',
                //height: '450px'
            }
        }
    } );
    splide.mount();
});


// == HEART ACTION ==
function setHeartState(heartIcon, isFilled) {
    const path = heartIcon.querySelector('path');
    if (isFilled) {
        path.setAttribute('fill', 'red');
        path.setAttribute('stroke', 'none');
        heartIcon.dataset.filled = 'true';
    } else {
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'black');
        heartIcon.dataset.filled = 'false';
    }
}

document.querySelectorAll('.author-icon-container').forEach((container, index) => {
    const heartIcon = container.querySelector('svg');
    
    const isFilled = localStorage.getItem(`heartFilled-${index}`) === 'true';
    setHeartState(heartIcon, isFilled);

    container.addEventListener('click', () => {
        const currentlyFilled = heartIcon.dataset.filled === 'true';
        setHeartState(heartIcon, !currentlyFilled);

        localStorage.setItem(`heartFilled-${index}`, !currentlyFilled);
    });
});



// == SECTION OUR PRICING AND OUR TEAM ==
const jsTabs = document.querySelectorAll('.js-tabs')

jsTabs.forEach((jsTab) =>{
    const tabs = jsTab.querySelectorAll("[data-tab-target]");
    const tabContents = jsTab.querySelectorAll("[data-tab-content]");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        target.classList.add("active");
        });
    });
})


// == FAQ ==
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle ('active')
    })
})



// == FILTERMENU ==
const filterButtons = document.querySelectorAll('.filtermenu li');
const filterItems = document.querySelectorAll('.nutrition-post');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        renderFilterItems(filter);
        
        resetLinks();
        button.classList.add('active');
    });
});

function renderFilterItems(query) {
    filterItems.forEach((item) => {
        if (query === 'all' || item.classList.contains(query)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

function resetLinks() {
    filterButtons.forEach(li => {
        li.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFilterItems('all');
    document.querySelector('.filtermenu li[data-filter="all"]').classList.add('active');
});








// == SECTION OUR STORY AND BTN SHOW MORE ===
document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.querySelector('.show-more-btn');
    const allCards = document.querySelectorAll('.story-item');
    let cardsToShow = 4;

    function updateCardVisibility() {
        allCards.forEach((card, index) => {
            if (index < cardsToShow) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });

        if (cardsToShow >= allCards.length) {
            showMoreBtn.style.display = 'none';
        } else {
            showMoreBtn.style.display = 'flex';
        }
    }

    if (window.innerWidth <= 1023) {
        updateCardVisibility();
    }

    showMoreBtn.addEventListener('click', function() {
        if (window.innerWidth <= 1023) {
            const remainingCards = allCards.length - cardsToShow;
            const cardsToReveal = Math.min(3, remainingCards);

            cardsToShow += cardsToReveal;
            updateCardVisibility();
        }
    });
});









// == FOR SMOOTH SCROLL ==
const scrollToTopButton = document.querySelector('.scroll-to-top');

    scrollToTopButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


// == SLIDER ON HOME PAGE ==
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        perPage: 3,
        gap: '20px',
        arrows: true,
        type: 'loop',
    } );
    splide.mount();
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


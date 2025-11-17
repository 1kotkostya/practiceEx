import './scss/styles.scss';
import './scss/items.scss';
import './scss/footer.scss';
import './scss/how.scss';
import './scss/generate.scss';
import './scss/big_cards.scss';
import './scss/unlock.scss';
import './scss/faq.scss';
import './scss/future.scss';
import './scss/realm.scss';
import './scss/build.scss';

// for generate block
const generateItems = document.querySelectorAll('.generate__item');
const generateActiveClass = 'generate__item-active';

if (generateItems?.length) {
    generateItems.forEach(item => {
        item.addEventListener('click', () => {
            generateItems.forEach(item => {
                item.classList.remove(generateActiveClass)
            })
            item.classList.add(generateActiveClass);
        });
    });
}

// for how block

const howItems = document.querySelectorAll('.how__item');
const howItemsImage = document.querySelectorAll('.how__images-item');
const howActiveClass = 'how-active';
const howImageActiveClass = 'active';

if (howItems?.length) {
    howItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            howItems.forEach(item => {
                item.classList.remove(howActiveClass)
                howItemsImage[idx].classList.remove(howImageActiveClass);
            })
            howItemsImage.forEach(item => {
                item.classList.remove(howImageActiveClass)
            })
            howItemsImage[idx].classList.add(howImageActiveClass);
            item.classList.add(howActiveClass);
        });
    });
}

const slider = (containerName, items, prevButton, nextButton) => {
    const sliderContainer = document.querySelector(containerName);
    const itemsContainer = sliderContainer.querySelector(items);
    const prevBtn = sliderContainer.querySelector(prevButton);
    const nextBtn = sliderContainer.querySelector(nextButton);

    const scrollAmount = itemsContainer.clientWidth * 0.8;

    nextBtn.addEventListener('click', () => {
        itemsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        itemsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    itemsContainer.addEventListener('scroll', () => {
        const {scrollLeft, scrollWidth, clientWidth} = itemsContainer;
        prevBtn.style.opacity = scrollLeft > 0 ? '1' : '0.5';
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 5;
        nextBtn.style.opacity = isEnd ? '0.5' : '1';
    });

    itemsContainer.dispatchEvent(new Event('scroll'));
}

slider('.slider-container', '.build__items', '.prev-btn', '.next-btn');
slider('.future-slider-container', '.future__items', '.future-prev-btn', '.future-next-btn');


//for faq

const faqItems = document.querySelectorAll('.faq__item');
const faqItem = document.querySelectorAll('.faq-col');
const faqItemActive = 'faq__item-active';
const colActive = 'collapse-icon-active';

if (faqItems?.length) {
    faqItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            faqItems.forEach(item => {
                item.classList.remove(faqItemActive)
                faqItem[idx].classList.remove(colActive);
            })
            faqItem.forEach(item => {
                item.classList.remove(colActive)
            })
            faqItem[idx].classList.add(colActive);
            item.classList.add(faqItemActive);
        });
    });
}

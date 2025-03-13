import { promotedCards } from './data.js';
import { freshPublishedCards } from './data.js';
import { homeJobSearchItems } from './data.js';
import { careerButtons } from './data.js';
import { careerGuideCards } from './data.js';

//promoted-division's insertion
const promotedCardRow = document.querySelector('.home-page-promoted > .row > .title-container > .row');

let promotedCardsHTML = '';

promotedCards.forEach(card => {
    promotedCardsHTML += `
        <div class="promoted-container col pt-3 me-3 mb-4 text-center">
            <div class="promoted-card container d-flex flex-column justify-content-center">
                <div class="promoted-card-top mb-2">
                    <img class="promoted-card-img" src="${card.src}" alt="${card.alt}">
                </div>
                <div class="promoted-card-bottom mt-1">
                    <h6 class="promoted-card-job">${card.job}</h6>
                    <p class="promoted-card-company">${card.company}</p>
                    <p class="promoted-card-location">${card.location}</p>
                </div>
            </div>
        </div>
    `;

});

promotedCardRow.innerHTML = promotedCardsHTML;

//fresh-published-division's insertion
const freshPublishedRow = document.querySelector('.fresh-published-post');

let freshPublishedCardsHTML = '';

freshPublishedCards.forEach(card => {
    freshPublishedCardsHTML += `
        <a class="col-3 col-md-6 mb-3" href="">
            <div class="fresh-published-card p-3">
                <div class="row">
                    <div class="fresh-published-card-img-container col-3">
                        <img class="img-fluid" src="${card.src}" alt="${card.alt}">
                    </div>
                    <div class="fresh-published-card-info col-9">
                        <span class="fresh-published-pos">${card.job}</span>
                        <br>
                        <span class="fresh-published-comp">${card.company}</span>
                        <br>
                        <span class="fresh-published-loc">${card.location} <b
                                style="color: rgb(51, 51, 51);">•</b> ${card.jobType}</span>
                        <div class="d-flex justify-content-between">
                            <span class="fresh-published-type">Tam zamanlı</span>
                            <span class="fresh-published-new">Yeni</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    `;
});

freshPublishedRow.innerHTML = freshPublishedCardsHTML;

//home page placeholder action

const jobSearchBar = document.getElementById("job-search");

let tempPlaceholder = "";
let i = 0;
let j = 0;
let k;
let addInterval, deleteInterval;

function slowAddPlaceholder() {
    if (j < homeJobSearchItems[i].length) {
        tempPlaceholder += homeJobSearchItems[i].charAt(j);
        jobSearchBar.placeholder = tempPlaceholder;
        j++;
    } else {
        clearInterval(addInterval);
        k = homeJobSearchItems[i].length;
        deleteInterval = setInterval(slowDeletePlaceholder, 100);
    }
}

function slowDeletePlaceholder() {
    if (k >= 0) {
        tempPlaceholder = homeJobSearchItems[i].substring(0, k);
        jobSearchBar.placeholder = tempPlaceholder;
        k--;
    } else {
        clearInterval(deleteInterval);
        i++;
        if (i >= homeJobSearchItems.length) i = 0;
        j = 0;
        tempPlaceholder = "";
        addInterval = setInterval(slowAddPlaceholder, 100);
    }
}

addInterval = setInterval(slowAddPlaceholder, 100);

//career-plan-button-link's insertion

const careerPlanContainer = document.querySelector('.home-career-plan-info');

let careerPlansHTML = "";

careerButtons.forEach((button) => {
    careerPlansHTML += `
        <a class="career-plan-button-link" href="">
            <div class="career-plan-button-container d-flex align-items-center p-4 mb-2">
                <span class="material-symbols-outlined me-3">
                    ${button.icon}
                </span>
                <span class="career-plan-button-text">${button.text}</span>
            </div>
        </a>
    `;
});

careerPlanContainer.innerHTML += careerPlansHTML;

//career-guide-cards's insertion

const careerGuideContainer = document.querySelector('.home-career-guide-container');

let careerGuideCardsHTML = "";

careerGuideCards.forEach((card) => {
    careerGuideCardsHTML += `
        <a class="col-3" href="">
            <div class="home-career-guide-card">
                <img src="${card.src}" alt="${card.alt}">
                <p class="home-career-guide-text ps-4 pt-3 pb-4">${card.text}</p>
            </div>
        </a>
    `;
});

careerGuideContainer.innerHTML = careerGuideCardsHTML;

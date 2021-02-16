"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});
[];
const formatter = new Intl.NumberFormat('nb-NO', {
    style: 'currency',
    currency: 'NOK',
    minimumFractionDigits: 0,
});
const initApp = () => {
    // const fortressUrl = 'https://fortress.no/data/data-2020-interview.json';
    const fortressUrl = './data.json';
    const fetchData = function () {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield fetch(fortressUrl);
            const data = yield resp.json();
            renderData(data);
        });
    };
    const renderData = (data) => {
        /* Rendering the titles */
        const titleWrapper = document.querySelector('.title__wrapper');
        titleWrapper.insertAdjacentHTML('afterbegin', `
  <h2 class="title__item text-primary">${data.title[0]}</h2>
  <h2 class="title__item text-primary">${data.title[1]}</h2>
  `);
        /* Rendering the property details */
        const detailsCard = data.details.map((detail) => {
            return `
        <div class="container details__card">
            <p class="details__item details__name text-primary capitalize">${detail.name}</p>
            <p class="details__item details__value text-secondary ${isNaN(detail.value) ? 'capitalize' : ''}">${isNaN(detail.value)
                ? detail.value
                : formatter.format(detail.value) + ',-'}</p>
        </div>
      `;
        });
        const detailsWrapper = document.querySelector('.details__wrapper');
        detailsWrapper.insertAdjacentHTML('afterbegin', detailsCard.join(''));
        /* Rendering the address */
        const addressWrapper = document.querySelector('.address__wrapper');
        addressWrapper.innerHTML = `
    <div class="address__title text-primary">Adresse</div>

    <div class="address__street text-secondary">
        ${data.address.street}
    </div>
    <div class="zipcode__wrapper">
        <div class="address__zipcode text-secondary">${data.address.zipCode}</div>
        <div class="address__city text-secondary">${data.address.city}</div>
    </div>
  `;
        /* Rendering the contact information */
        const contactWrapper = document.querySelector('.contact__wrapper');
        contactWrapper.innerHTML = `
    <div class="contact__title text-primary">Kontakt</div>
    <div class="contact__name text-secondary">
        <p>${data.contact.name}</p>
    </div>
    <div class="contact__phone text-secondary">
        <p>${data.contact.phone}</p>
    </div>

  `;
        console.log(data);
    };
    fetchData();
};

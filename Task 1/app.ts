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

  const fetchData = async function () {
    const resp = await fetch(fortressUrl);
    const data = await resp.json();
    renderData(data);
  };

  const renderData = (data: any) => {
    /* Rendering the titles */
    const titleWrapper = document.querySelector(
      '.title__wrapper'
    ) as HTMLElement;
    titleWrapper.insertAdjacentHTML(
      'afterbegin',
      `
  <h2 class="title__item text-primary">${data.title[0]}</h2>
  <h2 class="title__item text-primary">${data.title[1]}</h2>
  `
    );

    /* Rendering the property details */
    const detailsCard = data.details.map((detail: any) => {
      return `
        <div class="container details__card">
            <p class="details__item details__name text-primary capitalize">${
              detail.name
            }</p>
            <p class="details__item details__value text-secondary ${
              isNaN(detail.value) ? 'capitalize' : ''
            }">${
        isNaN(detail.value)
          ? detail.value
          : formatter.format(detail.value) + ',-'
      }</p>
        </div>
      `;
    });

    const detailsWrapper = document.querySelector(
      '.details__wrapper'
    ) as HTMLElement;
    detailsWrapper.insertAdjacentHTML('afterbegin', detailsCard.join(''));

    /* Rendering the address */
    const addressWrapper = document.querySelector(
      '.address__wrapper'
    ) as HTMLElement;
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
    const contactWrapper = document.querySelector(
      '.contact__wrapper'
    ) as HTMLElement;
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

document.addEventListener('DOMContentLoaded', () => {
  initalizeApp();
});
[];

const initalizeApp = () => {
  const fortressUrl2 = 'https://fortress.no/data/oppgave-2-2020.json';

  const fetchData = async function () {
    const resp = await fetch(fortressUrl2);
    const data = await resp.json();

    console.log(data);
  };

  fetchData();
};

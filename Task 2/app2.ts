document.addEventListener('DOMContentLoaded', () => {
  initalizeApp();
});
[];

const initalizeApp = () => {
  // const fortressUrl2 = 'https://fortress.no/data/oppgave-2-2020.json';
  const fortressUrl2 = './data.json';

  const fetchData = async function () {
    const resp = await fetch(fortressUrl2);
    const data = await resp.json();

    handleList(data);
  };

  const handleList = (
    data: [
      {
        name: string;
        value: string;
        description: string;
      }
    ]
  ) => {
    const filteredList = data.filter(
      (data) => data.description === 'valid' || data.description === 'true'
    );

    const sortedList = filteredList.sort((a: any, b: any) => b.value - a.value);
    console.log('sortedList', sortedList);
  };

  fetchData();
};

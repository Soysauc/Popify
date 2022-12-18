import Chart from "chart.js/auto";

(async function () {
  const data = [
    { genre: "Dance Pop", count: 55.5 },
    { genre: "Pop", count: 9.6 },
    { genre: "Canadian Pop", count: 5.3 },
    { genre: "Barbadian Pop", count: 2.6 },
    { genre: "Boy Band", count: 2.6 },
    { genre: "Electro Pop", count: 2.2 },
    { genre: "Big Room", count: 1.7 },
    { genre: "British Soul", count: 1.7 },
    { genre: "Neo Mellow", count: 1.7 },
    { genre: "Art Pop", count: 1.4 },
  ];

  new Chart(document.getElementById("bar"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.genre),
      datasets: [
        {
          label: "Top 10 Genres by the number of songs (%)",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();

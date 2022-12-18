import Chart from "chart.js/auto";

(async function () {
  const data = [
    { genre: "Dance Pop", count: 57 },
    { genre: "British Soul", count: 4 },
    { genre: "Electro Pop", count: 5 },
    { genre: "Barbadian Pop", count: 7 },
    { genre: "Canadian Pop", count: 11 },
    { genre: "Pop", count: 16 },
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "pie",
    data: {
      labels: data.map((row) => row.genre),
      datasets: [
        {
          label: "The Proportion of Song Genres by top artists",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();

import Chart from "chart.js/auto";

(async function () {
  const data = [
    { genre: "Dance Pop", count: 324 },
    { genre: "Pop", count: 56 },
    { genre: "Canadian Pop", count: 31 },
    { genre: "Barbadian Pop", count: 15 },
    { genre: "Boy Band", count: 15 },
    { genre: "Electro Pop", count: 13 },
    { genre: "Big Room", count: 10 },
    { genre: "British Soul", count: 10 },
    { genre: "Neo Mellow", count: 9 },
    { genre: "Art Pop", count: 8 },
    { genre: "Canadian Contemporary R&B", count: 7 },
    { genre: "Australian Dance", count: 6 },
    { genre: "Complextro", count: 6 },
    { genre: "Hip Hop", count: 6 },
    { genre: "Australian Pop", count: 5 },
    { genre: "ATL Hip Hop", count: 4 },
    { genre: "EDM", count: 4 },
    { genre: "Hip Hop", count: 4 },
    { genre: "Latin", count: 4 },
    { genre: "Permanent Wave", count: 4 },
  ];

  new Chart(document.getElementById("bell"), {
    type: "doughnut",
    data: {
      labels: data.map((row) => row.genre),
      datasets: [
        {
          label: "Number of Songs per category by top Genre",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();

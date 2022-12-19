import Chart from "chart.js/auto";

(async function () {
  const data = [
    { genre: "Escape Room", count: 90.0 },
    { genre: "Brostep", count: 86.0 },
    { genre: "Alternative R&B", count: 84.0 },
    { genre: "Irish Singer-songwriter", count: 81.0 },
    { genre: "Danish Pop", count: 80.0 },
    { genre: "Celtic Rock", count: 80.0 },
    { genre: "Electronic Trap", count: 79.5 },
    { genre: "EDM", count: 79.0 },
    { genre: "Canadian contemporary R&B", count: 79.0 },
    { genre: "Big Room", count: 77.0 },
    { genre: "Contemporary Country", count: 76.0 },
    { genre: "Electro Pop", count: 76.0 },
    { genre: "Pop", count: 75.5 },
    { genre: "Electro", count: 74.5 },
    { genre: "Canadian Hip Hop", count: 73.5 },
    { genre: "Detroit Hip Hop", count: 73.5 },
    { genre: "Hip Hop", count: 73.0 },
    { genre: "Chicago Rap", count: 73.0 },
    { genre: "Metronopolis", count: 73.0 },
    { genre: "Boy Band", count: 72.0 },
    { genre: "Canadian Pop", count: 72.0 },
    { genre: "House", count: 72.0 },
    { genre: "Latin", count: 72.0 },
    { genre: "British Soul", count: 71.0 },
    { genre: "Australian Hip Hop", count: 70.0 },
    { genre: "Electro House", count: 70.0 },
    { genre: "Indie Pop", count: 69.5 },
    { genre: "Tropical House", count: 69.0 },
    { genre: "Baroque Pop", count: 67.5 },
    { genre: "Dance Pop", count: 67.0 },
    { genre: "Complextro", count: 67.0 },
    { genre: "Australian Pop", count: 66.0 },
    { genre: "Art Pop", count: 62.5 },
    { genre: "Australian Dance", count: 62.5 },
    { genre: "Down Tempo", count: 61.5 },
    { genre: "Barbadian Pop", count: 61.0 },
    { genre: "Belgian EDM", count: 60.0 },
    { genre: "Candy Pop", count: 58.5 },
    { genre: "Acoustic Pop", count: 58.5 },
    { genre: "Hip Hop", count: 58.0 },
    { genre: "French Indie Pop", count: 58.0 },
    { genre: "Permanent Wave", count: 57.5 },
    { genre: "Folk Pop", count: 56.5 },
    { genre: "Neo Mellow", count: 56.0 },
    { genre: "Colombian Pop", count: 56.0 },
    { genre: "Moroccan Pop", count: 53.0 },
    { genre: "Alt Hip Hop", count: 49.0 },
    { genre: "Hollywood", count: 37.0 },
    { genre: "Alaska Indie", count: 36.0 },
    { genre: "Canadian Latin", count: 18.0 },
  ];

  new Chart(document.getElementById("distribution"), {
    type: "line",
    data: {
      labels: data.map((row) => row.genre),
      datasets: [
        {
          label: "Popularity per genre",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();

//need to map names as well

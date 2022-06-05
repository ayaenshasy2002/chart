const ctx = document.getElementById("myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58,123,213,1)");
gradient.addColorStop(1, "rgba(0,210,255,0.3)");

const labels = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
];

const data = {
  labels,
  datasets: [
    {
      data: [400, 311, 231, 555, 726, 455, 524, 455, 524, 455,800],
      label: "My Chart",
      fill: true,
      backgroundColor: gradient,
      pointBckgroundColor: "#000",
      tension: 0.4,
    },
  ],
};

const config = {
    radius: 5,
    hoverRadius:18,
    type: "line",
    data: data,
    options: {
        responsive: true,
    },
};

const myChart = new Chart(ctx, config);
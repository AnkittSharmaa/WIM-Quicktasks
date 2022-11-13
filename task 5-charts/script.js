var xValues = ["Maharashtra", "Tamil Nadu", "Uttar Pradesh", "Gujarat", "Karnataka", "West Bengal", "Rajasthan", "Andhra Pradesh", "Telangana", "Madhya Pradesh"];
var yValues = [28,18,17,16.5,16,12,10,9.5,9,8.5];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7e45",
  "#aaaa44",
  "#11ffee",
  "#eeee11",
  "#000000",
  "#ff1100"
];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Top 10 State-wise GDP Contributors in India (all figures rounded off in nearest million lakh ₹)"
    }
  }
});
new Chart("myChart2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 8, max:30}}],
      }
    }
  });
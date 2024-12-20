// Piechart

var options = {
  series: [45, 55], // You can adjust the values for ERP and DMS
  labels: ["ERP", "DMS"],
  chart: {
    type: "pie",
  },
  colors: ["#f54e4e", "#f96d6d"], // Custom colors for each slice
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#evsd"), options);
chart.render();

// Temp Chart

var options = {
    series: [
    {
      name: 'New York Temperature',
      data: [
        {
          x: 'Jan',
          y: [-2, 4]
        },
        {
          x: 'Feb',
          y: [-1, 6]
        },
        {
          x: 'Mar',
          y: [3, 10]
        },
        {
          x: 'Apr',
          y: [8, 16]
        },
        {
          x: 'May',
          y: [13, 22]
        },
        {
          x: 'Jun',
          y: [18, 26]
        },
        {
          x: 'Jul',
          y: [21, 29]
        },
        {
          x: 'Aug',
          y: [21, 28]
        },
        {
          x: 'Sep',
          y: [17, 24]
        },
        {
          x: 'Oct',
          y: [11, 18]
        },
        {
          x: 'Nov',
          y: [6, 12]
        },
        {
          x: 'Dec',
          y: [1, 7]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'rangeArea'
  },
  stroke: {
    curve: 'monotoneCubic'
  },
//   title: {
//     text: 'New York Temperature (all year round)'
//   },
  markers: {
    hover: {
      sizeOffset: 5
    }
  },
  dataLabels: {
    enabled: false
  },
  yaxis: {
    labels: {
      formatter: (val) => {
        return val + '°C'
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#distrusales"), options);
  chart.render();


//   ERP Chart 

const lineChartData = {
  "monthly": [10, 15, 20, 25, 30],
  "quarterly": [20, 40, 35, 50, 60],
  "yearly": [30, 60, 75, 100, 120],
  "all": [50, 75, 100, 125, 150]
};

const pieChartData = {
  "monthly": [30, 70],
  "quarterly": [40, 60],
  "yearly": [1500, 1000],
  "all": [20000, 10000]
};


const categories = ["Jan", "Feb", "Mar", "Apr", "May"];

const lineChartOptions = {
  chart: { 
      type: 'area', 
      height: 350, 
  },
  series: [{ name: 'Data', data: lineChartData["all"] }],
  xaxis: { categories: categories },
  colors: ['#fc8286'] // Add the desired color here
    // title: { text: 'Line Chart' }
};

const pieChartOptions = {
  chart: { type: 'pie', height: 350 },
  series: pieChartData["all"],
  labels: ['GSD', 'DMS'],
  colors: ["#f54e4e", "#f96d6d"], // Custom colors for each slice
  // title: { text: 'Pie Chart' }
};

const lineChart = new ApexCharts(document.querySelector("#line-chart"), lineChartOptions);
const pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartOptions);

lineChart.render();
pieChart.render();

function updatePieValues(data) {
  document.getElementById('gsd-sales').innerHTML = `${data[0]}`;
  document.getElementById('dms-sales').innerHTML = `${data[1]}`;
}

updatePieValues(pieChartData["all"]);

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
      const range = button.getAttribute('data-range');
      document.querySelectorAll('.buttons button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      lineChart.updateSeries([{ data: lineChartData[range] || lineChartData["all"] }]);
      const pieData = pieChartData[range] || pieChartData["all"];
      pieChart.updateSeries(pieData);
      updatePieValues(pieData);
  });
});
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


//   ERP Chart  ------------------------------------------

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


// DMS Chart ------------------------------------------

const chartData = {
    series: {
        distributor: [44, 55, 41, 64, 22, 30],
        dealer: [53, 32, 33, 52, 13, 40],
        retailer: [24, 12, 34, 61, 11, 20],
        self: [15, 18, 27, 35, 20, 10],
        sister: [12, 9, 21, 8, 30, 15]
    },
    labels: ['Distributor', 'Dealer', 'Retailer', 'Self', 'Sister', 'Excluded'],
    categories: ['One Year', 'Two Years', 'Three Years', 'Four Years', 'Five Years', 'Six Years']
};

let show6thLegend = true;

// Spline Area Chart

let splineAreaChart = new ApexCharts(document.querySelector("#splineAreaChart"), {
    chart: {
        type: 'area',
        height: 400,
        width: 1100,
    },
    series: [{
        name: 'Distributor',
        data: chartData.series.distributor
    }, {
        name: 'Dealer',
        data: chartData.series.dealer
    }, {
        name: 'Retailer',
        data: chartData.series.retailer
    }, {
        name: 'Self',
        data: chartData.series.self
    }, {
        name: 'Sister',
        data: chartData.series.sister
    }],
    xaxis: {
        categories: chartData.categories
    },
    yaxis: {
        title: {
            // text: 'Values'
        }
    },
    legend: {
        position: 'bottom',
    },
    colors: ['#ff4c57', '#fe5d63', '#ff6e73', '#fe8a8d', '#fe9494'] // Add colors here
});


// Polar Area Chart
let polarAreaChart = new ApexCharts(document.querySelector("#polarAreaChart"), {
    chart: {
        type: 'polarArea',
    },
    series: chartData.series.distributor,
    labels: chartData.labels,
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 300
            }
        }
    }],
    legend: {
        show: true,
    },
    colors: ['#ff4c57', '#fe5d63', '#ff6e73', '#fe8a8d', '#fe9494'] // Add colors here

});

splineAreaChart.render();
polarAreaChart.render();

// Render legends count with individual IDs
function renderLegendsCount(series, labels) {
    const legendIds = [
        'legendDistributor',
        'legendDealer',
        'legendRetailer',
        'legendSelf',
        'legendSister',
        'legendExtra'
    ];

    legendIds.forEach((id, index) => {
        const legendElement = document.getElementById(id);
        if (index < series.length) {
            legendElement.textContent = `${series[index]}`;
            legendElement.style.display = 'block';
        } else {
            legendElement.style.display = 'none'; // Hide the legend if not in the current series
        }
    });
    
}

// Initial render of legends count
renderLegendsCount(chartData.series.distributor, chartData.labels);

// Button click event to switch chart data
$('#btnAll').click(() => updateCharts(chartData.series.distributor, chartData.series.dealer, chartData.series.retailer, chartData.series.self, chartData.series.sister));
$('#btnMonthly').click(() => updateCharts([44, 55, 41, 64, 22, 30], [53, 32, 33, 52, 13, 40], [24, 12, 34, 61, 11, 20], [15, 18, 27, 35, 20, 10], [12, 9, 21, 8, 30, 15]));
$('#btnQuarterly').click(() => updateCharts([41, 52, 34, 61, 29, 25], [32, 41, 55, 64, 44, 35], [11, 21, 33, 53, 24, 30], [20, 30, 27, 35, 15, 22], [9, 12, 18, 22, 13, 28]));
$('#btnYearly').click(() => updateCharts([44, 55, 41, 64, 22, 30], [53, 32, 33, 52, 13, 40], [24, 12, 34, 61, 11, 20], [15, 18, 27, 35, 20, 10], [12, 9, 21, 8, 30, 15]));

// Toggle 6th legend visibility
$('#excluded').click(function () {
    show6thLegend = !show6thLegend;

    const updatedSeries = show6thLegend ? chartData.series.distributor : chartData.series.distributor.slice(0, 5);
    const updatedLabels = show6thLegend ? chartData.labels : chartData.labels.slice(0, 5);

    polarAreaChart.updateOptions({
        series: updatedSeries,
        labels: updatedLabels,
    });

    renderLegendsCount(updatedSeries, updatedLabels); // Update legends count
});

function updateCharts(dDistributor, dDealer, dRetailer, dSelf, dSister) {
    splineAreaChart.updateSeries([{
        name: 'Distributor',
        data: dDistributor
    }, {
        name: 'Dealer',
        data: dDealer
    }, {
        name: 'Retailer',
        data: dRetailer
    }, {
        name: 'Self',
        data: dSelf
    }, {
        name: 'Sister',
        data: dSister
    }]);
    polarAreaChart.updateSeries(dDistributor);
    renderLegendsCount(dDistributor, chartData.labels); // Update legends count
}
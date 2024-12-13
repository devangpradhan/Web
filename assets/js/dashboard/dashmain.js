var options = {
    series: [45, 55],  // You can adjust the values for ERP and DMS
    labels: ['ERP', 'DMS'],
    chart: {
        type: 'pie',
    },
    colors: ['#f54e4e','#f96d6d'], // Custom colors for each slice
    responsive: [
        {   
            breakpoint: 480,
            options: {
                chart: {
                    height: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    ]
};

var chart = new ApexCharts(document.querySelector("#evsd"), options);
chart.render();
// tables
const datatable = new simpleDatatables.DataTable("#order-status", {
  paging: false,
  tabIndex: 1,
});

const stock_table = new simpleDatatables.DataTable("#stock-status", {
  paging: false,
  tabIndex: 1,
});

(function () {
  var options_revenue_order = {
    series: [
      {
        name: "Earning",
        type: "line",
        data: [330, 60, 370, 240, 250, 70, 280, 60, 185, 60],
      },
      {
        name: "Order",
        type: "line",
        data: [70, 330, 60, 200, 100, 250, 100, 350, 110, 300],
      },
    ],
    chart: {
      height: 225,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 4,
        color: "#000",
        opacity: 0.08,
      },
    },
    stroke: {
      width: [2, 2, 2],
      curve: "smooth",
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
      opacity: 1,
      type: "solid",
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    xaxis: {
      type: "category",
      tickAmount: 8,
      tickPlacement: "between",
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        color: "var(--chart-border)",
      },
      axisTicks: {
        show: false,
      },
    },

    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 3,
          fillColor: "#009DB5",
          strokeColor: "var(--white)",
          size: 6,
          sizeOffset: 2,
        },
      ],
      hover: {
        size: 6,
        sizeOffset: 0,
      },
    },

    legend: {
      show: false,
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
      tickPlacement: "between",
      labels: {
        formatter: function (val) {
          return val + "K";
        },
        offsetX: -5,
      },
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    responsive: [
      {
        breakpoint: 1365,
        options: {
          chart: {
            height: 140,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 225,
          },
        },
      },
      {
        breakpoint: 781,
        options: {
          chart: {
            height: 235,
          },
        },
      },
      {
        breakpoint: 400,
        options: {
          chart: {
            height: 170,
          },
        },
      },
    ],
  };

  var revenue_overview = new ApexCharts(
    document.querySelector("#revenue-order"),
    options_revenue_order
  );
  revenue_overview.render();

  // 2 chart
  var options_weekly_visitor = {
    series: [
      {
        name: "Male",
        type: "line",
        data: [70, 90, 70, 90, 100],
      },
      {
        name: "Female",
        type: "line",
        data: [90, 40, 100, 50, 40],
      },
    ],
    chart: {
      height: 110,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 4,
        color: "#000",
        opacity: 0.08,
      },
    },
    stroke: {
      width: [2, 2],
      curve: "smooth",
    },
    grid: {
      show: false,
      // borderColor: "var(--chart-border)",
      // strokeDashArray: 0,
      // position: "back",
      // xaxis: {
      //   lines: {
      //     show: true,
      //   },
      // },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
      opacity: 1,
      type: "solid",
    },
    labels: ["1", "2", "3", "4", "5"],
    xaxis: {
      type: "category",
      tickAmount: 8,
      tickPlacement: "between",
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        color: "var(--chart-border)",
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },

    legend: {
      show: false,
    },

    tooltip: {
      shared: false,
      intersect: false,
    },
    responsive: [
      {
        breakpoint: 1365,
        options: {
          chart: {
            height: 90,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 135,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 125,
            width: "100%",
          },
        },
      },
      // {
      //   breakpoint: 733,
      //   options: {
      //     chart: {
      //       height: 125,
      //       width: 480,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 714,
      //   options: {
      //     chart: {
      //       height: 125,
      //       width: 460,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 685,
      //   options: {
      //     chart: {
      //       height: 125,
      //       width: 440,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 650,
      //   options: {
      //     chart: {
      //       offsetX: -40,
      //       height: 125,
      //       width: 420,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 628,
      //   options: {
      //     chart: {
      //       offsetX: -40,
      //       height: 125,
      //       width: 400,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 600,
      //   options: {
      //     chart: {
      //       offsetX: -30,
      //       height: 125,
      //       width: 370,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 576,
      //   options: {
      //     chart: {
      //       offsetX: -30,
      //       height: 125,
      //       width: 550,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 565,
      //   options: {
      //     chart: {
      //       height: 125,
      //       width: 530,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 550,
      //   options: {
      //     chart: {
      //       height: 125,
      //       width: 500,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 520,
      //   options: {
      //     chart: {
      //       height: 125,
      //       width: 460,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 485,
      //   options: {
      //     chart: {
      //       height: 125,
      //       width: 420,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 445,
      //   options: {
      //     chart: {
      //       height: 125,
      //       width: 400,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 425,
      //   options: {
      //     chart: {
      //       offsetX: 0,
      //       height: 125,
      //       width: 340,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 420,
      //   options: {
      //     chart: {
      //       offsetX: 0,
      //       height: 125,
      //       width: "100%",
      //     },
      //   },
      // },
    ],
  };

  var weeklyVisitor_overview = new ApexCharts(
    document.querySelector("#weekly-visitor"),
    options_weekly_visitor
  );
  weeklyVisitor_overview.render();

  // polar-area chart

  var options_polar_area = {
    series: [14, 23, 21, 19, 17, 14, 12, 10],
    chart: {
      type: "polarArea",
      height: 250,
    },
    stroke: {
      colors: ["#fff"],
    },
    colors: ["#009DB5", "#F99B0D", "#83BF6E"],
    fill: {
      opacity: 0.8,
    },
    legend: {
      show: false,
    },
  };

  var polar_area = new ApexCharts(
    document.querySelector("#polar-area"),
    options_polar_area
  );
  polar_area.render();
})();

// swiper product

var swiper = new Swiper(".deal-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 10,
});

const category_swiper3 = new Swiper(".sales-overview-slider", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 12,
    },

    1235: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
    1400: {
      slidesPerView: 4,
    },
    1530: {
      slidesPerView: 4,
    },
    1890: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

// project overview chart
var options_overview = {
  series: [
    {
      name: "Earning",
      type: "line",
      data: [120, 250, 70, 330, 140, 230, 90, 280, 40, 150, 350, 150, 350],
    },
    // {
    //   name: "Order",
    //   type: "line",
    //   data: [80, 200, 150, 200, 100, 150, 110, 200, 110, 200, 150, 80, 30],
    // },
  ],
  chart: {
    height: 240,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth",
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  colors: ["#009DB5", "#83BF6E"],
  fill: {
    opacity: 1,
    type: "solid",
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ],
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: "var(--chart-border)",
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
    tickPlacement: "between",
    labels: {
      formatter: function (val) {
        return val + "K";
      },
      offsetX: -5,
    },
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 1023,
      options: {
        chart: {
          height: 260,
        },
      },
    },
    {
      breakpoint: 1008,
      options: {
        chart: {
          height: 268,
        },
      },
    },
    {
      breakpoint: 1007,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 240,
        },
      },
    },
  ],
};

var chart_overview = new ApexCharts(
  document.querySelector("#project-overview"),
  options_overview
);

chart_overview.render();

window.addEventListener("resize", function (event) {
  document.querySelector("#project-overview").innerHTML = "";
  var chart_overview = new ApexCharts(
    document.querySelector("#project-overview"),
    options_overview
  );
  chart_overview.render();
});

// bar overview chart
var options_bar = {
  series: [
    {
      name: "Revenue",
      data: [
        30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40, 11,
        28, 40, 11, 28, 40, 11, 28, 40, 11, 11, 28, 40, 11, 28, 40, 11, 28, 40,
        11,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 180,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  colors: ["var(--chart-dashed-border)"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.7,
  },
  tooltip: {
    enabled: false,
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  responsive: [
    {
      breakpoint: 405,
      options: {
        chart: {
          height: 150,
        },
      },
    },
  ],
};

var chart_bar = new ApexCharts(
  document.querySelector("#project-bar"),
  options_bar
);
chart_bar.render();

// sales chart
var options_client = {
  series: [
    {
      data: [0, 15, 15, 10, 10, 20, 20, 25, 25, 25],
    },
  ],
  chart: {
    type: "area",
    height: 145,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "category",
    categories: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "july",
      "aug",
      "sep",
      "oct",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -60,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  colors: ["#fda8aa"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: true,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
};

var chart_client = new ApexCharts(
  document.querySelector("#Daily-Chart"),
  options_client
);
chart_client.render();

// Weekly Sales chart

var options_client = {
  series: [
    {
      data: [0, 15, 15, 10, 10, 20, 20],
    },
  ],
  chart: {
    type: "area",
    height: 145,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "category",
    categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -60,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  colors: ["#fd9b9e"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: true,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
};

var chart_client = new ApexCharts(
  document.querySelector("#Weekly-Chart"),
  options_client
);
chart_client.render();

// -------------------------- Monthly Sales chart
var options_client = {
  series: [
    {
      data: [0, 15, 15, 10, 10, 20, 20, 25, 25, 25],
    },
  ],
  chart: {
    type: "area",
    height: 145,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "category",
    categories: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "july",
      "aug",
      "sep",
      "oct",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -60,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  colors: ["#fc8f92"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: true,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
};

var chart_client = new ApexCharts(
  document.querySelector("#Monthly-Chart"),
  options_client
);
chart_client.render();

// -------------------------- Yearly chart --------------------------
var options_client = {
  series: [
    {
      data: [0, 1, 15, 10, 5, 20, 20, 25, 10, 25],
    },
  ],
  chart: {
    type: "area",
    height: 145,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "category",
    categories: [
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -60,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  colors: ["#fc8f92"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: true,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
};

var chart_client = new ApexCharts(
  document.querySelector("#Yearly-Chart"),
  options_client
);
chart_client.render();

// -------------------------- Purchase Report --------------------------

var chartOptions = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false // Hides the entire toolbar including the download button
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

var chart = new ApexCharts(document.querySelector("#purchase-report"), chartOptions);
chart.render();

function updateChart(view) {
  let newOptions = {...chartOptions};

  if (view === 'monthly') {
    newOptions.xaxis.categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    newOptions.series[0].data = [10, 41, 35, 51, 49, 62, 69, 91, 148];
  } else if (view === 'weekly') {
    newOptions.xaxis.categories = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    newOptions.series[0].data = [20, 30, 40, 50];
  } else if (view === 'yearly') {
    newOptions.xaxis.categories = ['2021', '2022', '2023', '2024'];
    newOptions.series[0].data = [150, 200, 180, 220];
  }

  chart.updateOptions(newOptions);
}

// Handle dropdown change event
document.getElementById('viewSelector').addEventListener('change', function(event) {
  updateChart(event.target.value);
});



// -------------------------- Purchase Analysis --------------------------

document.addEventListener('DOMContentLoaded', function() {
  var chart;

  // Function to get the labels for 5 weeks
  function getFiveWeeksLabels() {
      const labels = [];
      for (let i = 4; i >= 0; i--) {
          labels.push(`Week ${i + 1}`);
      }
      return labels;
  }

  // Function to get the current week dates
  function getCurrentWeekDates() {
      const now = new Date();
      const start = new Date(now.setDate(now.getDate() - now.getDay())); // Start of the week
      const days = [];
      for (let i = 0; i < 7; i++) {
          days.push(new Date(start).setDate(start.getDate() + i));
      }
      return days.map(date => {
          const d = new Date(date);
          return d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
      });
  }

  var options = {
      weekly: {
          series: [{
              name: 'Distributor X',
              data: [30, 40, 35, 50, 60]  // Data for 5 weeks
          }, {
              name: 'Distributor Y',
              data: [15, 25, 20, 10, 15]  // Data for 5 weeks
          }, {
              name: 'Distributor Z',
              data: [20, 25, 15, 20, 25]  // Data for 5 weeks
          }, {
              name: 'Distributor W',
              data: [10, 20, 15, 25, 20]  // Data for 5 weeks
          }],
          chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                  show: true
              },
              zoom: {
                  enabled: true
              }
          },
          xaxis: {
              type: 'category',
              categories: getFiveWeeksLabels(), // Week labels for 5 weeks
          },
          legend: {
              position: 'right',
              offsetY: 40
          },
          fill: {
              opacity: 1
          }
      },
      monthly: {
          series: [{
              name: 'Distributor X',
              data: [30, 40, 35, 50, 60, 70, 55]  // Data for each day of the current week
          }, {
              name: 'Distributor Y',
              data: [15, 25, 20, 10, 15, 30, 20]  // Data for each day of the current week
          }, {
              name: 'Distributor Z',
              data: [20, 25, 15, 20, 25, 30, 25]  // Data for each day of the current week
          }, {
              name: 'Distributor W',
              data: [10, 20, 15, 25, 20, 25, 30]  // Data for each day of the current week
          }],
          chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                  show: true
              },
              zoom: {
                  enabled: true
              }
          },
          xaxis: {
              type: 'category',
              categories: getCurrentWeekDates(), // Dynamic day names for the current week
          },
          legend: {
              position: 'right',
              offsetY: 40
          },
          fill: {
              opacity: 1
          }
      },
      yearly: {
          series: [{
              name: 'Distributor X',
              data: [44, 55, 41, 67, 22, 43, 50, 60, 70, 80, 90, 100]  // Data for each month
          }, {
              name: 'Distributor Y',
              data: [13, 23, 20, 8, 13, 27, 30, 40, 35, 45, 50, 55]  // Data for each month
          }, {
              name: 'Distributor Z',
              data: [11, 17, 15, 15, 21, 14, 30, 25, 20, 30, 35, 40]  // Data for each month
          }, {
              name: 'Distributor W',
              data: [21, 7, 25, 13, 22, 8, 15, 20, 25, 30, 35, 40]  // Data for each month
          }],
          chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                  show: false
              },
              zoom: {
                  enabled: true
              }
          },
          xaxis: {
              type: 'category',
              categories: [
                  'January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'
              ],
          },
          legend: {
              position: 'right',
              offsetY: 40
          },
          fill: {
              opacity: 1
          }
      }
  };

  function updateChart(view) {
      if (chart) {
          chart.destroy();
      }
      chart = new ApexCharts(document.querySelector("#purchase-analysis"), options[view]);
      chart.render();
  }

  // Initialize with yearly view
  updateChart('yearly');  // Set default view to yearly

  // Handle dropdown selection
  document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor behavior
          var selectedView = this.getAttribute('data-view');
          updateChart(selectedView);
          // Update button text
          document.getElementById('overviewButton10').textContent = this.textContent;
      });
  });

  // Handle current week button
  document.getElementById('weeklyButton').addEventListener('click', function() {
      updateChart('monthly'); // Update to show daily data for the current week
  });

  // Handle weekly button
  document.getElementById('monthlyButton').addEventListener('click', function() {
      updateChart('weekly'); // Update to show weekly data for 5 weeks
  });
});


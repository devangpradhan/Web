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

// ------------------------ Sales Overview Chart ------------------------
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

// -------------------------- Monthly Sales chart --------------------------
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
                  show: false
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
                  show: false
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




// -------------------------- Chart Flow Lines  --------------------------
 // Helper function for generating time series data
 function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
      var x = baseval;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 86400000;
      i++;
  }
  return series;
}

// Your provided ApexCharts initialization code

var options = {
  series: [{
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
          min: 10,
          max: 60
      })
  }],
  chart: {
      id: 'fb',
      group: 'social',
      type: 'line',
      height: 160
  },
  colors: ['#008FFB']
};

var chart = new ApexCharts(document.querySelector("#chart-line"), options);
chart.render();

var optionsLine2 = {
  series: [{
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
          min: 10,
          max: 30
      })
  }],
  chart: {
      id: 'tw',
      group: 'social',
      type: 'line',
      height: 160
  },
  colors: ['#546E7A']
};

var chartLine2 = new ApexCharts(document.querySelector("#chart-line2"), optionsLine2);
chartLine2.render();

var optionsArea = {
  series: [{
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
          min: 10,
          max: 60
      })
  }],
  chart: {
      id: 'yt',
      group: 'social',
      type: 'area',
      height: 160
  },
  colors: ['#00E396']
};

var chartArea = new ApexCharts(document.querySelector("#chart-area"), optionsArea);
chartArea.render();

var optionsSmall = {
  series: [{
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
          min: 10,
          max: 60
      })
  }],
  chart: {
      id: 'ig',
      group: 'social',
      type: 'area',
      height: 160,
      width: 300
  },
  colors: ['#008FFB']
};

var chartSmall = new ApexCharts(document.querySelector("#chart-small"), optionsSmall);
chartSmall.render();

var optionsSmall2 = {
  series: [{
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
          min: 10,
          max: 60
      })
  }],
  chart: {
      id: 'li',
      group: 'social',
      type: 'area',
      height: 160,
      width: 300
  },
  colors: ['#546E7A']
};

var chartSmall2 = new ApexCharts(document.querySelector("#chart-small2"), optionsSmall2);
chartSmall2.render();


// ERP Chart 

var options = {
  series: [{
  data: [
    [1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],
  ]
}],
  chart: {
  id: 'area-datetime',
  type: 'area',
  height: 350,
  zoom: {
    autoScaleYaxis: true
  }
},
annotations: {
  yaxis: [{
    y: 30,
    borderColor: '#999',
    label: {
      show: true,
      text: 'Support',
      style: {
        color: "#fff",
        background: '#00E396'
      }
    }
  }],
  xaxis: [{
    x: new Date('14 Nov 2012').getTime(),
    borderColor: '#999',
    yAxisIndex: 0,
    label: {
      show: true,
      text: 'Rally',
      style: {
        color: "#fff",
        background: '#775DD0'
      }
    }
  }]
},
dataLabels: {
  enabled: false
},
markers: {
  size: 0,
  style: 'hollow',
},
xaxis: {
  type: 'datetime',
  min: new Date('01 Mar 2012').getTime(),
  tickAmount: 6,
},
tooltip: {
  x: {
    format: 'dd MMM yyyy'
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    stops: [0, 100]
  }
},
};

var chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
chart.render();


var resetCssClasses = function(activeEl) {
var els = document.querySelectorAll('button')
Array.prototype.forEach.call(els, function(el) {
  el.classList.remove('active')
})

activeEl.target.classList.add('active')
}

document
.querySelector('#one_month')
.addEventListener('click', function(e) {
  resetCssClasses(e)

  chart.zoomX(
    new Date('28 Jan 2013').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document
.querySelector('#six_months')
.addEventListener('click', function(e) {
  resetCssClasses(e)

  chart.zoomX(
    new Date('27 Sep 2012').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document
.querySelector('#one_year')
.addEventListener('click', function(e) {
  resetCssClasses(e)
  chart.zoomX(
    new Date('27 Feb 2012').getTime(),
    new Date('27 Feb 2013').getTime()
  )
})

document.querySelector('#ytd').addEventListener('click', function(e) {
resetCssClasses(e)

chart.zoomX(
  new Date('01 Jan 2013').getTime(),
  new Date('27 Feb 2013').getTime()
)
})

document.querySelector('#all').addEventListener('click', function(e) {
resetCssClasses(e)

chart.zoomX(
  new Date('23 Jan 2012').getTime(),
  new Date('27 Feb 2013').getTime()
)
})
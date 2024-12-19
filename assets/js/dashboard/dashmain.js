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


//   Treechart

const datatree = {
    id: '1',
    name: 'Species',
    options: {
      fontSize: '25px',
      fontFamily: 'sans-serif',
      fontWeight: 600,
      fontColor: '#a06dcc',
      borderWidth: 2,
      borderColor: '#a06dcc',
      borderColorHover: '#ec327e',
      nodeBGColor: '#eedfff',
      nodeBGColorHover: '#d5c3ff',
    },
    children: [
      {
        id: '2',
        name: 'Plants',
        category: 'Species',
        options: {
          nodeBGColorHover: '#d7c7e3',
          borderColorHover: '#e563c7',
        },
        children: [
          {
            id: '3',
            name: 'Mosses',
            category: 'Plants',
            options: {
              nodeBGColorHover: '#d7c7e3',
              borderColorHover: '#e563c7',
            },
          },
          {
            id: '4',
            name: 'Ferns',
            category: 'Plants',
          },
          {
            id: '5',
            name: 'Gymnosperms',
            category: 'Plants',
          },
          {
            id: '6',
            name: 'Dicotyledens',
            category: 'Plants',
          },
          {
            id: '7',
            name: 'Monocotyledens',
            category: 'Plants',
          },
        ],
      },
      {
        id: '8',
        name: 'Fungi',
      },
      {
        id: '9',
        name: 'Lichens',
      },
      {
        id: '10',
        name: 'Animals',
        children: [
          {
            id: '11',
            name: 'Invertebrates',
            category: 'Animals',
            children: [
              {
                id: '12',
                name: 'Insects',
                category: 'Invertebrates',
              },
              {
                id: '13',
                name: 'Molluscs',
                category: 'Invertebrates',
              },
              {
                id: '14',
                name: 'Crustaceans',
                category: 'Invertebrates',
              },
              {
                id: '15',
                name: 'Others',
                category: 'Invertebrates',
              },
            ],
          },
          {
            id: '16',
            name: 'Vertebrates',
            category: 'Animals',
            children: [
              {
                id: '17',
                name: 'Fish',
                category: 'Vertebrates',
              },
              {
                id: '18',
                name: 'Amphibians',
                category: 'Vertebrates',
              },
              {
                id: '19',
                name: 'Reptiles',
                category: 'Vertebrates',
              },
              {
                id: '20',
                name: 'Birds',
                category: 'Vertebrates',
              },
              {
                id: '21',
                name: 'Mammals',
                category: 'Vertebrates',
              },
            ],
          },
        ],
      },
    ],
  };
  const distree = {
    contentKey: 'name',
    width: 800,
    nodeWidth: 180,
    nodeHeight: 50,
    childrenSpacing: 150,
    siblingSpacing: 30,
    direction: 'top',
    fontSize: '20px',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 600,
    fontColor: '#388ac4',
    borderColorHover: '#388ac4',
    nodeBGColorHover: '#d7d7d7',
    enableToolbar: true,
    canvasStyle: 'border: 1px solid black;background: #f6f6f6;',
  };
  const tree = new ApexTree(document.getElementById('dis-tree'), distree);
  tree.render(datatree);
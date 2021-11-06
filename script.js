console.log('hello!');

var chartDom = [document.getElementById('chart1'), document.getElementById('chart2'), document.getElementById('chart3'), document.getElementById('chart4')];
var myChart = chartDom.map(_ => echarts.init(_));
var option;

option = {
  title: {
    show: false,
    text: 'Gefühle',
    subtext: 'In Deutschland von 2019'
  },
  legend: {
    bottom: 10,
    left: 'center',
    data: ['Glück', 'Wut', 'Trauer', 'Freude'],
    textStyle: {
      fontSize: '15',
    },
  },
  series: [
    {
      type: 'pie',
      radius: '85%',
      center: ['50%', '45%'],
      label: {
        show: false
      },
      data: [
        { value: 1548, name: 'Glück' },
        { value: 735, name: 'Wut' },
        { value: 510, name: 'Trauer' },
        { value: 434, name: 'Freude' }
      ]
    }
  ]
};

option && myChart[0].setOption(option);
option && myChart[1].setOption(option);
option && myChart[2].setOption({
  series: [
      {
          type: 'pie',
          radius: ['40%', '70%'],
          label: {
              show: true,
              position: 'center',
              fontSize: "50px"
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '50',
                  fontWeight: 'bold'
              }
          },
          
          labelLine: {
              show: true
          },
          data: [
              {value: 10, name: '10'}
          ]
      }
  ]
});
option && myChart[3].setOption({
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2014', '2015', '2016', '20217', '2018', '2019', '2020']
  },
  yAxis: {
      type: 'value',
      show: true,
      axisLabel: {
          formatter: function(v) { return v/1000000+' M'; }
      },
  },
  series: [{
      data: [12100000, 12200000, 12300000, 12400000, 12500000, 12600000, 13000000],
      type: 'line',
      smooth: true,
      lineStyle: {
          width: 3,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowBlur: 10,
          shadowOffsetY: 8
      },
      markPoint: {
          data: [
              {
                  label: {
                      formatter: function() { return '13M'; }
                  }, 
                  type: 'max', 
                  name: ''
              },
          ]
      },
  }]
})

window.onresize = function() {
  myChart.map(_ => _.resize());
};

(function () {

  let echartData = [];

  window.ufastHttp.Get("data/SalesData.json", {
    success: function (data) {
      echartData = data;
      initEchart();
    },
    error: function (e) {
      console.log(e);
    }
  });

  function getDataArrayByName(name, array) {
    let targetArray = [];
    array.forEach((item) => {
      targetArray.push(item[name]);
    });
    return targetArray;
  }


  function initEchart() {
    let showEchartData = {
      name: getDataArrayByName("year", echartData.data),
      data: getDataArrayByName("salesData", echartData.data),
    };
    const myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: showEchartData.name
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: showEchartData.data
      }]
    };
    myChart.setOption(option);
  }
})();

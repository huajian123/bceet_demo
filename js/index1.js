(function () {

    var setAttendanceChart = function (div, rate, arr, text) {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption( {
                color: ['#D08A18', '#16CEB9', '#6648FF', '#4346D3', '#F04F7D', '#2D99FF'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    textStyle: {
                        fontSize: 15,
                        color: '#fff'
                    },
                    bottom: 0,
                    left: 30,
                    itemGap: 12,// 每一项间距
                    padding: [0, 10, 5, 0],
                    orient: 'horizontal',
                    x: 'left',
                    data: ['差旅费', '销职工教育经费', '汽车费用', '展览费', '交通费', '水电费1', '水电费2', '谷歌', '必应', '其他']
                },
                series: [
                    {
                        name: '费用类别占比',
                        type: 'pie',
                        radius: [0, '55%'],
                        label: {
                            normal: {
                                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                backgroundColor: '#eee',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                // shadowBlur:3,
                                // shadowOffsetX: 2,
                                // shadowOffsetY: 2,
                                // shadowColor: '#999',
                                // padding: [0, 7],
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    // abg: {
                                    //     backgroundColor: '#333',
                                    //     width: '100%',
                                    //     align: 'right',
                                    //     height: 22,
                                    //     borderRadius: [4, 4, 0, 0]
                                    // },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data: [
                            {value: 335, name: '差旅费'},
                            {value: 310, name: '销职工教育经费'},
                            {value: 234, name: '汽车费用'},
                            {value: 135, name: '展览费'},
                            {value: 1048, name: '交通费'},
                            {value: 251, name: '水电费1'},
                            {value: 147, name: '水电费2'},
                            {value: 102, name: '其他'}
                        ],
                        itemStyle: { // 此配置设置饼状图之间有间隙
                            normal: {
                                borderWidth: 4,
                                borderColor: '#12192D',
                            },
                            emphasis: {
                                borderWidth: 0,
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    }
                ]
            }
        );
        $(window).resize(function () {
            myChart.resize();
        });
    };
    setAttendanceChart();


})();

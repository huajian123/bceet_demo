(function () {

    var setAttendanceChart = function (div, rate, arr, text) {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption( {
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['差旅费','销职工教育经费','汽车费用','展览费','交通费','水电费1','水电费2']
                },
                series: [
                    {
                        name:'费用类别占比',
                        type:'pie',
                        radius: ['35%', '45%'],
                        avoidLabelOverlap: false,
                        itemStyle: { // 此配置设置饼状图之间有间隙
                            normal: {
                                borderWidth: 4,
                                borderColor: '#ffffff',
                            },
                            emphasis: {
                                borderWidth: 0,
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'center',

                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                smooth: 0.2,
                                length: this.baseWith / 40, // 第一条引导线的长
                                length2: this.baseWith / 10, //第二条引导线的长
                            }
                        },
                        data:[
                            // data:['差旅费','销职工教育经费','汽车费用','展览费','交通费','水电费1','水电费2']
                            {value:335, name:'差旅费'},
                            {value:310, name:'销职工教育经费'},
                            {value:234, name:'汽车费用'},
                            {value:135, name:'展览费'},
                            {value:1548, name:'交通费'},
                            {value:1548, name:'水电费1'},
                            {value:1548, name:'水电费2'},
                        ]
                    },

                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['55%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: { // 此配置设置饼状图之间有间隙
                            normal: {
                                borderWidth: 4,
                                borderColor: '#ffffff',
                            },
                            emphasis: {
                                borderWidth: 0,
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
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

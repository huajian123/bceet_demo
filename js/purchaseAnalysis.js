var dataSourse = {
    purCompared: [45, 27, 23, 40, 47, 45, 45, 27, 23, 40, 47, 45],
    largeClassRatio: [
        {value: 335, name: '铜'},
        {value: 310, name: '护层'},
        {value: 274, name: '铝'},
        {value: 235, name: '钢'},
        {value: 400, name: '其他'},
        {value: 400, name: '绝缘层'}
    ],
    purchAmount: [534.64, 672.58, 734.64, 1052.70, 1437.20, 1560.20],
    materialPur: {
        copper: [820, 932, 901, 934, 1290, 1330, 1320], // 铜
        cover: [554, 454, 454, 344, 546, 564, 324], // 护层
        aluminum: [120, 432, 501, 964, 3290, 1330, 5320], // 铝
        steel: [123, 245, 453, 234, 133, 131, 123], // 钢
        other: [767, 878, 879, 657, 567, 677, 878], // 其他
        insulation: [1234, 3134, 1231, 1314, 1233, 1330, 1320], // 绝缘层
    }
}

setInterval(function () {
    console.log(111);
    dataSourse.purchAmount.map((item) => {
        return item += 100;
    })
    dataSourse.purchAmount.map((item) => {
        return item += 100;
    })
    dataSourse = {...dataSourse};
}, 1000)

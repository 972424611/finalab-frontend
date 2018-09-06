$(function() {
	var myChart = echarts.init($(".garcol-body")[0]);
	var option = {
		title: {
			text: '回收次数比较'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data: ['第一周', '第二周', '第三周', '第四周', '第五周']
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: '第一周',
			type: 'line',
			stack: '总量',
			areaStyle: {
				normal: {}
			},
			data: [3, 5, 4, 6, 3, 5, 2]
		}, {
			name: '第二周',
			type: 'line',
			stack: '总量',
			areaStyle: {
				normal: {}
			},
			data: [2, 5, 4, 6, 3, 5, 2]
		}, {
			name: '第三周',
			type: 'line',
			stack: '总量',
			areaStyle: {
				normal: {}
			},
			data: [6, 5, 4, 5, 3, 5, 4]
		}, {
			name: '第四周',
			type: 'line',
			stack: '总量',
			areaStyle: {
				normal: {}
			},
			data: [4, 6, 2, 5, 2, 3, 5]
		}, {
			name: '第五周',
			type: 'line',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			areaStyle: {
				normal: {}
			},
			data: [5, 3, 3, 4, 5, 3, 5]
		}]
	};
	myChart.setOption(option);

	var restChart = echarts.init($(".rest-body")[0]);

	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data: ['工作', '休息', '非工作']
		},
		series: [{
			name: '工作情况',
			type: 'pie',
			selectedMode: 'single',
			radius: [0, '30%'],

			label: {
				normal: {
					position: 'inner'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 335,
				name: '工作',
				selected: true
			}, {
				value: 679,
				name: '休息'
			}, {
				value: 1548,
				name: '非工作'
			}]
		}, {
			name: '工作情况',
			type: 'pie',
			radius: ['40%', '55%'],

			data: [{
				value: 130,
				name: '工作'
			}, {
				value: 310,
				name: '休息',
			}, {
				value: 100,
				name: '工作',
			}, {
				value: 135,
				name: '休息',
			}, {
				value: 110,
				name: '工作',
			}, {
				value: 1048,
				name: '非工作',
			}, {
				value: 180,
				name: '休息',
			}, {
				value: 80,
				name: '工作',
			}, {
				value: 102,
				name: '休息',
			}]
		}]
	};
	restChart.setOption(option);



});
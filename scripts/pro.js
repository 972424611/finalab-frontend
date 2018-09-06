$(function() {

	var ecoChart = echarts.init($(".eco-body")[0]);


	var data = [{
		name: '﻿长沙',
		value: 176
	}, {
		name: '望城',
		value: 4
	}, {
		name: '株洲',
		value: 175
	}, {
		name: '湘潭',
		value: 177
	}, {
		name: '衡阳',
		value: 40
	}, {
		name: '邵阳',
		value: 32
	}, {
		name: '岳阳',
		value: 105
	}, {
		name: '临湘',
		value: 8
	}, {
		name: '平江',
		value: 69
	}, {
		name: '泪罗',
		value: 68
	}, {
		name: '湘阴',
		value: 17
	}, {
		name: '华容',
		value: 51
	}, {
		name: '浏阳',
		value: 20
	}, {
		name: '醴陵',
		value: 9
	}, {
		name: '攸县',
		value: 99
	}, {
		name: '茶陵',
		value: 15
	}, {
		name: '酃县',
		value: 44
	}, {
		name: '湘乡',
		value: 25
	}, {
		name: '郴州',
		value: 29
	}, {
		name: '郴县',
		value: 71
	}, {
		name: '安仁',
		value: 35
	}, {
		name: '永兴',
		value: 81
	}, {
		name: '资兴',
		value: 65
	}, {
		name: '桂东',
		value: 53
	}, {
		name: '汝城',
		value: 20
	}, {
		name: '宜章',
		value: 40
	}, {
		name: '临武',
		value: 8
	}, {
		name: '嘉禾',
		value: 77
	}, {
		name: '桂阳',
		value: 54
	}, {
		name: '来阳',
		value: 90
	}, {
		name: '衡南',
		value: 84
	}, {
		name: '衡山',
		value: 71
	}, {
		name: '衡东',
		value: 80
	}, {
		name: '常宁',
		value: 41
	}, {
		name: '祁阳',
		value: 18
	}, {
		name: '祁东',
		value: 4
	}, {
		name: '衡阳',
		value: 69
	}, {
		name: '永州',
		value: 27
	}, {
		name: '零陵',
		value: 33
	}, {
		name: '新田',
		value: 38
	}, {
		name: '宁远',
		value: 61
	}, {
		name: '蓝山',
		value: 16
	}, {
		name: '双牌',
		value: 59
	}, {
		name: '江永',
		value: 79
	}, {
		name: '道县',
		value: 93
	}, {
		name: '东安',
		value: 53
	}, {
		name: '江华',
		value: 90
	}, {
		name: '新宁',
		value: 95
	}, {
		name: '武冈',
		value: 67
	}, {
		name: '隆回',
		value: 53
	}, {
		name: '绥宁',
		value: 93
	}, {
		name: '洞口',
		value: 21
	}, {
		name: '城步',
		value: 14
	}, {
		name: '娄底',
		value: 99
	}, {
		name: '涟源',
		value: 72
	}, {
		name: '新邵',
		value: 52
	}, {
		name: '双峰',
		value: 1
	}, {
		name: '冷水江',
		value: 4
	}, {
		name: '邵东',
		value: 57
	}, {
		name: '新化',
		value: 13
	}, {
		name: '怀化',
		value: 77
	}, {
		name: '黔阳',
		value: 99
	}, {
		name: '辰溪',
		value: 85
	}, {
		name: '沅陵',
		value: 68
	}, {
		name: '溆浦',
		value: 32
	}, {
		name: '会同',
		value: 50
	}, {
		name: '靖县',
		value: 10
	}, {
		name: '洪江',
		value: 83
	}, {
		name: '芷江',
		value: 3
	}, {
		name: '麻阳',
		value: 30
	}, {
		name: '通道',
		value: 42
	}, {
		name: '新晃',
		value: 7
	}, {
		name: '吉首',
		value: 28
	}, {
		name: '永顺',
		value: 41
	}, {
		name: '桑植',
		value: 96
	}, {
		name: '大庸',
		value: 34
	}, {
		name: '古丈',
		value: 29
	}, {
		name: '泸溪',
		value: 7
	}, {
		name: '凤凰',
		value: 62
	}, {
		name: '花垣',
		value: 43
	}, {
		name: '保靖',
		value: 75
	}, {
		name: '龙山',
		value: 72
	}, {
		name: '常德',
		value: 98
	}, {
		name: '临澧',
		value: 91
	}, {
		name: '澧县',
		value: 46
	}, {
		name: '安乡',
		value: 0
	}, {
		name: '津市',
		value: 61
	}, {
		name: '汉寿',
		value: 8
	}, {
		name: '桃源',
		value: 96
	}, {
		name: '慈利',
		value: 41
	}, {
		name: '石门',
		value: 49
	}, {
		name: '益阳',
		value: 17
	}, {
		name: '南县',
		value: 4
	}, {
		name: '沅江',
		value: 4
	}, {
		name: '宁乡',
		value: 61
	}, {
		name: '安化',
		value: 17
	}, {
		name: '桃江',
		value: 42
	}];

	var geoCoordMap = {
		'长沙': [113, 28.21],
		'望城': [112.8, 28.37],
		'株洲': [113.16, 27.83],
		'湘潭': [112.91, 27.87],
		'衡阳': [112.61, 26.89],
		'邵阳': [111.5, 27.22],
		'岳阳': [113.09, 29.37],
		'临湘': [113.42, 29.48],
		'平江': [113.56, 29.71],
		'泪罗': [113.05, 28.8],
		'湘阴': [112.87, 28.68],
		'华容': [112.55, 29.52],
		'浏阳': [113.63, 28.16],
		'醴陵': [113.5, 27.67],
		'攸县': [113.32, 27.01],
		'茶陵': [113.54, 26.79],
		'酃县': [113.77, 26.49],
		'湘乡': [112.5, 27.75],
		'郴州': [113, 25.79],
		'郴县': [113, 25.79],
		'安仁': [113.27, 26.71],
		'永兴': [113.11, 26.13],
		'资兴': [113.39, 25.95],
		'桂东': [113.91, 25.08],
		'汝城': [113.68, 25.54],
		'宜章': [113.96, 25.41],
		'临武': [112.55, 25.27],
		'嘉禾': [112.35, 25.56],
		'桂阳': [112.72, 25.73],
		'来阳': [112.84, 26.41],
		'衡南': [112.61, 26.89],
		'衡山': [112.86, 27.25],
		'衡东': [112.95, 27.1],
		'常宁': [112.39, 26.38],
		'祁阳': [111.85, 26.59],
		'祁东': [112.14, 26.8],
		'衡阳': [112.39, 26.98],
		'永州': [111.63, 26.22],
		'零陵': [111.63, 26.22],
		'新田': [112.21, 25.91],
		'宁远': [111.95, 25.6],
		'蓝山': [112.16, 25.37],
		'双牌': [111.64, 25.96],
		'江永': [111.33, 25.41],
		'道县': [111.57, 25.52],
		'东安': [111.28, 26.41],
		'江华': [111.79, 24.97],
		'新宁': [110.84, 26.44],
		'武冈': [110.61, 26.73],
		'隆回': [111.04, 27.13],
		'绥宁': [110.14, 25.59],
		'洞口': [110.57, 27.06],
		'城步': [110.3, 26.37],
		'娄底': [111.96, 27.71],
		'涟源': [111.66, 27.68],
		'新邵': [111.46, 27.33],
		'双峰': [112.18, 27.44],
		'冷水江': [111.41, 27.68],
		'邵东': [111.73, 27.25],
		'新化': [111.29, 27.73],
		'怀化': [109.95, 27.52],
		'黔阳': [110.14, 27.33],
		'辰溪': [110.18, 28.02],
		'沅陵': [110.39, 28.46],
		'溆浦': [110.57, 27.92],
		'会同': [109.71, 26.86],
		'靖县': [109.68, 26.57],
		'洪江': [109.96, 27.1],
		'芷江': [109.78, 27.44],
		'麻阳': [109.79, 27.87],
		'通道': [109.77, 26.16],
		'新晃': [109.16, 27.37],
		'吉首': [109.71, 28.3],
		'永顺': [109.84, 29],
		'桑植': [110.16, 29.38],
		'大庸': [110.48, 29.13],
		'古丈': [109.91, 28.62],
		'泸溪': [110.73, 28.29],
		'凤凰': [109.43, 27.92],
		'花垣': [109.46, 28.59],
		'保靖': [109.64, 28.7],
		'龙山': [109.42, 29.64],
		'常德': [111.69, 29.05],
		'临澧': [111.64, 29.44],
		'澧县': [111.75, 29.65],
		'安乡': [112.16, 29.41],
		'津市': [111.87, 29.64],
		'汉寿': [111.97, 28.9],
		'桃源': [111.47, 28.9],
		'慈利': [111.09, 29.41],
		'石门': [111.35, 29.59],
		'益阳': [112.33, 28.6],
		'南县': [112.39, 29.37],
		'沅江': [112.36, 28.83],
		'宁乡': [112.55, 28.27],
		'安化': [111.2, 28.38],
		'桃江': [112.11, 28.51]
	};

	var convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};


	var option = {
		backgroundColor: '#404a59',
		title: {
			text: '湖南经济预测情况',
			left: 'center',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		bmap: {
			center: [111.68, 27.68],
			zoom: 8,
			roam: true,
			mapStyle: {
				styleJson: [{
					"featureType": "water",
					"elementType": "all",
					"stylers": {
						"color": "#044161"
					}
				}, {
					"featureType": "land",
					"elementType": "all",
					"stylers": {
						"color": "#004981"
					}
				}, {
					"featureType": "boundary",
					"elementType": "geometry",
					"stylers": {
						"color": "#064f85"
					}
				}, {
					"featureType": "railway",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "highway",
					"elementType": "geometry",
					"stylers": {
						"color": "#004981"
					}
				}, {
					"featureType": "highway",
					"elementType": "geometry.fill",
					"stylers": {
						"color": "#005b96",
						"lightness": 1
					}
				}, {
					"featureType": "highway",
					"elementType": "labels",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "arterial",
					"elementType": "geometry",
					"stylers": {
						"color": "#004981"
					}
				}, {
					"featureType": "arterial",
					"elementType": "geometry.fill",
					"stylers": {
						"color": "#00508b"
					}
				}, {
					"featureType": "poi",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "green",
					"elementType": "all",
					"stylers": {
						"color": "#056197",
						"visibility": "off"
					}
				}, {
					"featureType": "subway",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "manmade",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "local",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "arterial",
					"elementType": "labels",
					"stylers": {
						"visibility": "off"
					}
				}, {
					"featureType": "boundary",
					"elementType": "geometry.fill",
					"stylers": {
						"color": "#029fd4"
					}
				}, {
					"featureType": "building",
					"elementType": "all",
					"stylers": {
						"color": "#1a5787"
					}
				}, {
					"featureType": "label",
					"elementType": "all",
					"stylers": {
						"visibility": "off"
					}
				}]
			}
		},
		series: [{
			name: 'eco',
			type: 'scatter',
			coordinateSystem: 'bmap',
			data: convertData(data),
			symbolSize: function(val) {
				return val[2] / 10;
			},
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: false
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#ddb926'
				}
			}
		}, {
			name: 'Top 5',
			type: 'effectScatter',
			coordinateSystem: 'bmap',
			data: convertData(data.sort(function(a, b) {
				return b.value - a.value;
			}).slice(0, 6)),
			symbolSize: function(val) {
				return val[2] / 10;
			},
			showEffectOn: 'emphasis',
			rippleEffect: {
				brushType: 'stroke'
			},
			hoverAnimation: true,
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#f4e925',
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
			zlevel: 1
		}, {
			type: 'custom',
			coordinateSystem: 'bmap',
			itemStyle: {
				normal: {
					opacity: 0.5
				}
			},
			animation: false,
			silent: true,
			data: [0],
			z: -10
		}]
	};

	ecoChart.setOption(option);

	var ljzChart = echarts.init($(".ljz-body")[0]);

	data = [{name:'长沙理工大学云塘校区-南门',value:70},
	{name:'长沙市天心区披塘小学',value:70},
	{name:'广通大酒店',value:70},
	{name:'长沙南泥湾食品厂',value:70}

];

	geoCoordMap = {
		'长沙理工大学云塘校区-南门': [113.018981,28.068839],
		'长沙市天心区披塘小学':[112.979318,28.088218],
		'广通大酒店':[113.029802,28.101092],
		'长沙南泥湾食品厂':[112.946152,28.087803]
	};

	convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};


option = {
    title: {
        text: '垃圾站位置',
        sublink: 'http://www.pm25.in',
        left: 'center'
    },
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [112.983162,28.086688],
        zoom: 14,
        roam: true,
        mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'purple'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'purple',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

	ljzChart.setOption(option);
});
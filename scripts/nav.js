import React from 'react';
import ReactDOM from 'react-dom';

import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';

const navObj = [
	{
		navKey : 1,
		headName : "首页",
		isNeedDownList : false
	},
	{
		navKey : 2,
		headName : "数据分析",
		isNeedDownList : true,
		downList : [
			{
				subNavKey : 1,
				detailName : "垃圾站部署",
				linkSrc : "javascript:void(0)"
			},
			{
				subNavKey : 2,
				detailName : "垃圾桶部署",
				linkSrc : "javascript:void(0)"
			},
			{
				subNavKey : 3,
				detailName : "经济预测",
				linkSrc : "javascript:void(0)"
			},
			{
				subNavKey : 4,
				detailName : "休息时段预测",
				linkSrc : "javascript:void(0)"
			}
		]
	},
	{
		navKey : 3,
		headName : "首页",
		isNeedDownList : false
	}
];


const navBar = (
		<div className="nav-bar">
			<div className="l-nav">
				<div className="l-nav-img">
					<img src="1.jpg"/>
				</div>
			</div>
			<div className="r-nav">
				<ul className="r-nav-ul">
					{navObj.map(liObj => {
						const detail = (<li key={liObj.navKey}>
								<div className="r-nav-head">
									<div className = "r-nav-head-font">
										<span>{liObj.headName}</span>
									</div>
								</div>
								{liObj.isNeedDownList &&
									(<ul className="r-nav-list">
										{liObj.downList.map(subliObj=>{
											const subDetail = (<li className="r-nav-list-li" key={subliObj.subNavKey}>
													<a href={subliObj.linkSrc} className="list-li-a">
														{subliObj.detailName}
													</a>
												</li>);
											return subDetail;
										})}
									</ul>)
								}
							</li>);
						return detail;
					})}
				</ul>
			</div>
		</div>
	);


export default navBar;



drop table if exists gratitude_members ;
drop table if exists achievement ;
drop table if exists lab_members;
drop table if exists member_level;
drop table if exists depart_t ;

#成员等级表

create table member_level(
	level_id tinyint not null,
	level_name varchar(255) not null,
	primary key(level_id)
);

insert into member_level values(0, '实习生');
insert into member_level values(1, '正式成员');
insert into member_level values(2, '项目组长');
insert into member_level values(3, '技术核心人员');
insert into member_level values(4, '部门部长');
insert into member_level values(5, '实验室总裁');
insert into member_level values(6, '实验室导师');

#部门表

create table depart_t(
	depart_id tinyint not null,
	depart_name varchar(255) not null,
	primary key(depart_id)
);

insert into depart_t values(0, '系统编程');
insert into depart_t values(1, '硬件');
insert into depart_t values(2, 'WEB前端');
insert into depart_t values(3, 'JAVA');
insert into depart_t values(4, '策划');
insert into depart_t values(5, '游戏开发');
insert into depart_t values(6, '导师/领导者');


#成员表

create table lab_members(
	stu_id varchar(255) not null,#成员学号
	name varchar(255) not null,#成员名字
	grade int not null, #年级
	college int not null,#学院
	majors varchar(255) not null,#专业
	class_name varchar(255) not null,#班级
	sex tinyint not null default 0, #性别
	phone varchar(255) not null,#手机
	qq varchar(255) not null,#qq
	email varchar(255) not null,#email
	depart_id tinyint not null,#所属部门
	level_id tinyint not null default 0,
	head_portrait varchar(266) not null default 'xxxxx',#头像
	catchphrase text not null,
	foreign key(level_id) references member_level(level_id),
	foreign key(depart_id) references depart_t(depart_id),
	primary key(stu_id) 
);



insert into lab_members values('201450080224', '谭明棋', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 1, 1, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080225', '谭明翰', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 2, 2, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080226', '谭明天', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 3, 3, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080227', '谭明国', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 4, 5, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080228', '谭明圣', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 5, 5, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080229', '谭明轩', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 6, 6, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');


insert into lab_members values('201450080230', '谭明轩1', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 1, 4, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080231', '谭明轩2', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 2, 4, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080232', '谭明轩3', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 3, 4, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080233', '谭明轩4', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 4, 4, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080234', '谭明轩5', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 5, 4, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
insert into lab_members values('201450080235', '谭明轩6', 2014, 0,'计算机科学与技术', '计通卓越', 0, '15974211609', '2069284231', '2069284231@qq.com', 0, 4, 'images/tmq.png', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

#学院表
drop table if exists college_t ;
create table college_t(
	college_id int not null,
	college_name varchar(255) not null,
	primary key(college_id)
);

insert into college_t values(0, '计算机与通信工程学院');
insert into college_t values(1, '数学与统计学院');
insert into college_t values(2, '电气与信息工程学院');
insert into college_t values(3, '交通运输工程学院');
insert into college_t values(4, '土木与建筑学院');
insert into college_t values(5, '能源与动力工程学院');
insert into college_t values(6, '设计艺术学院');
insert into college_t values(7, '水利工程学院');
insert into college_t values(8, '文法学院');
insert into college_t values(9, '经济与管理学院');
insert into college_t values(10, '化学与生物工程学院');
insert into college_t values(11, '物理与电子科学学院');
insert into college_t values(12, '外国语学院');
insert into college_t values(13, '城南学院');




#感恩表

create table gratitude_members(
	stu_id varchar(255) not null,
	money int not null,
	foreign key(stu_id)
	references lab_members(stu_id)
);

insert into gratitude_members values('201450080224', 500);
insert into gratitude_members values('201450080225', 600);
insert into gratitude_members values('201450080226', 700);
insert into gratitude_members values('201450080227', 800);
insert into gratitude_members values('201450080228', 900);
insert into gratitude_members values('201450080229', 1000);

#成就表

create table achievement(
	stu_id varchar(255) not null,
	where_name varchar(255) not null,
	catchphrase text not null,
	foreign key(stu_id)
	references lab_members(stu_id)
);

insert into achievement values('201450080224', '阿里巴巴集团', '只有你学会把自己已有的成绩都归零，才能腾出空间去接纳更多的新东西，如此才能使自己不断的超越自己。');
insert into achievement values('201450080225', '深信服公司', '对待生活中的每一天若都像生命中的最后一天去对待，人生定会更精彩。');
insert into achievement values('201450080226', '清华大学', '命运掌握在自己手中。要么你驾驭生命，要么生命驾驭你，你的心态决定你是坐骑还是骑手。');
insert into achievement values('201450080227', '中科院信工所', '生活赋予我们一种巨大的和无限高贵的礼品，这就是青春：充满着力量，充满着期待志愿，充满着求知和斗争的志向，充满着希望信心和青春。');

#项目表
drop table if exists projects ;
create table projects(
	project_id int not null auto_increment,
	project_name varchar(255) not null,
	project_image varchar(255) not null,
	project_addr varchar(255) not null,#跳转的地址
	primary key(project_id)
);

insert into projects values(NULL, '中国神奇先生1', 'images/project1.jpg', 'xxx');
insert into projects values(NULL, '中国神奇先生2', 'images/project1.jpg', 'xxx');
insert into projects values(NULL, '中国神奇先生3', 'images/project1.jpg', 'xxx');
insert into projects values(NULL, '中国神奇先生4', 'images/project1.jpg', 'xxx');
insert into projects values(NULL, '中国神奇先生5', 'images/project1.jpg', 'xxx');
insert into projects values(NULL, '中国神奇先生6', 'images/project1.jpg', 'xxx');
insert into projects values(NULL, '中国神奇先生7', 'images/project1.jpg', 'xxx');
insert into projects values(NULL, '中国神奇先生8', 'images/project1.jpg', 'xxx');


#奖项表
drop table if exists winning;
create table winning(
	winning_id int not null auto_increment,
	winning_name varchar(255) not null,
	winning_rating varchar(255) not null,
	winning_award_image varchar(255) not null,
	winning_activity_image varchar(255) not null,
	winning_time date not null,
	winning_members text not null,
	winning_profile text not null,
	primary key(winning_id)
);

insert into winning values(NULL, '校车快搭1', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭2', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭3', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭4', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭5', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭6', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭7', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭8', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭9', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭10', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭11', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭12', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭13', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');
insert into winning values(NULL, '校车快搭14', '中国计算机设计大赛2016中南赛区一等奖', 'images/tmq.png', 'images/tmq.png', '2017-05-23', '谭明棋,谭明翰,谭明天', '运用了什么什么插件，实现了什么什么功能');

#招生表
drop table if exists recruiter ;
create table recruiter(
	recruiter_stuid  varchar(255) not null,
	recruiter_name varchar(255) not null,
	recruiter_sex tinyint not null,
	recruiter_college int not null,
	recruiter_majors int not null,
	recruiter_grade int not null,
	recruiter_class_name varchar(255) not null,
	recruiter_phone varchar(255) not null,
	recruiter_qq varchar(255) not null,
	recruiter_email varchar(255) not null,
	recruiter_depart int not null,
	recruiter_self text not null,
	recruiter_cause text not null,
	primary key(recruiter_stuid)
);

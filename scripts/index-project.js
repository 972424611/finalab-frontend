var modelhead = document.getElementById('myModalLabel');
var modelbody = document.getElementById('modelbody');
var carouselinner = document.getElementById('carousel-inner');
function Detail(id) {
    $.ajax({
        url:"http://www.finalab.cn:12580/sys/project/detail?id="+id,
        type: "POST",
        dataType: "JSON",
        success: function (res) {
            var project = res.data;
            modelhead.innerText = "项目名称："+project.name;
            var imglist = '';
            for (let j = 0;j < project.imageList.length; j++) {
                imglist += '<div class="item';
                if(j == 0){
                    imglist += ' active';
                }
                imglist += '">\n<img src="'+project.imageList[j]+'">\n';

                imglist += '</div>';
            }
            carouselinner.innerHTML = imglist;
            var mumberlist = '';
            for (let k = 0;k < project.memberList.length; k++) {
                mumberlist += project.memberList[k];
                if(k !== project.memberList.length-1) mumberlist += "、";
            }
            modelbody.innerHTML =
                "<table class='table'>" +
                "<tr>" +
                "<td class='col-md-2'>项目成员：</td>" +
                "<td>"+ mumberlist +"</td>" +
                "</tr>" +
                "<tr>" +
                "<td>项目类别：</td>" +
                "<td>"+ project.category +"</td>" +
                "</tr>" +
                "<tr>" +
                "<td>项目简介：</td>" +
                "<td>"+ project.introduction +"</td>" +
                "</tr>" +
                "</table>";
        }
    });
}
$(function () {
    $.ajax({
    	url:"http://www.finalab.cn:12580/sys/project/getAll",
        type: "POST",
        dataType: "JSON",
    	success: function (res) {
            var projects = res.data;
            if (projects) {
                $('.project-body-list').html("");
                for (let i = 0;i < projects.length; i++){
                    if (projects[i].imageList == null) projects[i].imageList = "";
                    if (projects[i].coverImage == null) projects[i].coverImage = "";
                    $('.project-body-list').append(
                        '<li class="project-body-list-item">\n' +
                        '<div class="pro-list-item-img"><label>'+ projects[i].category +'</label><img src="'+ projects[i].coverImage +'" alt="nn"></div>\n' +
                        '<div class="pro-list-item-bot">\n' +
                        '<p>'+ projects[i].name +'<a> <button class="pro-btn btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" onclick="Detail(\''+projects[i].id+'\')">了解更多</button></a></p>\n' +
                        '</div>\n' +
                        '</li>'
                    )
                }
            }
    	}
    });
})

$(function () {
    $.ajax({
        url: "http://www.finalab.cn:12580/sys/achieve/getAll",
        type: "POST",
        dataType: "JSON",
        success: function (res) {
            let graduates = res.data;
            if(graduates){
                $('.numberout-list').html('');
                for (let i=0;i<graduates.length;i++){
                    $('.numberout-list').append('<li class="numberout-list-item">\n' +
                        '<div class="nu-list-item-content">\n' +
                        '<div class="nu-item-content-head">\n' +
                        '<img src="'+ graduates[i].headPortrait +'" alt="number">\n' +
                        '</div>\n' +
                        '<div class="nu-item-content-body">\n' +
                        '<h2>'+ graduates[i].name +'</h2>\n' +
                        '<p class="nu-item-content-com">\n' +
                        ''+ graduates[i].whereabouts +'\n' +
                        '</p>\n' +
                        '<p class="nu-item-content-desc">\n' +
                        ''+ graduates[i].catchphrase +'\n' +
                        '</p>\n' +
                        '</div>\n' +
                        '</div>\n' +
                        '</li>');
                }
            }
        },
        complete: function () {
            var list = document.getElementsByClassName('numberout-list')[0];//这个list指的是选取的整个ul，通过getElementsByClassName(拿到的是一个数组，长度为1
            list.style.left = '0px';
            var listlength = list.getElementsByClassName('numberout-list-item').length;
            list.style.width = listlength * 250 + 'px';
            var prev = document.getElementById('prev');//是呀没毛病呀对呀  ？？？ 为啥是一个长度为1的数组，不应该死一个对象？不是对象，你重新建一个html，我演示一下
            var next = document.getElementById('next');//等等你删我注释干嘛
            $(next).on("click", function () {
                if(parseInt(list.style.left) > -(listlength - 4) * 250) {
                    list.style.left = parseInt(list.style.left) - 250 + 'px'
                }
            })
            $(prev).on("click", function () {
                if(parseInt(list.style.left)!= 0)
                {
                    list.style.left = parseInt(list.style.left) + 250 + 'px'
                }
            })
        }
    })
})

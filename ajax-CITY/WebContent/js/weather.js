 function getWeather() {
        //基于jQuery的实时天气功能实现
        $.ajax({
            //设置请求类型
            type:"get",
            //
           // timeout:5000,
            //设置请求地址
            zipCode:document.getElementById("zipcode").value,
            url: uri="https://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",",
            //设置需要发送的数据
            appid="us&appid=6dd02007701b49ff962bed38af51032a",
            data: {location: "北京", output: 'json', ak: '0A5bc3c4fb543c8f9bc54b77bc155724'},
            //定义此请求为跨域请求
            dataType: 'jsonp',
            success: function (data) {
                //console.log(data)
                //请求成功执行的代码
                //获取到与功能相关的数据
                var today =  data['results'][0]['weather_data'][0];
                //把请求到的数据渲染在页面上
                span.innerText = today.date;
                console.log(today)
                $("#daypic").html("<img src="+ today.dayPictureUrl +" >");
                $("#nigpic").html("<img src="+ today.nightPictureUrl +">");
                $("#wea").html(today.weather);

            },
            error: function () {
                span.innerText = "天气请求超时";
                $("#daypic").html("");
                $("#nigpic").html("");
                $("#wea").html("");
            }
        })
    }
    getWeather();

    //连接网络时，获取天气
    window.ononline = function () {
        getWeather();
    }

    //无网络连接时，提醒用户联网以获取天气
    window.onoffline = function () {

        span.innerText = "请连接网络以获取天气";
    }
clock();
function clock() {
    var time = new Date();

    var year = time.getFullYear();
    var day = time.getDate();
    var month = time.getMonth() + 1;

    var s = time.getSeconds();
    var m = time.getMinutes();
    var h = time.getHours();
    var ms = time.getMilliseconds();

    var degS = (s * 6) + (ms * 0.006) + 180;
    var degM = (m * 6) + (s * 0.1) + 180;
    var degH = (h * 30) + (m / 2) + 180;

    month = check(month);
    day = check(day);

    if(h < 12)
    {
        document.querySelector("time").src = "./img/day.png";
    }
    else
    {
        document.querySelector("#time").src = "./img/night.png";
    }

    document.getElementsByClassName("s_box")[0].style.transform = "rotate(" + degS + "deg)";
    document.getElementsByClassName("m_box")[0].style.transform = "rotate(" + degM + "deg)";
    document.getElementsByClassName("h_box")[0].style.transform = "rotate(" + degH + "deg)";
    document.getElementById("date").innerHTML = year + "." + month + "." + day + ".";
    setInterval(clock, 50);
}

function check(i)
{
    if (i < 10)
        i = "0" + i;
    return i;
}
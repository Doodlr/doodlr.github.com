window.onload = init;

function init(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    hello();
}

function gradient() {
    var grd = ctx.createLinearGradient(0, 0, 400, 0);
    grd.addColorStop(0, "green");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 50, 400, 100);
}

function radgrd() {
    var grd = ctx.createRadialGradient(200, 100, 0, 400, 200, 180);
    grd.addColorStop(0, "#00f");
    grd.addColorStop(1, "#fff");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 400, 200);
}

function hello() {
    ctx.font = "30px Calibri";
    ctx.fillText("Hello world!", 10, 50);
    changeFont();
}

function changeFont() {
    var fonts = ["Arial", "Segoe UI", "Garamond", "Script MT Bold", "Comic Sans MT"];
    for (var i = 0; i < fonts.length; i++) {
        var element = fonts[i];
        
    }    
}
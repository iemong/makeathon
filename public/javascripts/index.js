
function outputVideo2(){
    var width = screen.width;
    var height = screen.height;
    if (width > height) {
        var minLength = height;
    }else {
        var minLength = width;
    }
    var video = document.getElementById("myVideo");
    var canvas = document.getElementsByTagName("canvas");
    var canvasWrap = document.getElementById("videoBox");
    
    
    video.setAttribute("width", minLength / 2);
    video.setAttribute("height", minLength / 2);
    video.setAttribute("data-width", minLength / 2);
    video.setAttribute("data-height", minLength / 2);
    
    canvasWrap.style.width = minLength + "px";
    canvasWrap.style.height = minLength + "px";
    
    var ctx = new Array(4);
    for(var i = 0; i < ctx.length; i++){
        canvas[i].setAttribute("width", minLength);
        canvas[i].setAttribute("height", minLength);
        canvas[i].setAttribute("data-width", minLength);
        canvas[i].setAttribute("data-height", minLength);
        ctx[i] = canvas[i].getContext("2d");
    }
    //ctx = canvas[1].getContext("2d");	
	 var canvas_width = canvas[1].getAttribute("data-width");
	 canvas_width = parseInt(canvas_width);
	 var canvas_height = canvas[1].getAttribute("data-height");
	 canvas_height = parseInt(canvas_height);
	 var video_width = video.getAttribute("data-width");
	 video_width = parseInt(video_width);
	 var video_height = video.getAttribute("data-height");
	 video_height = parseInt(video_height);

	 setInterval(function(){
         for(var i = 0; i < ctx.length; i++){
             draw(ctx[i]);
         }
	  }, 1000/30);
    
    var setSpace = -50;
    
    function draw(_ctx) {
        _ctx.fillStyle = "rgb(0,0,0)";
        _ctx.drawImage(video, canvas_width /2 - video_width / 2, setSpace, video_width, video_height + setSpace);
        _ctx.globalCompositeOperation = "destination-atop";
        _ctx.beginPath();
        _ctx.moveTo(0,0);
        _ctx.lineTo(canvas_width, 0);
        _ctx.lineTo(canvas_width / 2, canvas_height / 2);
        _ctx.closePath();	  
        _ctx.fill();
        _ctx.globalCompositeOperation = "source-over";
    }
}

//
// a js library that holds misc. processing routines
//

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

var mySound = new sound("snd/sfx1.wav")
var myMusic = new sound("snd/music.mp3")


  // //get DPI
  let dpi = window.devicePixelRatio;
  //get canvas
    function fix_dpi() {
      //get CSS height
      //the + prefix casts it to an integer
      //the slice method gets rid of "px"
      let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
      //get CSS width
      let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
      //scale the canvas
      canvas.setAttribute('height', style_height * dpi);
      canvas.setAttribute('width', style_width * dpi);
    }

  function interpolate(begin,end,t) {
    // x = begin value, y = end value, t = time in ticks so far (between 0 and 1)
    //(x*t) + ((x-y)*(1-t)), t of 0 returns x, t of 1 returns y
    // 1, 100, 0
    //var adjustedValue = (end-begin)*t
      t = t < 0 ? 0 : t;
	    t = t > 1 ? 1 : t;
    
    var adjustedValue = begin + (end-begin)*t
    //alert(adjustedValue)
    //alert(begin +":"+end+":"+t +"returns"+adjustedValue);
    return adjustedValue
  }
  
  
  
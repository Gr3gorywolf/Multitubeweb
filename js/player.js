var timeh = null
  var audio = null
  var playpausebutton = null
  var barra =null
  var barra2 = null
function initplayer(){
    timeh = document.getElementById("time");
   audio = document.getElementById("reproductor");
    playpausebutton = document.getElementById("playpause")
     barra = document.getElementById("bar")
     barra2 = document.getElementById("bar2")

     setInterval(function () {
        if (!audio.paused) {
          var completition = (audio.currentTime / audio.duration) * 0.1
    
          barra.value = `${completition * 1000}`
          var timecurrent = calculateTotalValue(audio.currentTime);
          var duration = calculateTotalValue(audio.duration);
    
          timeh.innerText = `${timecurrent}/${duration}`
          console.log(completition * 1000);
    
          if (audio.paused && playpausebutton.innerText != "play_arrow") {
    
          } else
          if (!audio.paused && playpausebutton.innerText != "pause") {
              playpausebutton.innerText = "pause"
          }
    
        }
    
      }, 500)


}
 

  function calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2)
    var hours = 0;
    hours = Math.floor(minutes / 60)
    var hourstr = (hours < 10 ? "0" + hours : hours)
    var minstr = (minutes < 10 && hours != 0 ? "0" + minutes : minutes);
    var segstr = (seconds_int < 10 ? "0" + seconds : seconds);
    var time = "";
    if (hours < 1) {
      time = minstr + ":" + segstr

    }
    else {
      time = hourstr + minstr + ":" + segstr
    }


    return time.replace(".", "");
  }

  function playpause() {
    if (audio.paused) {
      playpausebutton.innerText = "pause"
      audio.play();
    } else {
      playpausebutton.innerText = "play_arrow"
      audio.pause();
    }

  }

  barra.addEventListener("click", seek);
  function seek(event) {
     
    var percent = event.offsetX / this.offsetWidth;
    audio.currentTime = percent * audio.duration;
    audio.play();
  }



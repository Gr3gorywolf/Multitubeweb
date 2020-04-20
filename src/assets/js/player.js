

export default {
  timeh: null,
  audio: null,
  playpausebutton: null,
  barra: null,
  initplayer() {
    console.log("me inicialize");
    this.timeh = document.getElementById("time");
    this.audio = document.getElementById("reproductor");
    this.playpausebutton = document.getElementById("playpause")
    this.barra = document.getElementById("bar")
    this.barra2 = document.getElementById("bar2")
    this.barra.addEventListener("click", this.seek);
    setInterval(() => {
      if (!this.audio.paused) {
        var completition = (this.audio.currentTime / this.audio.duration) * 0.1

        this.barra.value = `${completition * 1000}`
        var timecurrent = this.calculateTotalValue(this.audio.currentTime);
        var duration = this.calculateTotalValue(this.audio.duration);

        this.timeh.innerText = `${timecurrent}/${duration}`

        if (this.audio.paused && this.playpausebutton.innerText != "play_arrow") {
          this.playpausebutton.innerText = "play"
        } else
          if (!this.audio.paused && this.playpausebutton.innerText != "pause") {
            this.playpausebutton.innerText = "pause"
          }

      }

    }, 500)
  },
  calculateTotalValue(length) {
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
  },
  playpause() {
    if (this.audio.paused) {
      this.playpausebutton.innerText = "pause"
      this.audio.play();
    } else {
      this.playpausebutton.innerText = "play_arrow"
      this.audio.pause();
    }

  },
  

}
var time = 295;
var starFlag = true;
var state = true;
var audio1 = new Audio("../audios/text.mp3");

$(document).ready(function () {
  $("#modalBox").modal("show");

  buttonEvt();
});

function init() {
  document.querySelector(".stopWatch").innerHTML = "00:00:00";
}

function buttonEvt() {
  var hour = 0;
  var min = 0;
  var sec = 0;
  var timer;

  // 모달 안의 okay 버튼에 이벤트를 건다.
  $("#closeModalBtn").on("click", function () {
    $("#modalBox").modal("hide");
  });
  // start btn
  $("#goStopBtn").click(function () {
    if (state) {
      $("#goStopBtn").css("backgroundColor", "red");
      $("#goStopBtn").text("PAUSE");
      state = false;

      if (time == 0) {
        init();
      }

      timer = setInterval(function () {
        time++;

        min = Math.floor(time / 60);
        hour = Math.floor(min / 60);
        sec = time % 60;
        min = min % 60;

        if (time == 300) {
          $(".modal-body").text("cheerup");
          $("#modalBox").modal("show");

          // 오디오 재생
          audio1.play();

          setTimeout(() => {
            $("#modalBox").modal("hide");
            // 오디오 중지
            audio1.pause();
          }, 5000);

          time += 294;
        } else if (time == 600) {
          $(".modal-body").text("almost done");

          $("#modalBox").modal("show");
          setTimeout(() => {
            $("#modalBox").modal("hide");
          }, 5000);
          time += 1190;
        } else if (time == 1800) {
          $(".modal-body").text("weldone");

          $("#modalBox").modal("show");
          setTimeout(() => {
            $("#modalBox").modal("hide");
          }, 5000);
        }

        var th = hour;
        var tm = min;
        var ts = sec;
        if (th < 10) {
          th = "0" + hour;
        }
        if (tm < 10) {
          tm = "0" + min;
        }
        if (ts < 10) {
          ts = "0" + sec;
        }

        document.querySelector(".stopWatch").innerHTML =
          th + ":" + tm + ":" + ts;
      }, 1000);
    } else {
      $("#goStopBtn").css("backgroundColor", "blue");
      $("#goStopBtn").text("START");
      clearInterval(timer);
      state = true;
    }
  });

  // stop btn
  $("#stopBtn").click(function () {
    if (time != 0) {
      $(".fa").css("color", "#FAED7D");
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      starFlag = true;
      time = 0;
      init();
    }
  });

  $(".saveBtn").click(function () {
    window.location.href = "https://www.naver.com/";
  });

  $("#mypageBtn").click(function () {
    window.location.href = "mypage.html";
  });
}

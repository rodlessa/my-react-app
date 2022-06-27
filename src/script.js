function fnBlink() {
    $(".blink").fadeOut(2000);
    $(".blink").fadeIn(1000);
    $(".blink2").fadeOut(3000);
    $(".blink2").fadeIn(2000);
    $(".blink3").fadeOut(4000);
    $(".blink3").fadeIn(3000);
  }
  setInterval(fnBlink, 2000);

var omikujiResult = [
  "大吉",
  "中吉",
  "小吉",
  "凶"
];
window.addEventListener('DOMContentLoaded',function() {
  $("#omikujiBtn").click(function(){
    var btn = $(this);
    btn.prop("disabled", true);
    //おみくじを振る
    $("#omikujiImg").addClass("buruburu");
    //ブルブルを止める
    setTimeout(function(){
      $("#omikujiImg").removeClass("buruburu");
    },1500);
    //おみくじをひっくり返す
    setTimeout(function(){
      $("#omikujiImg").addClass("rotate");
    },3000);
    //結果が表示される
    setTimeout(function(){
    var luckyNumber = null;
    result = omikujiResult[luckyNumber];
      var x = Math.random()*100;
      if(x>=0 & x<0.01){
        luckyNumber = 0;
        $("#omikujiResult").html("<div class='omikujiResultInner0'>" + result + "</div>");
      }
      else if(x>=0.01 & x<1){
        luckyNumber = 1;
        $("#omikujiResult").html("<div class='omikujiResultInner1'>" + result + "</div>");
      }

      else if(x>=1 & x<10){
        luckyNumber = 2;
        $("#omikujiResult").html("<div class='omikujiResultInner2'>" + result + "</div>");
      }
      else{
        luckyNumber = 3;
        $("#omikujiResult").html("<div class='omikujiResultInner3'>" + result + "</div>");
      }
    } ,5000);
      
  
    //リセットする
    setTimeout(function(){
      $("#omikujiResult").html("<img id='omikujiImg' src='assets/omikuji.png'>");
      btn.prop("disabled", false);
    },8000);
   
  });
});

$(function() {
  $(".button").click(function() {
    let colors = ["#ff00f5", "#ffd736", "#f2a4ff", "#6bf51d", "#06e854","#F3FF02","#00FFAA","#FF003F"]
    let i = Math.floor(Math.random()*colors.length);
    $("body").css("background-color", colors[i]);
  });
});


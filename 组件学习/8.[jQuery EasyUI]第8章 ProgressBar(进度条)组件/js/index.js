/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').progressbar({
    width: 400,
    height: 30,
    value: 0,
    text: '{value}%'
  });

  setInterval(function(){
    $('#box').progressbar('setValue', $('#box').progressbar('getValue') + 5)
  },1000);

})
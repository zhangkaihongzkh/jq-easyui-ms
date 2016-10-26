/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').calendar({
    width: 210,
    height: 210,
  });
  $('#box').calendar('moveTo', new Date(2016,10,26))
})
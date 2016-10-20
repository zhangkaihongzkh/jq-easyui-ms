/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').tooltip({
    position : 'bottom',
    content : '这里可以输入提示内容',
    trackMouse : true,
    deltaX : 100,
    deltaY : 100,
    showEvent : 'mouseenter',
    hideEvent : 'mouseleave',
    showDelay : 300,
    hideDelay : 100,
  });
  console.log($('#box').tooltip('options'));

})
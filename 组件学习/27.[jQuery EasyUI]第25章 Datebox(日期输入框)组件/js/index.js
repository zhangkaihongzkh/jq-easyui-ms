/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  var buttons = $.extend([], $.fn.datebox.defaults.buttons);
  buttons.splice(1, 0, {
    text: 'mybtn',
    handler: function(){
      alert( 'mybtn')
    }
  });
  $('#box').datebox({
    panelWidth: 210,
    panelHeight: 210,
    buttons: buttons,
  });

  $('#box').datebox('calendar').calendar({
    firstDay: 1,
  })




})
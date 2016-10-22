/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').window({
    title: '新的窗口',
    width : 600,
    height : 400,
    modal : true,
    collapsible : false,
    minimizable : false,
    maximizable : false,
    closable : false,
    closed : false,
    zIndex : 9999,
    draggable : false,
    resizable : false,
    shadow : false,
    inline : false,
  });
  $(document).click(function () {
    $('#box').window('move', {
      left : 0,
      top : 0,
    });
  });
  $(document).dblclick(function () {
//替换成 center 或 vcenter 亦可
    $('#box').window('hcenter');
  });
})
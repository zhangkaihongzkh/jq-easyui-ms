/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
 /* $('#box').draggable({
   revert : true,
   cursor : 'text',
   handle : '#pox',
   disabled : false,
   edge : 50,
   axis : 'v',
   proxy: 'clone',
   deltaX : 10,
   deltaY : 10,
   proxy: function(source){
   var p = $('<div style="border:1px solid #ccc;width:400px;height:200px;"></div>');
   p.html($(source).html()).appendTo('body');
   return p;
   },
   });*/

 $('#box').draggable({
   onBeforeDrag : function (e) {
     alert('拖动之前触发！');
//return false;
   },
   onStartDrag : function (e) {
     alert('拖动时触发！');
   },
   onDrag : function (e) {
     alert('拖动过程中触发！');
   },
   onStopDrag : function (e) {
     alert('在拖动停止时触发！');
   },
 })
})
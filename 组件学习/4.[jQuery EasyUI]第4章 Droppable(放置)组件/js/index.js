/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $.fn.droppable.defaults.disabled = true;

  $('#dd').droppable({
    accept: '#box',
    disabled: false,
    onDragEnter: function(e, source){
        $(this).css('background', 'blue');
    },
    onDragOver: function(e, source){
      $(this).css('background', 'orange');
    },
    onDragLeave : function (e, source) {
      //console.log(source);
      $(this).css('background', 'green');
      //alert('over');
    },
    onDrop : function (e, source) {
      //console.log(source);
      $(this).css('background', 'maroon');
      //alert('over');
    },
  });
  $('#box').draggable({

  });
})
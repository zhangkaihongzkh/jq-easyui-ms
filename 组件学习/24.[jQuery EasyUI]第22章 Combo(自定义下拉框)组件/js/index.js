/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').combo({
    required: true,

  });
  $('#food').appendTo($('#box').combo('panel'));

  $('#food input').click(function(){
    var v = $(this).val();
    var s = $(this).next('span').text();
    $('#box').combo('setValue', v).combo('setText', s).combo('hidePanel');
  })
})
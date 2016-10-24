/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').searchbox({
    searcher: function(value, name){
      alert(value + '-' + name);
    },
    menu: '#box',
    prompt: '请输入内容',
  })
})
/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').accordion({
    width: 500,
    height: 500,
    onSelect: function(title, index){
      console.log(title + '|' + index);
    },
  });

  //增加一个面板
  $('#box').accordion('add', {
    title: '新增加的面板',
    closable: true,
    centent: 12313
  })
})
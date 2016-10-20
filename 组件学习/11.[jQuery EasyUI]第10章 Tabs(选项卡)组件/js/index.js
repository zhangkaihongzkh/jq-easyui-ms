/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').tabs({
    width: 500,
    height: 150,
    /*plain: true*/
    tools: [{
      iconCls: 'icon-add',
      handler: function(){
        alert('add')
      }
    }],
    select: 1
  })
})
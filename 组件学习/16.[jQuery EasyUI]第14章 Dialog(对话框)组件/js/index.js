/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').dialog({
    title: '标题',
    iconCls: 'icon-save',
    modal: true,
    toolbar:[{
      text: '编辑',
      iconCls: 'icon-edit',
      handler: function(){
        alert('编辑');
      }
    }],
    buttons: [{
      text: '保存',
      iconCls: 'icon-ok',
      handler: function(){
        alert('save')
      }
    },{
      text: '关闭',
      iconCls: 'icon-close',
      handler: function(){
        alert('close')
      }
    }
    ]
  });

})
/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $.messager.defaults = {ok: '是',cancel: '否'}
  /*$.messager.alert('警告框', '这是一个警告框', 'info', function(){
    alert('确认后回调');
  })*/

 /* $.messager.confirm('确认对话框', '确认删除？', function(flag){
    if(flag){
      alert('删除成功')
    }
  })*/

  /*$.messager.prompt('提示对话框', '输入你的名字', function(flag){
    if(flag){
      alert(flag)
    }
  })*/

  /*$.messager.progress({
    title: '执行中',
    msg: '努力加载',
    text: '{value}%',
    interval: 100
  })*/

  /*$.messager.show({
    title : '我的消息',
    msg : '消息在 5 秒后关闭',
    timeout : 5000,
    showType : 'slide',
  });*/

  $.messager.show({
    title : '我的消息',
    msg : '消息在 5 秒后关闭',
    timeout : 5000,
    showType : 'slide',
    style:{
      top : 0,
    }
  });
})
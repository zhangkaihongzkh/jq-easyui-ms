/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').panel({
    width: 500,
    height: 150,
    title: '面板',
    closable: true,
    iconCls: 'icon-search',
    minimizable: true,
    maximizable: true,
    collapsed: false,
    collapsible : true,
    style:{
      'min-height': '200px'
    },
    tools:[{
      iconCls: 'icon-help',
      handler: function(){
        alert('help');
      }
    },{

    }],
    href:'content.php',
    loadingMessage: '加载中...',
    //定义如何从 ajax 应答数据中提取内容，返回提取数据
    extractor: function(data){
      return data.substring(0,3)
    }
  })

})
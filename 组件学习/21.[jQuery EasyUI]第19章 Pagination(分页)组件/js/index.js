/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').pagination({
    total: 4,
    pageSize: 1,
    pageNumber: 1,
    pageList: [1,2],
    buttons:[{
      iconCls: 'icon-add'
    },'-',{
      iconCls: 'icon-edit'
    }],
    displayMsg: '从{from}到{to}，共{total}人',
    layout: ['first','list','last','prev','next','refresh','sep','links','manual'],
    onSelectPage: function(pageNumber, pageSize){
      $('#box').pagination('loading');
      $('#content').panel('refresh','user.php?page=' + pageNumber + '&pagesize=' + pageSize);
      setTimeout(function(){
        $('#box').pagination('loaded');
      },1000);

    },
    onChangePageSize: function(pageSize){
      alert('修改每页页面显示条数时触发')
    }
  })
})
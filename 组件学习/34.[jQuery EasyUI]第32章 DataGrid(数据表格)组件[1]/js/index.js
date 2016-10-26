﻿/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $('#box').datagrid({
    width : 500,
    //url : 'content.json',
    url : 'user.php',
    title : '用户列表',
    iconCls : 'icon-search',
    columns : [[
      {
        field : 'user',
        title : '帐号',
      },
      {
        field : 'email',
        title : '邮件',
      },
      {
        field : 'date',
        title : '注册时间',
      },
    ]],
    pagination : true,
    pageSize : 5,
    pageList : [5, 10, 15],
    pageNumber : 1,
    pagePosition : 'bottom',
  });
})
/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){
  $.extend($.fn.validatebox.defaults.rules, {
    minLength: {
      validator: function (value, param) {
        return value.length >= param[0];
      },
      message: '请输出不小于{0}的字符'
    }
  })

  $('#input').validatebox({
    required: true,
    validType: 'minLength[5,10]'
  })
})
/**
 * Created by 凯洪 on 2016/10/20.
 */
$(function(){

  $('#rr').resizable({

    maxWidth:800,
    maxHeight:600,
    handles:'se',
    egde: 20
  })
  console.log($('#box').resizable('options'))
})
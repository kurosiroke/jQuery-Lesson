let orange = 120;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});
let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});
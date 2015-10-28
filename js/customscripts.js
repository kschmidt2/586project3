$(document).ready(function(){
     $('#introduction').click(function(){
          $('#collapse1').attr('src', 'images/titlepage_top.png');
     });
     $('#aboutdata').click(function(){
          $('#collapse2').attr('src', 'images/titlepage_bottom.png');
     });
    //  $('#womenlink').click(function(){
    //       $('#headlineinfo').attr('src', 'images/titlepage_bottom.png');
    //  });

     $('#introduction').click(function(){
       $('#collapse2').hide();
       $('#collapse1').show();
     })
     $('#aboutdata').click(function(){
       $('#collapse1').hide();
       $('#collapse2').show();
     })
});

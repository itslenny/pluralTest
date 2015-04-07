$(function(){
  // alert('loaded');

  $('#plural-form').on('submit',function(e){
    e.preventDefault();

    if($('#word-text').val().length < 1 || $('#word-text').val().split(' ') > 1){
      alert('Enter exactly ONE word.');
      return;
    }

    $.ajax({
      url:$(this).attr('action'),
      data:$(this).serialize(),
      method:'GET'
    }).done(function(data){
      console.log('yay',data);
      $('#plural-result').html('One <strong>'+data.word+'</strong> or many <strong>'+data.plural+'</strong>');
    })

  })
})
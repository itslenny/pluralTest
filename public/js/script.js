//when DOM is ready
$(function(){
  // alert('loaded');

  //listen for form submit
  $('#plural-form').on('submit',function(e){
    e.preventDefault();

    //validate form field
    if($('#word-text').val().length < 1 || $('#word-text').val().split(' ').length > 1){
      alert('Enter exactly ONE word.');
      return;
    }

    //make ajax call (get plural)
    $.ajax({
      url:$(this).attr('action'),
      data:$(this).serialize(),
      method:'GET'
    }).done(function(data){
      // console.log('yay',data);
      //update view (display result from server)
      $('#plural-result').html('One <strong>'+data.word+'</strong> or many <strong>'+data.plural+'</strong>');
    });

  });// end on submit listener


}); //end on DOM ready
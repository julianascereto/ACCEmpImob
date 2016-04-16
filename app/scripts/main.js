// Animate request Services form submit
$('#requestServiceForm input[type=button]').click(function(){
  $('#formDiv').hide(100);
  $('#submitDiv').show(100);
});

$('.image-property').click(function(ev) {

  console.log(ev);

  var popupEl = $('#showImage');

  popupEl.find('.modal-body').empty().append(
    $('<img>').attr('src', ev.target.src).css('width', '100%')
  );
  popupEl.modal();
});

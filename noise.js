function initialize() {
  var buttons = $('button.note');
  $.each(buttons, function(index, button) {
    var _button = $(button);
    var note = _button.attr('class').split(' ')[1];

    _button.click(function() {
      playNote(note);
    });
  });
};

$(document).ready( function() {
  initialize(); 
});


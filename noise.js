var Keyboard = function() {
  var instance = this;

  this.initialize = function() {
    this._setupButtons();
    this._setupKeyboard();
  };

  this._setupButtons = function() {
    $('button.note').click(function() {
      var note = $(this).attr('class').split(' ')[1];
      instance._playNote(note);
    });
  };

  this._playNote = function (note) {
    var audioId = '#' + note + 'Audio';
    $(audioId)[0].play();
  };
};

$(document).ready( function() {
  var keyboard = new Keyboard();
  keyboard.initialize();
});


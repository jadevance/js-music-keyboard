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
    // resets the audiofile to time zero with each event 
    $(audioId)[0].currentTime = 0 
  };

  this._setupKeyboard = function() {
    $(document).keypress(onKeyPress);

    function onKeyPress(event) {
      switch(event.which) {
        // a
        case 97:
          instance._playNote('c');
          break;
        // s  
        case 115:
          instance._playNote('d');
          break;
        // d
        case 100:
          instance._playNote('e');
          break;
        // f
        case 102:
          instance._playNote('f');
          break;
        // g  
        case 103:
          instance._playNote('g');
          break;
        // h
        case 104:
          instance._playNote('a');
          break;
        // j 
        case 106:
          instance._playNote('b');
          break;
      };
    };
  };
};

$(document).ready( function() {
  var keyboard = new Keyboard();
  keyboard.initialize();
});


// function instrument(allNotes) { 
//   this.allNotes = allNotes
//   // play(note)
//   this.playC = function() {
//     var cAudio = $('audio#cAudio')[0].play()
//   }
//   this.PlayD = function(){

//   }
// }


$(document).ready( function() {
  var buttons = $('button')
  // var allNotes = $('audio')

  buttons.on('click', function(event) {
    event.preventDefault()
    var button = $(this)
    if (button.hasClass('note c')) {
      var audio = $('audio#cAudio')[0]
    } else if (button.hasClass('note d')) {
      var audio = $('audio#dAudio')[0]
    } else if (button.hasClass('note e')) {
      var audio = $('audio#eAudio')[0]
    } else if (button.hasClass('note f')) {
      var audio = $('audio#fAudio')[0]
    } else if (button.hasClass('note g')) {
      var audio = $('audio#gAudio')[0]
    } else if (button.hasClass('note a')) {
      var audio = $('audio#aAudio')[0]
    } else if (button.hasClass('note b')) {
      var audio = $('audio#bAudio')[0]
    } else {
      console.log('else conditon hit!!')
    }
    audio.play();
    audio.currentTime = 0 
  })
});

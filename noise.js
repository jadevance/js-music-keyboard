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
  var allNotes = $('audio')

  buttons.on('click', function(event) {
    event.preventDefault()
    var button = $(this)
    if (button.hasClass('note c')) {
      var cAudio = $('audio#cAudio')[0].play()
    } else if (button.hasClass('note d')) {
      var dAudio = $('audio#dAudio')[0].play()
    } else if (button.hasClass('note e')) {
      var eAudio = $('audio#eAudio')[0].play()
    } else if (button.hasClass('note f')) {
      var fAudio = $('audio#fAudio')[0].play()
    } else if (button.hasClass('note g')) {
      var gAudio = $('audio#gAudio')[0].play()
    } else if (button.hasClass('note a')) {
      var aAudio = $('audio#aAudio')[0].play()
    } else if (button.hasClass('note b')) {
      var bAudio = $('audio#bAudio')[0].play()
    } else {
      console.log('else conditon hit!!')
    }
  })
});

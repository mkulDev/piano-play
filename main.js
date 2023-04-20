const button = document.getElementById('button')
let getData = button.innerText
let MusicToPlay = []

button.onclick = function () {
  let input = document.getElementById('input').value.toUpperCase()
  MusicToPlay = input.split(' ')
  playFromNotes(MusicToPlay)
}

function playNotes(event) {
  let sound = document.querySelectorAll(`audio[data-key=${event.code}]`)[0]
  let key = document.querySelectorAll(`div[data-key=${event.code}]`)[0]
  let note = document.querySelectorAll(`div[data-key=${event.code}]`)[0]
  let check = document.getElementsByClassName('playedNote')[0]

  if (sound) {
    sound.currentTime = 0
    sound.play()
  }

  if (key) {
    key.currentTime = 0
    key.classList.add('hitting')
    check.innerHTML = note.getAttribute('data-note')
  }
}

function playFromNotes(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
      let currentNote = `${arr[i]}`
      let sound = document.querySelectorAll(`audio[data-note=${currentNote}]`)[0] || null
      sound ? (sound.currentTime = 0) : null
      sound ? sound.play() : null
    }, i * 300)
  }
}

document.addEventListener('keydown', playNotes)

document.addEventListener('keyup', function (event) {
  let key = document.querySelectorAll(`div[data-key=${event.code}]`)[0]
  let check = document.getElementsByClassName('playedNote')[0]
  if (key) {
    key.currentTime = 1
    key.classList.remove('hitting')
    check.innerHTML = ''
  }
})

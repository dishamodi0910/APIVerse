const searchForm = document.querySelector('form')
const searchItem = document.querySelector('input')

const messageOne = document.querySelector('#message-1') 
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSong = document.querySelector('#song-image')
const play = document.querySelector('#icon')
let songUri = '' 

searchForm.addEventListener('submit', (e) => {
    //set this to prevent browser from refreshing on form submission
    e.preventDefault()

    const song = searchItem.value
    messageOne.textContent = 'Loading...' 
    messageTwo.textContent = '' 
    messageThree.textContent = '' 
    messageFour.textContent = '' 
    messageFive.textContent = '' 
    messageSong.classList.add('hidden')  
    play.classList.add('hidden')

    fetch('/search?q='+song).then((response) => {
        response.json().then((data) => {
            if (data.error){  
                messageOne.classList.remove('first-para')
                messageOne.textContent = data.error 
            }
            else{
                messageOne.classList.add('first-para')
                messageOne.textContent = 'Your song is : '+data.name
                play.classList.remove('hidden')
                sungByMsg = ''
                artist = data.artists
            
                for (i = 0; i < artist.length; i++ ){
                    sungByMsg += artist[i].name
                    if (i < artist.length-1)
                        sungByMsg += ', '
                }
                messageTwo.textContent = 'Movie Name : '+data.album.name
                messageThree.textContent = 'Song by : '+ sungByMsg
                messageFour.textContent = 'Composed by : '+data.album.artists[0].name 
                messageFive.textContent = 'Duration : '+ formatDuration(data.duration_ms)
                messageSong.src = data.album.images[0].url
                messageSong.classList.remove('hidden')

                //Store song uri
                songUri = data.uri
            }
        })
    })
})

function formatDuration(milliseconds) {
    // Convert milliseconds to seconds
    const totalSeconds = Math.floor(milliseconds / 1000);

    // Calculate minutes and seconds
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    // Construct the formatted string
    var formattedDuration = ''
    if (minutes > 0) {
        formattedDuration += minutes + 'min '
    }
    if (seconds > 0) {
        formattedDuration += seconds + 'sec'
    }

    return formattedDuration.trim()
}

play.addEventListener('click', (e) => { 
    e.preventDefault()  // Prevent default button behavior
    window.location.href = '/play?uri=' + encodeURIComponent(songUri)
})
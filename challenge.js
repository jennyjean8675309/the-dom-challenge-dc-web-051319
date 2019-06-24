const counter = document.getElementById('counter')

document.addEventListener('DOMContentLoaded', function(){
    window.setInterval(incrementCounter, 1000)
})

function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1
}


import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function play() {
  state.isRunning = true
  document.documentElement.classList.add('running')

  timer.countdown()  
}

export function pause() {
  state.isRunning = false
  state.isRunning = document.documentElement.classList.remove('running')
}

export function reset() {
  state.isRunning = false
  state.isRunning = document.documentElement.classList.remove('running')  
}

export function increment() {
  timer.incrementTimer()
}

export function decreases() {
  timer.decreasesTimer()
}

export function forest() {

  if(state.sound == 'forest') {
    sounds.forest.pause()
    state.sound = 'music-off'
    document.getElementById('forest').classList.remove('sound-on')
    return
  }    
    
  sounds.rain.pause() 
  sounds.coffeeShop.pause()
  sounds.fireplace.pause()
  sounds.forest.play()
  state.sound = 'forest'

  document.getElementById('rain').classList.remove('sound-on')
  document.getElementById('coffeeShop').classList.remove('sound-on')
  document.getElementById('fireplace').classList.remove('sound-on')
  document.getElementById('forest').classList.add('sound-on')
}

export function rain() {

  if(state.sound == 'rain') {
    sounds.rain.pause() 
    state.sound = 'music-off' 
    document.getElementById('rain').classList.remove('sound-on')  
    return
  }
    
  sounds.forest.pause() 
  sounds.coffeeShop.pause()
  sounds.fireplace.pause()
  sounds.rain.play()
  state.sound = 'rain'

  document.getElementById('forest').classList.remove('sound-on')
  document.getElementById('coffeeShop').classList.remove('sound-on')
  document.getElementById('fireplace').classList.remove('sound-on')
  document.getElementById('rain').classList.add('sound-on')
}

export function coffeeShop() {

  if(state.sound == 'coffeeShop') {
    sounds.coffeeShop.pause() 
    state.sound = 'music-off' 
    document.getElementById('coffeeShop').classList.remove('sound-on')   
    return
  }
    
  sounds.forest.pause() 
  sounds.rain.pause()
  sounds.fireplace.pause()
  sounds.coffeeShop.play()
  state.sound = 'coffeeShop'

  document.getElementById('forest').classList.remove('sound-on')
  document.getElementById('rain').classList.remove('sound-on')
  document.getElementById('fireplace').classList.remove('sound-on')
  document.getElementById('coffeeShop').classList.add('sound-on')
}

export function fireplace () {

  if(state.sound == 'fireplace') {
    sounds.fireplace.pause() 
    state.sound = 'music-off'   
    document.getElementById('fireplace').classList.remove('sound-on') 
    return
  }
    
  sounds.forest.pause() 
  sounds.rain.pause()
  sounds.coffeeShop.pause()
  sounds.fireplace.play()
  state.sound = 'fireplace'

  document.getElementById('forest').classList.remove('sound-on')
  document.getElementById('rain').classList.remove('sound-on')
  document.getElementById('coffeeShop').classList.remove('sound-on')
  document.getElementById('fireplace').classList.add('sound-on')
}

import React, { Component } from 'react'
import YouTube from 'react-youtube'
import './App.css'
class App extends Component {
  render () {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }

    return (
      <div className='App'>
        <h1 className='heading'>Awesome Demo</h1>
        <div >
          <YouTube
            className='player'
            videoId='EyvA65wimJs'
            opts={opts}
            onReady={this._onReady}

          />
        </div>
      </div>

    )
  }
  _onReady (event) {
    
  }
}

export default App

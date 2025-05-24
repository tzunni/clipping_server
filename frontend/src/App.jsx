import { useState } from 'react'
import { Icon } from "@iconify/react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="app">
        <div id="header">
          <div id="header-logo">
            <h1>Clips</h1>
          </div>
          <div id="header-menu">
            <button id="header-button-upload" className="button">
              <Icon icon="material-symbols:videocam-outline"></Icon>Upload
            </button>
            <button id="header-button-login" className="button">
              <Icon icon="material-symbols:person"></Icon>Sign In
            </button>
          </div>
        </div>
        <hr></hr>
        <div id="main-view">
          <div id="main-view-panel">
            <div id="panel-title">Keywords</div>
            <div id="panel-chips">
              <div>
                <span className="chip" id="user-chip">User: @Danny ✕</span>
              </div>
              <div>
                <span className="chip" id="game-chip">Game: Apex Legends ✕</span>
              </div>
              <div>
                <span className="chip" id="type-chip">Type: Frag ✕</span>
              </div>
              <div id="filter-list">
                <div id="filter">
                  <input type="text" id="filter-input" placeholder="Enter your filters" />
                  <button id="filter-button" className="button">+</button>
                </div>
              </div>


              <div id="panel-date-section">
                <div id="date-title">Date</div>
                <div id="panel-date-first">
                  <p>After:</p>
                  <input type="date" id="panel-date-start" />
                </div>
                <div id="panel-date-second">
                  <p>Before:</p>
                  <input type="date" id="panel-date-end" />
                </div>
              </div>
            </div>
          </div>
          <div id="main-view-content">
            <div id="main-view-content-header">
              <div id="main-view-content-header-search"></div>
              <div id="main-view-content-header-sort"></div>
            </div>
            <div id="main-view-content-body"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

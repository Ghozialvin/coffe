import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Coffee Shop Dashboard</h1>
      <h2>Kelompok 3 Business Intelligence </h2>
      <div style={{ width: '1030px', height: '773px', margin: '0 auto' }}>
        <iframe
          title="Coffee Shop Report"
          src="https://lookerstudio.google.com/embed/reporting/4fa0fdda-ae3d-46e1-b077-8e691e4c7c0a/page/JAhGF"
          frameBorder="0"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          style={{
            width: '100%',
            height: '100%',
            border: 0
          }}
        />
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'

import PPTEditor from './components/PPTEditor'
import PPTViewer from './components/PPTViewer'

function App() {
  const [data, setData] = useState({ boxes: [] })
  return (
    <div>
      <PPTEditor setData={setData} />
      <div style={{ marginBottom: '100px' }} />
      <PPTViewer data={data} />
    </div>
  )
}

export default App

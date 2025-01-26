import { useState,useCallback,useMemo, useRef } from 'react'
import './App.css'
import { io } from 'socket.io-client'
import VideoStream from './components/VideoStream'

function App() {
  const foucuss=useRef(null)
  const socket=useMemo(()=>{
    console.log("render.......>")
    return io('http://localhost:3000',
      {autoConnect: false}
    )
  },[])

  function focusInput() {
  foucuss.current.focus()
  }

  // const socket = io('http://localhost:3000',
  //   {autoConnect: false}
  // )
  // console.log("render.......>")
  const connectServer=useCallback(()=>{
    socket.connect()
    socket.emit('hello',"hello from client")
    socket.on("reply",(data)=>{
      console.log(data)
    })
  },[socket])
  
  const [rerender,setRerender] = useState(false)

  return (
    <>
    <VideoStream />
    {/* <p className=' text-red-400' >Hello</p>
    <input type="text" className=' bg-white text-black px-2' ref={foucuss} />
    <button onClick={focusInput}>Focus on text</button>

    <button onClick={connectServer} style={{
      display: 'block',
      margin: 'auto',
      marginTop: '50px',
      padding: '10px 20px',
      fontSize: '20px',
      cursor: 'pointer'
    }}>
      connect to server
    </button>
    <button onClick={()=>{
      setRerender(!rerender)
    }}>rerender</button> */}
    </>
  )
}

export default App

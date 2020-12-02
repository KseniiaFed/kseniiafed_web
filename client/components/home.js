import React, { useState, useEffect, useCallback } from 'react'
import { Link, Route } from 'react-router-dom'
// import { array } from 'prop-types'
import Head from './head'
import Contact from './contact'


// import wave from '../assets/images/wave.jpg'

const initialValue = new Array(10).fill(null).map((it, index) => `item ${index}`)
const ItemElement = (props) => {
  return <div>
    <Input key={props.it}/>
    {props.it} {+(new Date())}
  </div>
}

const Input = () => {
  const [val, setVal] = useState('empty')
  return <input value={val} onChange={(e) => setVal(e.target.value)}/>
}


const Home = (props) => {
  const [counter, setCounterNew] = useState(0)
  const [showText, changeShowText] = useState({
    toggled1: true,
    toggled2: false
  })
  const toggleSmth = () => {
    changeShowText({
      toggled1: !showText.toggled1,
      toggled2: !showText.toggled2
    })
  }
  const [array, setArray] = useState(initialValue.slice(0, 30))
  useEffect(() => {
      setTimeout(() => {
        if (initialValue.length !== array.length) {
        setArray(initialValue.slice(0, initialValue.length + 10))
        }
      }, 10)
  }, [initialValue])

  const zz = useCallback(() => {
    setArray(array.concat(`item ${array.length}`))
  }, [array])
  const zzThrottle = useCallback((func, timeout) => {
    let lastActionTime = +new Date() - timeout
    return () => {
      if (lastActionTime + timeout < +new Date()) {
        func()
        lastActionTime = +new Date()
      }
    }
  })


  const Elem = array.map((it, index) => (
    <ItemElement key={it} it={index} onChange={zz}/>
  ))
 
  useEffect(
    () => {
      // get data from server
      // add event
      const intervalId = setInterval(() => {
        setCounterNew(counter + 1)
      }, 1000)
      return () => {
        clearInterval(intervalId)
      } // ComponentWillUnmount
    }
    ,
    [counter]
  )
  if (props.isRequesting) {
    return 'Wait a sec, requesting...'
  }
  return (
    <div>
      <Head title="Hello" />
      <Route exact path="/alternativehome/contact" component={() => <Contact />} />
      <button 
        type="button"
        onClick={() => setCounterNew(counter + 1)}
      >
        Add
      </button>
      <br />
      <button
        type="button"
        onClick={toggleSmth}
      >
        Toggle me
      </button>
      <div>
        <h1> Hello World Dashboard {counter} </h1>
      </div>
      {
        showText.toggled1 && (
          <div><img alt="wave" src="images/wave.jpg" /></div>
        )
      }
      {
        showText.toggled2 && (
          <Link to="/">GO TO DUMMY VIEW </Link>
        )
      }
      <a href='http://google.com' target="_blank" rel="noopener noreferrer">Go to Google</a>
      <div style={{display: 'flex', flexDirection: 'flex-column'}}>
        <div className="m-2">
          <button type="button" onClick={zzThrottle(zz, 5000)}>BUTTON</button>
          {
            Elem
          }
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home

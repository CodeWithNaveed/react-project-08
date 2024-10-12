import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("...see more")

  let text = 'Humanity is the collective essence of all human beings, marked by our shared experiences, emotions, and capacity for growth, compassion, and creativity. It encompasses the ability to show empathy, kindness, and solidarity with others, as well as the pursuit of knowledge, justice, and the betterment of society. While diverse in cultures, languages, and perspectives, humanity is united by the innate drive to connect, learn, and shape a more equitable and peaceful world for future generations.'

  const [paragraph, setParagraph] = useState(text.slice(0, 261))

  
  const clickHandler = () => {

    if (title == "...see more") {
      setTitle("hide");
      setParagraph(text);
      return;
    }

    if (title == "hide") {
      setTitle("...see more");
      setParagraph(text.slice(0, 261));
      return;
    }
  }


  return (
    <>
      <Button title={title} paragraph={paragraph} clickHandler={clickHandler}/>
    </>
  )
}

export default App


const Button = ({title, paragraph, clickHandler}) => {
  return (
    <>
      <p style={{ display: 'inline' }}>{paragraph}</p>
      <span className='button' onClick={clickHandler}>
        {title}
      </span>
    </>
  )
}
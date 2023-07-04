import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import './App.less'

const App = () => {
  const [text, setText] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const handleChange = (e) => {
    const inputValue = e.target.value
    setText(inputValue)
  }
  const emoji = '🤸🏼‍♂️'

  const formatText = (text) => {
    return text.replace(/ /g, emoji)
  }

   const copyToClipBoard = text => {
    const tempInput = document.createElement('textarea');
  
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setIsCopied(!isCopied)
  };

  return (
    <>
      <div className='container'>
      <div className='title'>Beshify App Langging</div>
        <div className='body'>
          <textarea name="text" cols="40" rows="1" value={text} onChange={handleChange}/>
          <div className='copy-text' onClick={() => copyToClipBoard(formatText(text))}>
            <div className='label'>{!isCopied ? 'Copy' : 'Copied!'}</div>
            <FontAwesomeIcon icon={faCopy} />
          </div>
          <div>{formatText(text)}</div>
          
          
        </div>
      </div>
    </>
  )
}

export default App

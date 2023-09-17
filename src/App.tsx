import React, { useState, useEffect } from 'react'

import { Wrapper } from './styles/pages/Home'
import { encrypt, decrypt } from './util/cesar_algorithm'

import { FiCopy } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const App = () => {
  const [text, setText] = useState<string>('')
  const [encodedText, setEncodedText] = useState<string>('')
  const [options, setOptions] = useState<string>('encrypt')
  const [root, setRoot] = useState<number>(1)

  const handleChangeOption = (value: string): string => {
    return options === 'encrypt' ? encrypt(value, root) : decrypt(value, root)
  }

  const copyText = (): void => {
    navigator.clipboard.writeText(encodedText)
      .then(() => { alert('Texto Copiado') })
      .catch(() => { alert('Não foi possível copiar o texto') })
  }

  useEffect(() => {
    setEncodedText(handleChangeOption(text))
  }, [text])

  return (
    <Wrapper>
      <div className='contain'>
        <div className='contain__leftSide'>
          <div className='leftSide__topBar'>
            <select
              name="action"
              id="action"
              className='topBar__select'
              defaultValue='encrypt'
              onChange={(e) => { setOptions(e.target.value) }}
            >
              <option value='encrypt'>
                Encriptar
              </option>

              <option value='decrypt'>
                Desencriptar
              </option>
            </select>

            <input
              type="number"
              name="root"
              id="root"
              min={1}
              max={127}
              defaultValue={1}
              className='topBar__root'
              onChange={(e) => { setRoot(Number(e.target.value)) }}
            />
          </div>

          <textarea
            name='inputText'
            id='inputText'
            value={text}
            minLength={0}
            maxLength={500}
            placeholder='Digite o texto'
            className='leftSide__textarea'
            onChange={(e) => { setText(e.target.value) }}
          >
          </textarea>

          <div className='bottom'>
            <p className='bottom__textCount'>{text.length} / 500</p>

            {
              text.length === 0 ||
                <AiOutlineClose
                  title='Limpar'
                  className='bottom__icon'
                  onClick={() => { setText('') }}
                />
            }
          </div>
        </div>

        <div className='contain__rightSide'>
          <textarea
            name='outputText'
            id='outputText'
            value={text.length === 0 ? 'Texto Criptografado...' : encodedText}
            minLength={0}
            maxLength={500}
            className='rightSide__textarea'
            readOnly
            disabled
          >
          </textarea>

          {
            text.length === 0 ||
              <div className='bottom'>
                <FiCopy
                  title='Copiar texto'
                  className='bottom__icon'
                  onClick={() => { copyText() }}
                />
              </div>
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default App

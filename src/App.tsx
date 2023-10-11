import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { FiCopy } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { Wrapper } from './styles/pages/Home'
import { Cesar, Base64, Base32 } from './util'

import Logo from './../public/cryptography.png'

const App = () => {
  const [root, setRoot] = useState<number>(1)
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [options, setOptions] = useState<string>('encode')
  const [encodeType, setEncodeType] = useState<string>('Cesar')

  const cesar = new Cesar()
  const base64 = new Base64()
  const base32 = new Base32()

  const checkEncodeType = (value: string): string => {
    switch (encodeType) {
      case 'Cesar':
        return options === 'encode'
          ? cesar.encode(value, root)
          : cesar.decode(value, root)
      case 'Base64':
        return options === 'encode'
          ? base64.encode(value)
          : base64.decode(value)
      case 'Base32':
        return options === 'encode'
          ? base32.encode(value)
          : base32.decode(value)
      default:
        return 'Cifra não suportada.'
    }
  }

  const handleChangeAction = (value: string): void => {
    setOptions(value)

    const temp = input
    setInput(output)
    setOutput(temp)
  }

  const copyOutputText = (): void => {
    navigator.clipboard
      .writeText(output)
      .then(() => toast.success('Texto Copiado', {
        toastId: 'clipboardSuccessToast',
        theme: 'dark',
        autoClose: 4000,
      }))
      .catch(() => toast.warn('Não foi possível copiar o texto', {
        toastId: 'clipboardErrorToast',
        theme: 'dark',
        autoClose: 4000,
      }))
  }

  useEffect(() => {
    setOutput(checkEncodeType(input))
  }, [input, root, encodeType])

  return (
    <Wrapper>
      <img src={Logo} alt='Logo' className='logo' />

      <ul className='list'>
        <li
          className={
            encodeType === 'Cesar'
              ? 'list__item list__item--active'
              : 'list__item'
          }
        >
          <button
            type='button'
            className='item__btn'
            onClick={() => setEncodeType('Cesar')}
          >
            Cesar
          </button>
        </li>

        <li
          className={
            encodeType === 'Base32'
              ? 'list__item list__item--active'
              : 'list__item'
          }
        >
          <button
            type='button'
            className='item__btn'
            onClick={() => setEncodeType('Base32')}
          >
            Base32
          </button>
        </li>

        <li
          className={
            encodeType === 'Base64'
              ? 'list__item list__item--active'
              : 'list__item'
          }
        >
          <button
            type='button'
            className='item__btn'
            onClick={() => setEncodeType('Base64')}
          >
            Base64
          </button>
        </li>
      </ul>

      <div className='contain'>
        <div className='contain__leftSide'>
          <div className='leftSide__topBar'>
            <select
              name='action'
              id='action'
              className='topBar__select'
              defaultValue='encode'
              onChange={e => handleChangeAction(String(e.target.value))}
            >
              <option value='encode'>Encriptar</option>
              <option value='decode'>Desencriptar</option>
            </select>

            {encodeType === 'Cesar' ? (
              <input
                type='number'
                name='root'
                id='root'
                min={1}
                max={127}
                defaultValue={1}
                className='topBar__root'
                onChange={e => setRoot(Number(e.target.value))}
              />
            ) : (
              ''
            )}
          </div>

          <textarea
            name='inputText'
            id='inputText'
            value={input}
            minLength={0}
            maxLength={500}
            placeholder='Digite o texto'
            className='leftSide__textarea'
            onChange={e => setInput(e.target.value)}
          />

          <div className='bottom'>
            <p className='bottom__textCount'>{input.length} / 500</p>

            {input.length === 0 || (
              <AiOutlineClose
                title='Limpar'
                className='bottom__icon'
                onClick={() => setInput('')}
              />
            )}
          </div>
        </div>

        <div className='contain__rightSide'>
          <textarea
            name='outputText'
            id='outputText'
            value={input.length === 0 ? '...' : output}
            minLength={0}
            maxLength={500}
            className='rightSide__textarea'
            readOnly
            disabled
          />

          {input.length === 0 || (
            <div className='bottom'>
              <FiCopy
                title='Copiar texto'
                className='bottom__icon'
                onClick={() => copyOutputText()}
              />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default App

import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
import Result from './components/Result'

const App = () => {
    
  return (
    <>
      <Header />
      <div className='mainContainer'>
        <InputForm />
        <Result />
      </div>
    </>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import { Signin } from './components/Signin/Signin';
import { Signup } from './components/Signup/Signup';

function App() {

  const [view, setView] = useState<string>();

  return (
    <>
      <button onClick={() => setView('signin')}>Вход</button>
      <button onClick={() => setView('signup')}>Регистрация</button>
      {view == 'signin' && <Signin />}
      {view == 'signup' && <Signup />}
    </>
  )
}

export default App

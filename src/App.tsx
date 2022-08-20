import React, { useEffect } from 'react';
import './styles/app.scss'
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { initUser } from './redux/slice/ActionCreators';
import { Preloader } from './components/common/Preloader/Preloader';
import { ChatApp } from './components/ChatApp/ChatApp';

function App() {

  const isInit = useAppSelector(state => state.appRD.isInit)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initUser())
  }, [])

  if (!isInit) {
    return <Preloader />
  }

  return <div className='app'>
    <ChatApp />
  </div>
}

export default App;

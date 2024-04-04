import { ReactElement, Suspense } from 'react'
import './App.module.scss'
import { Header } from './Header/Header'

function App(): ReactElement {

  return (
    <>
      <Header />
    </>
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback='loading...'>
      <App />
    </Suspense>
  );
}

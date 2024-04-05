import { ReactElement, Suspense } from 'react'
import './App.module.scss'
import { Header } from './Header/Header'
import { useModal } from './ModalLanguageList/ModalContext';

function App(): ReactElement {

  const { onClose } = useModal();

  function closeModal(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (target.id !== 'changeLanguage') {
        onClose();
    }
  }

  return (
    <div onClick={(e) => closeModal(e)}>
      <Header />
    </div>
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback='loading...'>
      <App />
    </Suspense>
  );
}

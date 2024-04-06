import { ReactElement, Suspense } from 'react';
import styles from './App.module.scss';
import { Header } from './Header/Header';
import { useModal } from './ModalLanguageList/ModalContext';
import { Home } from './Home/Home';
import { About } from './About/About';

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
      <div className={styles.container}>
        <Home />
        <About />
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback='loading...'>
      <App />
    </Suspense>
  );
}

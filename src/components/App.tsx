import { ReactElement, Suspense } from 'react';
import styles from './App.module.scss';
import { Header } from './Header/Header';
import { useModal } from './ModalLanguageList/ModalContext';
import { Home } from './Home/Home';
import { About } from './About/About';
import { ProjectsList } from './Projects/ProjectsList';
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';

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
        <div  id='home'></div>
        <Home />
        <div  id='about'></div>
        <About />
        <div  id='projects'></div>
        <ProjectsList />
        <div  id='contacts'></div>
        <Contacts /> 
      </div>
      <Footer /> 
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

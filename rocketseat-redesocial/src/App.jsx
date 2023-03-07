import { Posts } from './components/Posts';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from '../src/components/App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Posts 
              author="Larissa Soares Reis"
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores dicta alias totam facilis? Laboriosam eum sint cumque eaque maiores aperiam doloribus, voluptates a ab molestiae voluptate quo ipsum vitae."
            />
          </main>
      </div>
    </div>
  );
}
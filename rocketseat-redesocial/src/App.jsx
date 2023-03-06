import { Posts } from './Posts';
import { Header } from './components/Header';
import './global.css';
import styles from '../src/components/App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          Sidebar
        </aside>
        <main>
            <Posts 
              name="Larissa Soares Reis"
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores dicta alias totam facilis? Laboriosam eum sint cumque eaque maiores aperiam doloribus, voluptates a ab molestiae voluptate quo ipsum vitae."
            />
          </main>
      </div>
    </div>
  );
}
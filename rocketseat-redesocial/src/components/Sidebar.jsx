import styles from './Sidebar.module.css';
import { PencilLine} from 'phosphor-react';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
            <div className={styles.profile}>
                <img 
                    src="https://github.com/srlarissa.png"
                />
                <strong>Larissa Soares Reis</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
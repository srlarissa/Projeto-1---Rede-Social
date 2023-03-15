import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css';

export function Comments({ content, onDeleteComment }) {
    function handleDeleteComment() {
        console.log('deletar');
        onDeleteComment(content);
    }
    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false} 
                src="https://github.com/srlarissa.png" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Larissa Soares Reis</strong>
                            <time 
                                title="07 de Março às 16h" 
                                dateTime='2023-03-07 16:00:00'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash 
                                size={24}
                            />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button title="Aplaudir">
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
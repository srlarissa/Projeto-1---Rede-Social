import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comments.module.css';

export function Comments({ content, onDeleteComment }) {

    const [ likeCount, setLikeCount ] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeCount() {
        setLikeCount(likeCount + 1);
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
                    <button onClick={handleLikeCount} title="Aplaudir">
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
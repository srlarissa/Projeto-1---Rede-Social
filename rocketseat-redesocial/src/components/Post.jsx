import { Avatar } from './Avatar';
import { Comments } from './Comments';
import styles from './Post.module.css';

export function Post({ name, role, content, publishedAt, avatarURL }) {
    return(
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar
                        src={avatarURL} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{name}</strong>
                        <span>{role}</span>
                    </div>
                </div>

              <time title={publishedAt}>
                Publicado há 1h
              </time>
    
            </header>

            <div className={styles.content}>
                <p>Falaaa Galera!</p>
                <p>Acabei de subir mais um projeto pro meu portifa. É um projeto que fiz no NLW Return, evento da doctorcare.</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{" "}
                    <a href="#">#nlw</a>{" "}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comments />
                <Comments />
                <Comments />
            </div>
        </article>
    )
    
}
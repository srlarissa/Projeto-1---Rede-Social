import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/srlarissa.png" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Larissa Soares Reis</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

              <time title="07 de Março às 16h" dateTime='2023-03-07 16:00:00'>
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
                <button type='submit'>Comentar</button>
            </form>
        </article>
    )
    
}
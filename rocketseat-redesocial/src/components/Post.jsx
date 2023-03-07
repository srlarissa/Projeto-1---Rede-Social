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

              <time dateTime='2023-03-07 16:00:00'>
                Publicado há 1h
              </time>
            </header>
        </article>
    )
    
}
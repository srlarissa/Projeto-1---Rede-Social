import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comments } from './Comments';
import styles from './Post.module.css';

const comments = [
    1,
    2,
    3
]


export function Post({ name, role, content, publishedAt, avatarURL }) {
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
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

              <time title={publishedAt} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
    
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph'){
                        return(
                            <p>{line.content}</p>
                        )
                    } else if (line.type == 'link'){
                        return(
                            <p><a href="#">{line.content}</a></p>
                        )
                    }
                })}
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
                {comments.map(comment => {
                    return(
                        <Comments />
                    );
                })}
            </div>
        </article>
    )
    
}
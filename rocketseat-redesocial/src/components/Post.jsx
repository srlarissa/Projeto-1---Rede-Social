import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comments } from './Comments';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ name, role, content, publishedAt, avatarURL }) {

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function onDeleteComment(commentToDelete) {
        const listWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        });
        setComments(listWithoutDeletedOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [ comments, setComments ] = useState([
       'Post muito bacana, hein?!'
    ]);

    const [ newCommentText, setNewCommentText ] = useState('');

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
                            <p key={line.content}>{line.content}</p>
                        )
                    } else if (line.type == 'link'){
                        return(
                            <p key={line.content}><a href="#">{line.content}</a></p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment' 
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return(
                        <Comments 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={onDeleteComment}
                        />
                    );
                })}
            </div>
        </article>
    )
    
}
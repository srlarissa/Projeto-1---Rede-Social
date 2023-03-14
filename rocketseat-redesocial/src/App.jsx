import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from '../src/components/App.module.css';

const posts = [
 {  id: 1,
    author: {
      avatarURL: 'https://github.com/srlarissa.png',
      name: 'Larissa Soares Reis',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Falaaa galera!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto para o meu portifa. É um projeto feito junto a rocketseat chamado doctorcare.'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-03-08 21:44:00')
  },
  {  id: 2,
    author: {
      avatarURL: 'https://github.com/diego78795.png',
      name: 'Diego Cruz Camargo',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Falaaa galera!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto para o meu portifa. É um projeto feito junto a rocketseat chamado doctorcare.'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-03-08 21:10:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            {posts.map(post => {
              return(
                <Post
                  key={post.id} 
                  name={post.author.name}
                  role={post.author.role}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  avatarURL={post.author.avatarURL}
                />
              )
            })}
          </main>
      </div>
    </div>
  );
}
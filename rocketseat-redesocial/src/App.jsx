import { Posts } from './Posts'
import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />
      <Posts 
        name="Larissa Soares Reis"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sunt officiis nulla laboriosam. Quae dolores, accusantium quaerat asperiores exercitationem nesciunt reprehenderit placeat ipsum itaque maxime enim ullam maiores recusandae assumenda?"
      />
    </div>
  )
}
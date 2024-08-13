import { Header } from "./components/Header";
import { Post } from "./Post";


import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post author="Teste" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium accusamus blanditiis fuga libero deserunt, sit enim sapiente dolore nisi optio incidunt repudiandae qui fugit eum exercitationem laborum aperiam architecto." />
    </div>
  )
}

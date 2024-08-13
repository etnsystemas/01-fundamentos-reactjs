import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";

import styles from './App.module.css';
import './global.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post author="Teste" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium accusamus blanditiis fuga libero deserunt, sit enim sapiente dolore nisi optio incidunt repudiandae qui fugit eum exercitationem laborum aperiam architecto." />
        </main>
      </div>
    </div>
  )
}

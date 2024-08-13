import {PencilLine} from 'phosphor-react';

import styles from './Sidebar.module.css';

import logoPerfil from '../assets/logo-perfil.jpg';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={logoPerfil}  />
      
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/etnsystemas.png" />
        <strong>Einstein Xavier</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
          </a>
      </footer>

    </aside>
  )
}
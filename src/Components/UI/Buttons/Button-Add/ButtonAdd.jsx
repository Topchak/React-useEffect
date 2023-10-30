import styles from './ButtonAdd.module.css'
function ButtonAdd({onClick, text}) {

  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default ButtonAdd
import styles from './styles.module.css'

const User = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.img_div}>
                <img className={styles.img} src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="" />
            </div>
            <div className={styles.info}>
                <span>Osman Topuz</span>
                <span className={styles.job}>Front-End Developer</span>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.contact}>
                <a className={styles.email} href="mailto: osmantopuz98@gmail.com">E-mail</a>
                <a href="tel:123-456-7890">123-456-7890</a>
            </div>
        </div>
    </div>
  )
}

export default User
import styles from './styles.module.css'
import { BiMailSend, BiPhone } from "react-icons/bi";

const str = `${styles.card} ${styles.active}`

const User = () => {
  return (
    <div className={styles.container}>
        <div className={str}>
            <div className={styles.img_div}>
                <img className={styles.img} src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="" />
            </div>
            <div className={styles.info}>
                <span>Osman Topuz</span>
                <span className={styles.job}>Front-End Developer</span>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.contact}>
                <a className={styles.email} href="mailto: osmantopuz98@gmail.com">
                    <span>E-mail</span>
                    <BiMailSend className={styles.mail_icon}/>
                </a>
                
                <a href="tel:123-456-7890">
                    <span>123-456-7890</span>
                    <BiPhone className={styles.phone_icon}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default User
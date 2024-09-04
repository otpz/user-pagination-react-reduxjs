import { UserType } from '../../types/UserType';
import styles from './styles.module.css'
import { BiMailSend, BiPhone } from "react-icons/bi";


interface Props {
    userData: UserType,
}

const User: React.FC<Props> = ({userData}) => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.img_div}>
                <img className={styles.img} src={userData.image} alt={`${userData.firstName} ${userData.lastName}`} />
            </div>
            <div className={styles.info}>
                <span>{userData.firstName} {userData.lastName}</span>
                <span className={styles.job}>{userData.company.title}</span>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.contact}>
                <a className={styles.email} href={`mailto: ${userData.email}`}>
                    <span>E-mail</span>
                    <BiMailSend className={styles.mail_icon}/>
                </a>
                
                <a href={`tel:${userData.phone}`}>
                    <span>{userData.phone}</span>
                    <BiPhone className={styles.phone_icon}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default User
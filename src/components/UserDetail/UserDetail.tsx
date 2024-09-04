import styles from './style.module.css'
import { BiMailSend, BiPhone } from "react-icons/bi";
import { BsFillPassportFill } from "react-icons/bs";

const UserDetail = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Employee's Resume</h2>
        <hr className={styles.hr}/>
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.user}>
                    <img className={styles.img} src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="Osman Topuz" />
                    <div className={styles.user_name}>
                        <span>Osman Topuz</span>
                        <span className={styles.user_profession}>Front-End Developer</span>
                    </div>
                </div>
                <div className={styles.general_info}>
                    <h3>Contact</h3>
                    <div className={styles.contact}>
                        <a className={styles.email} href="mailto: osmantopuz98@gmail.com">
                            <span>E-mail</span>
                            <BiMailSend className={styles.mail_icon}/>
                        </a>
                        <a href="https://www.osmantopuz.com">
                            <span>Personal Website</span>
                            <BsFillPassportFill className={styles.phone_icon}/>
                        </a>
                        <a href="tel:123-456-7890">
                            <span>123-456-7890</span>
                            <BiPhone className={styles.phone_icon}/>
                        </a>
                    </div>
                    <div className={styles.personal}>
                        <span>Age: 24</span>
                        <span>Gender: Male</span>
                    </div>
                    <address className={styles.address}>
                        <span>Turkey | Usak, Center 64200</span>
                        <span>Atatürk Mah. 1. Akgül Sok.</span>
                    </address>
                    <iframe className={styles.map} src="https://maps.google.com/maps?q='39.1667','35.6667'&hl=en&z=14&amp;output=embed" frameBorder="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <hr className={styles.hr_vertical}/>
            <div className={styles.right}>
                <h2>Last Experience</h2>
                <div className={styles.job_info}>
                    <div className={styles.job_title}>
                        <h4>Engineer Intern</h4>
                        <span>(5 months)</span>
                    </div>
                    <span className={styles.job_name}>Geobilgi IT <span className={styles.place}>Turkey Kocaeli, Gebze</span></span>
                    <span className={styles.job_department}>Department: Information Technology</span>
                </div> 

                <h2 style={{marginTop: "20px"}}>Education</h2>
                <div className={styles.job_info}>
                    <div className={styles.job_title}>
                        <h4>University of Wisconsin--Madison</h4>
                        <span>(4 year)</span>
                    </div>
                </div> 

                <h2 style={{marginTop: "10px"}}>Summary</h2>
                <div className={styles.job_info}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur perferendis nam voluptate pariatur ipsam debitis earum dolores perspiciatis sunt voluptatem! Magni harum eius quidem commodi praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iusto.</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default UserDetail
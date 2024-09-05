import styles from './style.module.css'
import { BiMailSend, BiPhone } from "react-icons/bi";
import { BsFillPassportFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';

const UserDetail = () => {

    const userId = useSelector((state: RootState) => state.userId.id)

    const {loading, error, singleData} = useFetch(`https://dummyjson.com/users/${userId}`)

    const randomNumber = (): number => {
        return Math.floor(Math.random() * 5)+1
    }

    if (loading){
        return (
            <div className={styles.container}>
                <div className={styles.loading_div}>
                    <div className={styles.loader}></div>
                </div>
            </div>
        )
    }

    if (error){
        return (
            <div className={styles.container}>
            <div className={styles.error}>Error.</div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Employee's Resume</h2>
            <hr className={styles.hr}/>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.user}>
                        <img className={styles.img} src={singleData?.image} alt={`${singleData?.firstName} ${singleData?.lastName}`} />
                        <div className={styles.user_name}>
                            <span>{singleData?.firstName} {singleData?.lastName}</span>
                            <span className={styles.user_profession}>{singleData?.company.title}</span>
                        </div>
                    </div>
                    <div className={styles.general_info}>
                        <h3>Contact</h3>
                        <div className={styles.contact}>
                            <a className={styles.email} href={`mailto: ${singleData?.email}`}>
                                <span>E-mail</span>
                                <BiMailSend className={styles.mail_icon}/>
                            </a>
                            <a href={singleData?.email}>
                                <span>Personal Website</span>
                                <BsFillPassportFill className={styles.phone_icon}/>
                            </a>
                            <a href={`tel:${singleData?.phone}`}>
                                <span>{singleData?.phone}</span>
                                <BiPhone className={styles.phone_icon}/>
                            </a>
                        </div>
                        <div className={styles.personal}>
                            <span>Age: {singleData?.age}</span>
                            <span>Gender: {singleData?.gender}</span>
                        </div>
                        <address className={styles.address}>
                            <span>{singleData?.address.country} | {singleData?.address.state}, {singleData?.address.city} {singleData?.address.stateCode}</span>
                            <span>{singleData?.address.address}</span>
                        </address>
                        <iframe className={styles.map} src="https://maps.google.com/maps?q='38.960213','-95.277390'&hl=en&z=14&amp;output=embed" frameBorder="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <hr className={styles.hr_vertical}/>
                <div className={styles.right}>
                    <h2>Last Experience</h2>
                    <div className={styles.job_info}>
                        <div className={styles.job_title}>
                            <h4>{singleData?.company.title}</h4>
                            <span>{`(${randomNumber()} year)`}</span>
                        </div>
                        <span className={styles.job_name}>{singleData?.company.name} <span className={styles.place}>{singleData?.company.address.country} {singleData?.company.address.state}, {singleData?.company.address.city}</span></span>
                        <span className={styles.job_department}>Department: {singleData?.company.department}</span>
                    </div> 

                    <h2 style={{marginTop: "20px"}}>Education</h2>
                    <div className={styles.job_info}>
                        <div className={styles.job_title}>
                            <h4>{singleData?.university}</h4>
                            <span>(4 year)</span>
                        </div>
                    </div> 
                    
                    <h2 style={{marginTop: "10px"}}>Summary</h2>
                    <div className={styles.job_info}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sapiente est quos nihil quo, tempora saepe eius error amet doloremque natus dolor. Dolor, reprehenderit voluptatum. Nemo, eligendi? Esse tempora magnam culpa, dolorum eligendi quod ea recusandae non dicta delectus perferendis dignissimos! Iusto aliquam nisi quae doloremque delectus voluptate, nesciunt dolor omnis exercitationem et officiis. Facere explicabo dicta mollitia eaque incidunt.</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default UserDetail
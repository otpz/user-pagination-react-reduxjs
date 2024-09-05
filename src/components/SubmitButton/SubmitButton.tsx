import { useState } from 'react'
import styles from './style.module.css'
import Confetti from 'react-confetti'
import { useWindowSize } from '@uidotdev/usehooks'
import toast from 'react-hot-toast'

const SubmitButton = () => {

    const { width, height } = useWindowSize()

    const [toggleConfetti, setToggleConfetti] = useState<boolean>(false)
    
    const handleHire = () => {
        setToggleConfetti(true)
    }

    return (
        <div className={styles.container}>
            <button onClick={handleHire} className={styles.button}>
                {toggleConfetti ? <div className={styles.loader}></div> : "Hire Employee"}
            </button>
            
            {
                toggleConfetti && 
                <Confetti
                    numberOfPieces={500}
                    width={width!!}
                    height={height!!}
                    recycle={false}       
                    onConfettiComplete={() => {
                        setToggleConfetti(false)
                        toast.success("Good Job. Successfully Hired! 🎉")
                    }}
                />
            }
        </div>
    )
}

export default SubmitButton
import { useState } from 'react'
import styles from './style.module.css'
import Confetti from 'react-confetti'
import { useWindowSize } from '@uidotdev/usehooks'

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
                    numberOfPieces={1000}
                    width={width!!}
                    height={height!!}
                    recycle={false}       
                    onConfettiComplete={() => setToggleConfetti(false)}
                />
            }
        </div>
    )
}

export default SubmitButton
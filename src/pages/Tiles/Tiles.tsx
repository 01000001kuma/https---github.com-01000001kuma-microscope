import styles from '/home/akuma/Documents/NhsqbS8dJAy7EjAy24ox/src/ui/GameMode/Gamemode.module.css'
import mask from '/home/akuma/Documents/NhsqbS8dJAy7EjAy24ox/src/ui/Home/mask.svg'
import full from '/home/akuma/Documents/NhsqbS8dJAy7EjAy24ox/src/ui/Home/full.svg'
import face from '/home/akuma/Documents/NhsqbS8dJAy7EjAy24ox/src/Images/icon/face_black_24dp.svg'
import robot from '/home/akuma/Documents/NhsqbS8dJAy7EjAy24ox/src/Images/icon/smart_toy_black_24dp.svg'
import { Link } from 'react-router-dom'

// Game mode screen

export function Gamemode() {

    return (
        
        <div className={styles.home}> 
        
            
                <div className={styles.panel}>
                    
                    <div className={styles.all}>
                        
                        <img width={80} src={mask} className={styles.mask} alt="board"/>
                   
                        <img width={80} src={full} className={styles.full} alt="game logo"/>
                        
                    </div>
                    
                    <div className={styles.mode}>
                        <Link style={{ textDecoration: 'none' }} to="/onevsone">
                            
                            <button  className={styles.start} type="button" >
                                
                                <img src={face} className={styles.face} alt="face icon"/>   
                                <span className={styles.text}>Vs</span>
                                <img src={face} className={styles.face} alt="face icon"/>                           

                            </button>

                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/ai">
                            
                            <button  className={styles.start} type="button" >
                                
                                <img src={face} className={styles.face} alt="face icon"/>
                                <span className={styles.text}>Vs</span>
                                <img src={robot} className={styles.robot} alt="robot icon"/>                          

                            </button>
                            
                        </Link>
                    </div>

                </div>

        </div>
            

        
    )


}

export default Gamemode

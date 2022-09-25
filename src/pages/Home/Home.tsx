import styles from './Home.module.css'
import mask from '/home/akuma/Documents/NhsqbS8dJAy7EjAy24ox/src/ui/Home/mask.svg'
import full from '/home/akuma/Documents/NhsqbS8dJAy7EjAy24ox/src/ui/Home/full.svg'
import play from '/home/akuma/Documents/NhsqbS8dJAy7EjAy24ox/src/Images/icon/play_circle_black_24dp.svg'
import { Link } from 'react-router-dom'

// Home screen

export function Home() {

    return (
        
        <div className={styles.home}> 
        
            
                <div className={styles.panel}>
                    
                    
                    <div className={styles.all}>
                        
                        <img width={80} src={mask} className={styles.mask} alt="board"/>
                   
                        <img width={80} src={full} className={styles.full} alt="game logo"/>
                        
                    </div>
                    
                    <div>
                        <Link style={{ textDecoration: 'none' }} to="/gamemode">
                            <button  className={styles.start} type="button" >
                                <span className={styles.text}>Start</span>
                                <img src={play} className={styles.icon} alt="play icon"/>  
                            </button>
                        </Link>
                    </div>

                </div>
            

        </div>
    )


}



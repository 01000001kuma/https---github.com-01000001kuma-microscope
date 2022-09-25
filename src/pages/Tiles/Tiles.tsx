import styles from './Tiles.module.css'
import { Link } from 'react-router-dom'

// Game mode screen

export function Tiles() {

    return (
        
        <div className={styles.home}> 
        
            
                <div className={styles.panel}>
                    
                    <div className={styles.all}>
                        
                        
                    </div>
                    
                    <div className={styles.mode}>
                        <Link style={{ textDecoration: 'none' }} to="/onevsone">
                            
                            <button  className={styles.start} type="button" >
                                
                      

                            </button>

                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/ai">
                            
                            <button  className={styles.start} type="button" >
                                
                      

                            </button>
                            
                        </Link>
                    </div>

                </div>

        </div>
            

        
    )


}

export default Tiles

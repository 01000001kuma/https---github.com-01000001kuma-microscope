import Navbar from '../../components/Navbar'
import styles from './Home.module.css'
import TileBox from '../../components/TileBox';


// Home screen

export function Home() {

    return (
        
        <>
        <Navbar />
        <TileBox tile={undefined} />
        </>
    );


}


export default Home
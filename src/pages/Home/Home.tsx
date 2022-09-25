import Navbar from '../../components/Navbar'
import Controller from '../../components/Controller';
import './Home.module.css'
import TileBox from '../../components/TileBox';


// Home screen

export function Home() {

    return (
        
        <>
        <Navbar />
        <Controller />
        <TileBox tile={undefined} />
        </>
    );


}


export default Home
import Navbar from '../../components/Navbar'
// import Controller from '../../components/Controller';
import './Home.module.css'
// import TileBox from '../../components/TileBox';
import DrawingCanvas from "../../components/DrawingCanvas";


// Home screen

export function Home() {

    return (
        
        <>
        <Navbar />
        <DrawingCanvas />
        {/* <Controller />
        <TileBox tile={undefined} /> */}
        </>
    );


}


export default Home
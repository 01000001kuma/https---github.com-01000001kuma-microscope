import {useState, useEffect} from "react";
import "../components/TileBox.css";

interface Product {
    
    _id: string;
    _fileName: string;
}


function TileBox(props: any) {
        const [post, setPosts] = useState<Product[]>([]);    
    const fetchPost = async () => {
            
            const response = await fetch ("https://imgmgt.api.preci.cloud/api/SlideImages")
            
            const data =await response.json();
            setPosts(data);

            // console.log(data);
            
            if(!response.ok){
            const msg = `An error has occured: ${response.status}`;
            throw new Error(msg);
         }
            console.log(data);
        };
        useEffect(() => {
            fetchPost();
        }, []);

       
    
    
    return(

        <div className="row">
            <div className="col-md-12 text-center">
                <h1>Fetch data</h1>
                <button onClick={fetchPost} className="btn btn-primary" >show data</button>

            </div>
            {Object.values(post).map(pro  => {
                return (
                    console.log(pro),
                    <div className="grid">
                        <img key ={pro._id} src={pro._id} className="tiles" alt="tiles"/>
                        <p key={pro._fileName} className="snipped" >{pro._fileName}</p>
                    </div>
                )
            })}



        </div>
            

    )


























    //     const [post, SetPost] = useState<Product[]>([]);
//     const fetchPost = async () => {
//     const res = await fetch(`https://imgmgt.api.preci.cloud/api/SlideImages`);
//     const data = await res.json();
//     SetPost(data)

//     if(!res.ok){
//         const msg = `An error has occured: ${res.status}`;
//         throw new Error(msg);
//     }

//     };

//     useEffect(() => {
//         fetchPost();
//     }, []);

//     console.log(post);
  
//     return (
//     <div className="row">
//         <div className="col-md-12 text-center">
//         </div>

//         {post.map(pro =>{
//             return(
//                 <div className="col-md-3 text-center">
//                     <img className="w-512" src={pro._id} alt="tileImage" />
//                     <p>{pro._fileName}</p>
//                     {/* <button onClick={}>View Sample</button> */}
//                 </div>
//             )
//         })}
        
//     </div>
//   );
 }

export default TileBox;

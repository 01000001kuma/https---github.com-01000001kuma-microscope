import React, {useState, useEffect} from "react";

interface Product {
    _id: string;
    _fileName: string;
}

function TileBox(props: any) {
    const [post, SetPost] = useState<Product[]>([]);
    const fetchPost = async () => {
    const res = await fetch(`https://imgmgt.api.preci.cloud/api/SlideImages`);
    const data = await res.json();
    SetPost(data)

    if(!res.ok){
        const msg = `An error has occured: ${res.status}`;
        throw new Error(msg);
    }

    };

    useEffect(() => {
        fetchPost();
    }, []);
  
    return (
    <div className="row">
        <div className="col-md-12 text-center">
        </div>

        {post.map(pro=>{
            return(
                <div className="col-md-3 text-center">
                    <img className="w-512" src={pro.id} alt="tileImage" />
                    <p>{pro.fileName}</p>
                </div>
            )
        })}
        
    </div>
  );
}

export default TileBox;

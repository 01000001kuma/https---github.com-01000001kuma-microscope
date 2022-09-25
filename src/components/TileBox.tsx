import { Card, Col } from 'antd';

function TileBox({ tile }) {
  const fetchPost = async () => {
    const res = await fetch(`http://localhost:3000/api/tiles/${tile.id}`);
    const data = await res.json();
    console.log(data);
  }
  
    return (
    <li>
      <ul>
        <img src={tile.id} style={{ width: 512, height: 512, margin: 10 }} alt="pics" />
        <p>{tile.fileName}</p>  
      </ul>
    </li>
  );
}

export default TileBox;

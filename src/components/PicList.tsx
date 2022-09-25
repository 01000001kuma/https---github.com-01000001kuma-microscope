// import tilesJSON from '../tiles.json';
// import { useState } from 'react';
// import TileBox from './TileBox';
// import { Tiles } from '../pages/Tiles';

// function PicList() {
//   const [tile, setTile] = useState(tilesJSON); // Array that we render/show as a list

//   const fetchPost = async () => {
//     const res = await fetch(`https://imgmgt.api.preci.cloud/api/SlideImages{tile.id}`);
//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <div className="list">

//       {fetchPost.map((oneTile: any) => (
//         <TileBox tile={oneTile} />
//       ))}

//     </div>
//   );
// }

// export default PicList;

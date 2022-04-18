import { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.scss";



const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        axios.get("http://localhost:4000/gallery")
            .then(response => {
                console.log(response.data);
                setGallery(response.data)
                setLoading(false)
            })
    }, []);

    return loading ? <p>loading</p> : ( 
        <div className="galleryBox">
            <div  className="galleryWrapper1">
                <img src={gallery[0].asset.url} alt="" />
                <img src={gallery[1].asset.url} alt="" />
                <img src={gallery[2].asset.url} alt="" />
                <img src={gallery[3].asset.url} alt="" />
            </div>
            <div className="galleryWrapper2">
                <img src={gallery[4].asset.url} alt="" />
                <img src={gallery[5].asset.url} alt="" />
                <img src={gallery[6].asset.url} alt="" />
            </div>
            {/* {gallery.map((image) => {
                return <img src={image.asset.url} alt="" />
            })} */}
        </div>
     );
}
 
export default Gallery;
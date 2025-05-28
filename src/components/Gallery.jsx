
import React, {useState} from "react";
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from "../../public/com/pic_ (28).jpg";
import Img2 from "../../public/com/pic_ (11).jpg";
import Img3 from "../../public/com/img_2.jpg";
import Img4 from "../../public/com/pic_ (30).jpg";
import Img5 from "../../public/com/pic_ (32).jpg";
import Img6 from "../../public/com/pic_ (86).jpg";
import Img7 from "../../public/com/pic_ (87).jpg";
import Img8 from "../../public/com/pic- (1).jpg";
import Img9 from "../../public/com/pic- (2).jpg";
import Img10 from "../../public/com/pic- (3).jpg";
import Img11 from "../../public/com/pic- (6).jpg";


import NavGall from "./NavGall";
import Footer from "./Footer";

function Gallery() {
    const cardItem = [
            {
                id:1,
                logo: Img1,
            },
            {
                id:1,
                logo: Img2,
            },
            {
                id:1,
                logo: Img3,
            },
            {
                id:1,
                logo: Img4,
            },
            {
                id:1,
                logo: Img5,
            },
            {
                id:1,
                logo: Img6,
            },
            {
                id:1,
                logo: Img7,
            },
            {
              id:1,
              logo: Img8,
            },
            {
              id:1,
              logo: Img9,
            },
            {
              id:1,
              logo: Img10,
            },
            {
              id:1,
              logo: Img11,
            }
         ];
         const [model,setModel] = useState(false);
         const [templogo, setTemplogo] = useState('');
    
         const getImg = (logo) =>{
            setTemplogo(logo);
            setModel(true);
         }
       return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={templogo} />
            <CloseIcon onClick={() => setModel(false)} />
        </div>
        <div class="Gallery" className="max-w-screen-2xl container mx-auto px-0 md:px-6 my-20">
          <h1 className="name text-pink-500">ALL PHOTOS</h1>
          <br />
        <div className="gallery">
              {cardItem.map(({ id, logo}) => (
                <div className="pics"
                  key={id} onClick={() => getImg(logo)}
                >
                  <img 
                    src={logo} style={{width: '100'}}
                    alt=""
                  />
                </div>
                ))}
            </div>
        </div>
        <NavGall />
        <Footer />
        </>
       );
    }

    export default Gallery;



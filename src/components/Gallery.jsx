
import React, {useState} from "react";
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from "../../public/Com/pic_ (1).jpg";
import Img2 from "../../public/Com/pic_ (2).png";
import Img3 from "../../public/Com/pic_ (3).png";
import Img4 from "../../public/Com/pic_ (4).png";
import Img5 from "../../public/Com/pic_ (5).png";
import Img6 from "../../public/Com/pic_ (6).jpg";
import Img7 from "../../public/Com/pic_ (7).jpg";
import Img8 from "../../public/Com/pic_ (8).jpg";
import Img9 from "../../public/Com/pic_ (9).jpg";
import Img10 from "../../public/Com/pic_ (10).jpg";
import Img11 from "../../public/Com/pic_ (11).jpg";
import Img12 from "../../public/Com/pic_ (12).jpg";
import Img13 from "../../public/Com/pic_ (13).jpg";
import Img14 from "../../public/Com/pic_ (14).jpg";
import Img15 from "../../public/Com/pic_ (15).jpg";
import Img16 from "../../public/Com/pic_ (16).jpg";
import Img17 from "../../public/Com/pic_ (17).jpg";
import Img18 from "../../public/Com/pic_ (18).jpg";
import Img19 from "../../public/Com/pic_ (19).jpg";
import Img20 from "../../public/Com/pic_ (20).jpg";
import Img21 from "../../public/Com/pic_ (21).jpg";
import Img22 from "../../public/Com/pic_ (22).jpg";
import Img23 from "../../public/Com/pic_ (23).jpg";
import Img24 from "../../public/Com/pic_ (24).jpg";
import Img25 from "../../public/Com/pic_ (25).jpg";
import Img26 from "../../public/Com/pic_ (26).jpg";
import Img27 from "../../public/Com/pic_ (27).jpg";
import Img28 from "../../public/Com/pic_ (28).jpg";
import Img29 from "../../public/Com/pic_ (29).jpg";
import Img30 from "../../public/Com/pic_ (30).jpg";
import Img31 from "../../public/Com/pic_ (31).jpg";
import Img32 from "../../public/Com/pic_ (32).jpg";
import Img33 from "../../public/Com/pic_ (33).jpg";
import Img34 from "../../public/Com/pic_ (34).jpg";
import Img35 from "../../public/Com/pic_ (35).jpg";
import Img36 from "../../public/Com/pic_ (108).jpg";
import Img37 from "../../public/Com/pic_ (109).jpg";
import Img38 from "../../public/Com/pic_ (110).jpg";
import Img39 from "../../public/Com/pic_ (111).jpg";
import Img40 from "../../public/Com/pic_ (112).jpg";
import Img41 from "../../public/Com/pic_ (113).jpg";
import Img42 from "../../public/Com/pic_ (114).jpg";
import Img43 from "../../public/Com/pic_ (115).jpg";
import Img44 from "../../public/Com/pic_ (116).jpg";
import Img45 from "../../public/Com/pic_ (117).jpg";
import Img46 from "../../public/Com/pic_ (118).jpg";
import Img47 from "../../public/Com/pic_ (119).jpg";
import Img48 from "../../public/Com/pic_ (120).jpg";
import Img49 from "../../public/Com/pic_ (121).jpg";
import Img50 from "../../public/Com/pic_ (122).jpg";
import Img51 from "../../public/Com/pic_ (123).jpg";
import Img52 from "../../public/Com/pic_ (124).jpg";
import Img53 from "../../public/Com/pic_ (125).jpg";
import Img54 from "../../public/Com/pic_ (126).jpg";
import Img55 from "../../public/Com/pic_ (127).jpg";
import Img56 from "../../public/Com/pic_ (36).jpg";
import Img57 from "../../public/Com/pic_ (40).jpg";
import Img58 from "../../public/Com/pic_ (41).jpg";
import Img59 from "../../public/Com/pic_ (42).jpg";
import Img60 from "../../public/Com/pic_ (43).jpg";
import Img61 from "../../public/Com/pic_ (44).jpg";
import Img62 from "../../public/Com/pic_ (45).jpg";
import Img63 from "../../public/Com/pic_ (46).jpg";
import Img64 from "../../public/Com/pic_ (47).jpg";
import Img65 from "../../public/Com/pic_ (48).jpg";
import Img66 from "../../public/Com/pic_ (49).jpg";
import Img67 from "../../public/Com/pic_ (50).jpg";
import Img68 from "../../public/Com/pic_ (51).jpg";
import Img69 from "../../public/Com/pic_ (71).jpg";
import Img70 from "../../public/Com/pic_ (72).jpg";
import Img71 from "../../public/Com/pic_ (73).jpg";
import Img72 from "../../public/Com/pic_ (74).jpg";
import Img73 from "../../public/Com/pic_ (75).jpg";
import Img74 from "../../public/Com/pic_ (76).jpg";
import Img75 from "../../public/Com/pic_ (77).jpg";
import Img76 from "../../public/Com/pic_ (78).jpg";
import Img77 from "../../public/Com/pic_ (79).jpg";
import Img78 from "../../public/Com/pic_ (80).jpg";
import Img79 from "../../public/Com/pic_ (81).jpg";
import Img80 from "../../public/Com/pic_ (82).jpg";
import Img81 from "../../public/Com/pic_ (83).jpg";
import Img82 from "../../public/Com/pic_ (84).jpg";
import Img83 from "../../public/Com/pic_1.png";
import Img84 from "../../public/Com/pic_2.jpg";
import Img85 from "../../public/Com/pic_3.jpg";
import Img86 from "../../public/Com/pic_4.jpg";
import Img87 from "../../public/Com/pic_5.jpg";
import Img88 from "../../public/Com/pic_ (85).jpg";
import Img89 from "../../public/Com/pic_ (86).jpg";
import Img90 from "../../public/Com/pic_ (87).jpg";
import Img91 from "../../public/Com/pic_ (88).jpg";
import Img92 from "../../public/Com/pic_ (89).jpg";
import Img93 from "../../public/Com/pic_ (90).jpg";
import Img94 from "../../public/Com/pic_ (91).jpg";
import Img95 from "../../public/Com/pic_ (92).jpg";
import Img96 from "../../public/Com/pic_ (93).jpg";
import Img97 from "../../public/Com/pic_ (94).jpg";
import Img98 from "../../public/Com/pic_ (95).jpg";
import Img99 from "../../public/Com/pic_ (96).jpg";
import Img100 from "../../public/Com/pic_ (97).jpg";
import Img101 from "../../public/Com/pic_ (98).jpg";
import Img102 from "../../public/Com/pic_ (99).jpg";
import Img103 from "../../public/Com/pic_ (100).jpg";
import Img104 from "../../public/Com/pic_ (101).jpg";
import Img105 from "../../public/Com/pic_ (102).jpg";
import Img106 from "../../public/Com/pic_ (103).jpg";
import Img107 from "../../public/Com/pic_ (104).jpg";
import Img108 from "../../public/Com/pic_ (105).jpg";
import Img109 from "../../public/Com/pic_ (106).jpg";
import Img110 from "../../public/Com/pic_ (52).jpg";
import Img111 from "../../public/Com/pic_ (53).jpg";
import Img112 from "../../public/Com/pic_ (54).jpg";
import Img113 from "../../public/Com/pic_ (55).jpg";
import Img114 from "../../public/Com/pic_ (56).jpg";
import Img115 from "../../public/Com/pic_ (57).jpg";
import Img116 from "../../public/Com/pic_ (58).jpg";
import Img117 from "../../public/Com/pic_ (59).jpg";
import Img118 from "../../public/Com/pic_ (60).jpg";
import Img119 from "../../public/Com/pic_ (61).jpg";
import Img120 from "../../public/Com/pic_ (62).jpg";
import Img121 from "../../public/Com/pic_ (63).jpg";
import Img122 from "../../public/Com/pic_ (64).jpg";
import Img123 from "../../public/Com/pic_ (65).jpg";
import Img124 from "../../public/Com/pic_ (66).jpg";
import Img125 from "../../public/Com/pic_ (67).jpg";
import Img126 from "../../public/Com/pic_ (68).jpg";
import Img127 from "../../public/Com/pic_ (69).jpg";
import Img128 from "../../public/Com/pic_ (70).jpg";
import Img129 from "../../public/Com/pic_ (128).jpg";
import Img130 from "../../public/Com/pic_ (129).jpg";
import Img131 from "../../public/Com/pic_ (130).jpg";
import Img132 from "../../public/Com/pic_ (131).jpg";
import Img133 from "../../public/Com/pic (1).jpg";
import Img134 from "../../public/Com/pic (2).jpg";
import Img135 from "../../public/Com/pic (4).jpg";
import Img136 from "../../public/Com/pic (5).jpg";
import Img137 from "../../public/Com/pic (6).jpg";
import Img138 from "../../public/Com/pic- (1).jpg";
import Img139 from "../../public/Com/pic- (2).jpg";
import Img140 from "../../public/Com/pic- (3).jpg";
import Img141 from "../../public/Com/pic- (4).jpg";
import Img142 from "../../public/Com/pic- (5).jpg";
import Img143 from "../../public/Com/pic- (6).jpg";
import Img144 from "../../public/Com/pic- (7).jpg";


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
            },
            {
              id:1,
              logo: Img12,
            },
            {
              id:1,
              logo: Img13,
            },
            {
              id:1,
              logo: Img14,
            },
            {
              id:1,
              logo: Img15,
            },
            {
              id:1,
              logo: Img16,
            },
            {
              id:1,
              logo: Img17,
            },
            {
              id:1,
              logo: Img18,
            },
            {
              id:1,
              logo: Img19,
            },
            {
              id:1,
              logo: Img36,
            },
            {
              id:1,
              logo: Img37,
            },
            {
              id:1,
              logo: Img39,
            },
            {
              id:1,
              logo: Img38,
            },
            {
              id:1,
              logo: Img40,
            },
            {
              id:1,
              logo: Img41,
            },
            {
              id:1,
              logo: Img42,
            },
            {
              id:1,
              logo: Img43,
            },
            {
              id:1,
              logo: Img44,
            },
            {
              id:1,
              logo: Img45,
            },
            {
              id:1,
              logo: Img20,
            },
            {
              id:1,
              logo: Img21,
            },
            {
              id:1,
              logo: Img22,
            },
            {
              id:1,
              logo: Img23,
            },
            {
              id:1,
              logo: Img24,
            },
            {
              id:1,
              logo: Img46,
            },
            {
              id:1,
              logo: Img47,
            },
            {
              id:1,
              logo: Img48,
            },
            {
              id:1,
              logo: Img49,
            },
            {
              id:1,
              logo: Img25,
            },
            {
              id:1,
              logo: Img26,
            },
            {
              id:1,
              logo: Img27,
            },
            {
              id:1,
              logo: Img28,
            },
            {
              id:1,
              logo: Img29,
            },
            {
              id:1,
              logo: Img67,
            },
            {
              id:1,
              logo: Img68,
            },
            {
              id:1,
              logo: Img30,
            },
            {
              id:1,
              logo: Img61,
            },
            {
              id:1,
              logo: Img62,
            },
            {
              id:1,
              logo: Img63,
            },
            {
              id:1,
              logo: Img64,
            },
            {
              id:1,
              logo: Img31,
            },
            {
              id:1,
              logo: Img65,
            },
            {
              id:1,
              logo: Img66,
            },
            {
              id:1,
              logo: Img50,
            },
            {
              id:1,
              logo: Img51,
            },
            {
              id:1,
              logo: Img52,
            },
            {
              id:1,
              logo: Img53,
            },
            {
              id:1,
              logo: Img54,
            },
            {
              id:1,
              logo: Img55,
            },
            {
              id:1,
              logo: Img32,
            },
            {
              id:1,
              logo: Img33,
            },
            {
              id:1,
              logo: Img56,
            },
            {
              id:1,
              logo: Img57,
            },
            {
              id:1,
              logo: Img58,
            },
            {
              id:1,
              logo: Img59,
            },
            {
              id:1,
              logo: Img60,
            },
            {
              id:1,
              logo: Img34,
            },
            {
              id:1,
              logo: Img35,
            },
            {
              id:1,
              logo: Img69,
            },
            {
              id:1,
              logo: Img70,
            },
            {
              id:1,
              logo: Img71,
            },
            {
                id:1,
                logo: Img72,
            },
            {
              id:1,
              logo: Img73,
            },
            {
              id:1,
              logo: Img74,
            },
            {
              id:1,
              logo: Img75,
            },
            {
              id:1,
              logo: Img76,
            },
            {
              id:1,
              logo: Img77,
            },
            {
              id:1,
              logo: Img78,
            },
            {
              id:1,
              logo: Img79,
            },
            {
              id:1,
              logo: Img80,
            },
            {
              id:1,
              logo: Img81,
            },
            {
              id:1,
              logo: Img82,
            },
            {
              id:1,
              logo: Img83,
            },
            {
              id:1,
              logo: Img84,
            },
            {
              id:1,
              logo: Img85,
            },
            {
              id:1,
              logo: Img86,
            },
            {
              id:1,
              logo: Img87,
            },
            {
              id:1,
              logo: Img88,
            },
            {
              id:1,
              logo: Img89,
            },
            {
              id:1,
              logo: Img90,
            },
            {
              id:1,
              logo: Img91,
            },
            {
              id:1,
              logo: Img92,
            },
            {
              id:1,
              logo: Img93,
            },
            {
              id:1,
              logo: Img94,
            },
            {
              id:1,
              logo: Img95,
            },
            {
              id:1,
              logo: Img96,
            },
            {
              id:1,
              logo: Img97,
            },
            {
              id:1,
              logo: Img98,
            },
            {
              id:1,
              logo: Img99,
            },
            {
              id:1,
              logo: Img100,
            },
            {
              id:1,
              logo: Img101,
            },
            {
              id:1,
              logo: Img102,
            },
            {
              id:1,
              logo: Img103,
            },
            {
              id:1,
              logo: Img104,
            },
            {
              id:1,
              logo: Img105,
            },
            {
              id:1,
              logo: Img106,
            },
            {
              id:1,
              logo: Img107,
            },
            {
              id:1,
              logo: Img108,
            },
            {
              id:1,
              logo: Img109,
            },
            {
              id:1,
              logo: Img110,
            },
            {
              id:1,
              logo: Img111,
            },
            {
              id:1,
              logo: Img112,
            },
            {
              id:1,
              logo: Img113,
            },
            {
              id:1,
              logo: Img114,
            },
            {
              id:1,
              logo: Img115,
            },
            {
              id:1,
              logo: Img116,
            },
            {
              id:1,
              logo: Img117,
            },
            {
              id:1,
              logo: Img144,
            },
            {
              id:1,
              logo: Img118,
            },
            {
              id:1,
              logo: Img119,
            },
            {
              id:1,
              logo: Img120,
            },
            {
              id:1,
              logo: Img121,
            },
            {
              id:1,
              logo: Img122,
            },
            {
              id:1,
              logo: Img123,
            },
            {
              id:1,
              logo: Img124,
            },
            {
              id:1,
              logo: Img125,
            },
            {
              id:1,
              logo: Img126,
            },
            {
              id:1,
              logo: Img127,
            },
            {
              id:1,
              logo: Img128,
            },
            {
              id:1,
              logo: Img129,
            },
            {
              id:1,
              logo: Img131,
            },
            {
              id:1,
              logo: Img138,
            },
            {
              id:1,
              logo: Img139,
            },
            {
              id:1,
              logo: Img140,
            },
            {
              id:1,
              logo: Img132,
            },
            {
              id:1,
              logo: Img134,
            },
            {
              id:1,
              logo: Img141,
            },
            {
              id:1,
              logo: Img142,
            },
            {
              id:1,
              logo: Img143,
            },
            {
              id:1,
              logo: Img135,
            },
            {
              id:1,
              logo: Img136,
            },
            {
              id:1,
              logo: Img137,
            },
            {
              id:1,
              logo: Img133,
            },
            {
              id:1,
              logo: Img130,
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
          <h1 className="name">MY GALLERY</h1>
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



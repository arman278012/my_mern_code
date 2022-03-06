import { useState } from "react";

const Gallery = () => {
    const img1="https://www.hdcarwallpapers.com/download/2018_jeep_compass_limited_4k_2-2560x1440.jpg"
    const img2="https://th.bing.com/th/id/R.5245ac8d8923ef907862ce8283c2cf4f?rik=7kq3IJ9dSh1WEw&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2017_jeep_compass_limited-HD.jpg&ehk=u1Nz73f0mQzlstyRtYwXtLTGwBPO9yYVTb88%2b%2fDimnU%3d&risl=&pid=ImgRaw&r=0"
    const img3="https://wallpapercave.com/wp/wp1972102.jpg"
    const img4="https://th.bing.com/th/id/R.6877bac414c2db8ee0bf215e63fd9732?rik=56m5AwtepFoOAA&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2fjeep_compass_trailhawk_2017-HD.jpg&ehk=j%2bHclw1KwBnMFVS4P4Z8JLL79MasaQ17%2bbPtH2%2bmpfs%3d&risl=1&pid=ImgRaw&r=0"
    const img5="https://pictures.topspeed.com/IMG/jpg/201411/jeep-srt-hellcat-2.jpg"
    const img6="https://wallpapercave.com/wp/wp1972112.jpg"
    const img7="https://www.hdcarwallpapers.com/walls/2017_jeep_compass_sport_4x4-HD.jpg"
    const img8="https://images5.alphacoders.com/886/thumb-1920-886860.jpg"
    
    const [mainimage, setMainimage] = useState(img2);
    const changeimg = (imgurl) => {
        setMainimage(imgurl)
        
    }
     
    return (
      
        <div className="container">
            <h1 className="text-center mt-5 wpr">JEEP COMPAAS WALLPAPERS</h1>
            <img className="img-fluid mt-5 mt-5" src={mainimage} alt=""/>
        <div className="row">
        <div className="col-md-3">
                <img onClick={()=> {changeimg(img1)}} className="img-fluid mt-5 cmnimg" src={img1} alt=""/>
            </div>
            <div className="col-md-3">
                <img onClick={()=> {changeimg(img2)}} className="img-fluid mt-5 cmnimg" src={img2} alt=""/> 
            </div>
            <div className="col-md-3">
                <img onClick={()=> {changeimg(img3)}} className="img-fluid mt-5 i3" src={img3} alt=""/>
            </div>
            <div className="col-md-3">
                <img  onClick={()=> {changeimg(img4)}}className="img-fluid mt-5 cmnimg" src={img4} alt=""/>
            </div>
            <div className="col-md-3">
                <img onClick={()=> {changeimg(img5)}} className="img-fluid mt-5 cmnimg" src={img5} alt=""/>
            </div>
            <div className="col-md-3">
                <img onClick={()=> {changeimg(img6)}} className="img-fluid mt-5 i6" src={img6} alt=""/>
            </div>
            <div className="col-md-3">
                <img onClick={()=> {changeimg(img7)}} className="img-fluid mt-5 cmnimg" src={img7} alt=""/>
            </div>
            <div className="col-md-3">
                <img onClick={()=> {changeimg(img8)}} className="img-fluid mt-5 cmnimg" src={img8} alt=""/>
            </div>
    </div>
    </div> 
    );  
};
export default Gallery
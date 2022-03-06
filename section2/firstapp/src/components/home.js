import pic from "../images/flower.jpg";



const Home = () => {
    const myname= "arman ali"

    const sqrt = (n) => {
        return n**(1/2)        
    }

    const img1="https://d3nn873nee648n.cloudfront.net/900x600/19461/220-ES932535.jpg"
    
    return( 
    <div>
    <h1>Home component</h1>
    <h2>{myname}</h2>
    <h4>{sqrt(1445)}</h4>
    <img src={img1} alt=""/>
    <img src={"logo512.png"} alt=""/>
    <img src={pic} alt=""/>
    

    </div>
    );
};
export default Home;
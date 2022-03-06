import {useState} from "react"

const Updateimage = () => {


        let img1=("https://d3nn873nee648n.cloudfront.net/900x600/19459/220-ES932464.jpg")
        const [count, setCount] = useState("https://d3nn873nee648n.cloudfront.net/900x600/19459/220-ES932464.jpg")
        
        const updateimage = () => {
        setCount(count+1)
        console.log(count)
        
    }


    return (
        <div>
        <h1>my name is arman</h1>
        <button className="btn btn-primary" onClick={updateimage}>next foto</button>
        </div>
        
    )
    
}
export default Updateimage;


// const [productarray, setProductarray] = useState(productData);

//     const displayProducts=() => {
//         return productarray.map((product) => (
//             <grid item md={3}>
//             <Card>
//                 <CardMedia
//                     component="img"
//                     height="194"
//                     image={product.image}
//                     alt={product.name}
//                 />
//                 <CardContent>
                    
//                     <p className="p-title">{product.name}</p>
//                     <p className="text-muted">{product.variant}</p>
//                     <span className="p-rating">
//                         {product.rating}<i className="fas fa-star"></i>
//                     </span>
//                     &nbsp;&nbsp;
//                     <span className="text-muted">({product.reviews})</span>
//                     <p className="h4 mt-4">{product.price}</p>
//                 </CardContent>
//             </Card>
//             </grid>
//         )
//     )
// }
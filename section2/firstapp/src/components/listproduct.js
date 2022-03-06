// import { Card, CardContent, CardMedia, CircularProgress, Grid, Skeleton } from "@mui/material";
// // import { useEffect, useState } from "react";
// // import productData from "./products";
// // import "./listproduct.css";
// // import app_config from "../config";

// // const ListProducts = () => {
// //   const [productArray, setProductArray] = useState([]);
// //   const [loading, setLoading] = useState(true)

// //   const url=app_config.api_url

// //   const fetchData=()=>{
// //       fetch(url+"/product/getall")
// //       .then((res)=>res.json())
// //       .then((data)=>{
// //        console.log(data)
// //        setProductArray(data);
// //        setLoading(false);
// //       })
// //   }

// //   useEffect(() => {
// //     fetchData()
// //   }, [])

// //   const displaySkeleton = () => {
// //     return [1, 2, 3].map((e) => (
// //       <Grid item md={3}>
// //         <Skeleton
// //           animation="wave"
// //           variant="rectangular"
// //           height={350}
// //           width={243}
// //         />
// //         <Skeleton animation="wave" variant="text" className="mt-3" width={50} />
// //         <Skeleton
// //           animation="wave"
// //           variant="text"
// //           className="mt-3"
// //           width={200}
// //         />
// //       </Grid>
// //     ));
// //   };
  

// //   const displayProducts = () => {

// //     if(!loading){
// //     return productArray.map((product) => (
// //       <Grid item md={3}>
// //         <Card>
// //           <CardMedia
// //             component="img"
// //             height="350"
// //             image={product.image}
// //             alt={product.name}
// //           />
// //           <CardContent>
// //             <p className="p-title">{product.name}</p>
// //             <p className="text-muted">{product.variant}</p>
// //             <span className="p-rating">
// //               {product.rating} <i class="fas fa-star"></i>
// //             </span>
// //             &nbsp;&nbsp;
// //             <span className="text-muted">({product.reviews})</span>
// //             <p className="h4 mt-4">₹ {product.price}</p>
// //           </CardContent>
// //         </Card>
// //       </Grid>
// //     ));
// //     }else{
// //       // return(
// //       //   <CircularProgress/>
// //       // )
// //       <Grid container spacing={6}>
// //         {displaySkeleton()}  
// //       </Grid>
        
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h1>List Products</h1>
// //       <Grid container spacing={6}>
// //         {displayProducts()}
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default ListProducts;
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../config";
import "./listproduct.css";

const ListProducts = () => {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  // Step 1 : Fetch Data from server
  const fetchData = () => {
    fetch(url + "/product/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductArray(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displaySkeleton = () => {
    return [1, 2, 3].map((e) => (
      <Grid item md={3}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          height={350}
          width={243}
        />
        <Skeleton animation="wave" variant="text" className="mt-3" width={50} />
        <Skeleton
          animation="wave"
          variant="text"
          className="mt-3"
          width={200}
        />
      </Grid>
    ));
  };

  const displayProducts = () => {
    if (!loading) {
      return productArray.map((product) => (
        <Grid item md={3}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={url+"/"+product.thumbnail}
              alt={product.name}
            />
            <CardContent>
              <p className="p-title">{product.name}</p>
              <p className="text-muted">{product.variant}</p>
              <span className="p-rating">
                {product.rating} <i class="fas fa-star"></i>
              </span>
              &nbsp;&nbsp;
              <span className="text-muted">({product.reviews})</span>
              <p className="h4 mt-4">₹ {product.price}</p>
            </CardContent>
          </Card>
        </Grid>
      ));
    } else {
      // return <CircularProgress />;
      return (
        <Grid container spacing={6}>
          {displaySkeleton()}
        </Grid>
      );
    }
  };

  return (
    <div className="container">
      <h1>List Products</h1>
      <Grid container spacing={6}>
        {displayProducts()}
      </Grid>
    </div>
  );
};

export default ListProducts;
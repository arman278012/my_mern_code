import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../config";

const ManageProduct=()=>{
    const [productArray, setProductArray] = useState([]);
    const [loading, setLoading] = useState(true)

    const url=app_config.api_url
    const fetchData=()=>{
        fetch(url+"/product/getall")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setProductArray(data)
            setLoading(false)
        })
    }

    const deleteProduct=(id)=>{
        fetch(url+"/product/delete/"+id,{method:"DELETE"})
        .then((res)=>res.json)
        .then((data)=>{
            console.log(data)
            fetchData()
            toast.success("product deleted successfully...",
            {
                icon: '😁',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              })
        })
    }
    useEffect(() => {
        fetchData()
      }, [])

      const displayProducts = () => {

        if(!loading){
            return productArray.map((product, i) => (
                <tr key={product._id}>
                    <td>{i+1}</td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{new Date(product.createdAt).toLocaleDateString()}</td> 
                    <td>{new Date(product.createdAt).toLocaleTimeString()}</td>
                    <td>
                         <Button variant="contained" color="error" onClick={e=>deleteProduct(product._id)}>
                             <i className="fas fa-trash-alt"></i>
                         </Button>
                    </td>
                </tr>
              ));
            }
      };



    return(
        <div className="container mt-5" >
            <Toaster position="top-center" reverseOrder={false}/>
        {/* <h1>Manage product</h1>
        <tbody>{displayProducts()}</tbody>    */}
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Delete</th>
                    
                </tr>
            </thead>
            <tbody>{displayProducts()}</tbody>
        </table>
    </div>
  );
    
}
export default ManageProduct;
import { Button, Container, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import app_config from "../config";

const AddProduct=()=>{

    const url=app_config.api_url
    const [thumbnail, setThumbnail] = useState("")

    const productForm={
        title: "",
        category: "",
        price: "",
        
    }

    const submitProduct=(values)=>{
        values.thumbnail=thumbnail;
        console.log(values)

        fetch(url+'/product/add',{
            method:"POST",
            body:JSON.stringify(values),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{
            console.log(res.status)
        })

    }

    const uploadThumbnail=(e)=>{
        console.log("File selected");
        let file=e.target.files[0]
        console.log(file.name);
        setThumbnail(file.name)
        let form=new FormData();
        form.append('myfile',file)
        fetch(url+'/util/uploadfile',{method:'POST',body:form})
        .then((res)=>console.log(res.status))
    }

return(
    <Paper>
        <Container>
            <header></header>

            
            <Formik initialValues={productForm} onSubmit={submitProduct}>
                {({values,handleChange,handleSubmit})=>(
                    <form onSubmit={handleSubmit}>

                <TextField
                className="mt-5 w-100"
                label="Title"
                variant="outlined"
                color="secondary"
                id="title"
                value={values.title}
                onChange={handleChange}
               />


                <TextField
                className="mt-3 w-100"
                label="Category"
                variant="outlined"
                color="secondary"
                id="category"
                value={values.category}
                onChange={handleChange}
              />

              <TextField
                className="mt-3 w-100"
                label="Price"
                type="number"
                variant="outlined"
                color="secondary"
                id="price"
                value={values.price}
                onChange={handleChange}
              />

              
              <label>Upload thumbnail</label>
              <input type="file" onChange={uploadThumbnail} className="form-control"/>

              <Button
                type="submit"
                variant="contained"
                className="mt-5"
                color="secondary"
              >
                Add Product
              </Button>

                    </form>
                )
                }

            </Formik>




        </Container>


    </Paper>
)}
export default AddProduct;







































// import { Button, Container, Paper, TextField } from "@mui/material";
// import { Formik } from "formik";
// import app_config from "../config";
// import "./addproduct.css";

// const AddProduct = () => {
//   const url = app_config.api_url;

//   const productForm = {
//     title: "",
//     category: "",
//     price: "",
//   };

//   const submitProduct = (values) => {
//     console.log(values);

//     fetch(url + "/product/add", {
//       method: "POST",
//       body: JSON.stringify(values),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((res) => {
//       console.log(res.status);
//     });
//   };

//   return (
//     <Paper>
//       <Container style={{ height: "100vh" }}>
//         <header></header>

//         <Formik initialValues={productForm} onSubmit={submitProduct}>
//           {({ values, handleChange, handleSubmit }) => (
//             <form onSubmit={handleSubmit}>
//               <TextField
//                 className="mt-5 w-100"
//                 label="Title"
//                 variant="outlined"
//                 color="secondary"
//                 id="title"
//                 value={values.title}
//                 onChange={handleChange}
//               />

//               <TextField
//                 className="mt-3 w-100"
//                 label="Category"
//                 variant="outlined"
//                 color="secondary"
//                 id="category"
//                 value={values.category}
//                 onChange={handleChange}
//               />

//               <TextField
//                 className="mt-3 w-100"
//                 label="Price"
//                 type="number"
//                 variant="outlined"
//                 color="secondary"
//                 id="price"
//                 value={values.price}
//                 onChange={handleChange}
//               />

//               <Button
//                 type="submit"
//                 variant="contained"
//                 className="mt-5"
//                 color="secondary"
//               >
//                 Add Product
//               </Button>
//             </form>
//           )}
//         </Formik>
//       </Container>
//     </Paper>
//   );
// };

// export default AddProduct;

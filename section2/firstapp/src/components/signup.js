import { Button, Card, CardContent, Grid, Paper, SwipeableDrawer, TextField } from "@mui/material"
import { Formik } from "formik"
import Swal from "sweetalert2"; 
import app_config from "../config";

    const Signup = () => {

    const url=app_config.api_url;

    const userForm ={
        name:"",
        username:"",
        password:"",
        age:"",
    }

    const userSubmit=(values)=>{
        console.log(values)

        fetch(url+'/user/add',
        { 
            method:'POST',
            body:JSON.stringify(values),
            headers:{'content-Type':"application.JSON"}
        })

    .then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registered Successfully",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
    
return (
    <div>
    <h1> Signup here</h1>

    <div>
        {/* <h1>My login page</h1> */}
            <Paper className="login-container">
            <Grid container justifyContent="center">
            <Grid item md={3} sm={4}>
            <Card className="mt-5">
            <CardContent className="">
                

                <Formik initialValues={userForm} onSubmit={userSubmit}>
                    {({values,handleChange,handleSubmit}) =>(
                         
                <form onSubmit={handleSubmit}>
                <h2>Signup here</h2>  


                <TextField className="w-100 mt-3"
                helperText="Enter your name"
                 placeholder="Name"
                 label="name"
                 variant="outlined"
                 id="name"
                 onChange={handleChange}
                 value={values.name} 
                 />


              <TextField
              className="w-100 mt-3"
              placeholder="Username"
              label="Username"
              type=""
              variant="outlined"
              id="username"
              onChange={handleChange}
              value={values.username}
              helperText="Enter your username"
              />

             <TextField
              className="w-100 mt-3"
              placeholder="Age"
              label="Age"
              type="number"
              variant="outlined"
              id="age"
              onChange={handleChange}
              value={values.age}
              helperText="Enter your age"
              />

             <TextField
              className="w-100 mt-3"
              placeholder="password"
              label="Password"
              type="password"
              variant="outlined"
              id="password"
              onChange={handleChange}
              value={values.password}
              helperText="Enter strong password"
              />

             <Button color="error" 
             variant="contained" 
             className="w-50 mt-3"
             type="submit">
              submit
            </Button>
            </form>
                    )
                    }
            </Formik>




            </CardContent>
            </Card>
        </Grid>
    </Grid>
  </Paper>
</div>        
    
    </div>
)
}

export default Signup





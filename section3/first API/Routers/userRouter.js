const router = require("express").Router();
const Model = require("../models/userModel");

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data saved successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("user data fetched successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/checklogin", (req, res) => {
  let formdata = req.body;

  Model.findOne({ username: formdata.username })
    .then((data) => {
      if (data) {
        console.log("data found");

        if (data.password === formdata.password) {
          console.log("login successfull");
          res.status(200).json(data);
        } else {
          console.log("password not matched");
          res.status(300).json({ status: "fail" });
        }
      } else {
        console.log("data not found");
        res.status(300).json({ status: "fail" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// for exporting router
module.exports = router;







// const router = require ("express").Router();
// const Model = require("../Models/userModel")


//    router.post("/add",(req,res) => {
//    console.log(req.body)

//    new Model(req.body)
//    .save()
//    .then((data) => {
//      console.log("User Data saved successfully") 
//      res.status(200).json(data)
//    })
//    .catch((err) => {
//      console.error("err")
//      res.status(500).json(err)
//    });

//   //  router.post("/checklogin",(req,res)=>{
//   //    let formdata=req.body
//   //  })




//   // console.log("a request in user router");
//   // res.send("response from user router");
// });

// // router.get("/home", (req, res) => {
// //   console.log("a request in user router at home");
// //   res.send("response from user router at home");
// // });


// router.post("/checklogin", (req, res) => {
//   let formdata=req.body;

//   Model.findOne({username:formdata.username })
//     .then((data) => {
//     if(data){
//       console.log("data found")

//       if(data.password===formdata.password){
//         console.log("login successfull")
//         res.status(200).json({status:"success"})
//       }
//       else{
//         console.log("password not matched")
//         res.status(300).json({status:"failed"})
//       }
//     }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json(err);
//     });
// });

// // for exporting router
// module.exports = router
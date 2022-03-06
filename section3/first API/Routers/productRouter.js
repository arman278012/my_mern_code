const router = require("express").Router();
const Model = require("../models/productModel");

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("product data saved successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});



router.get("/getall", (req, res) => {
 setTimeout(() => {
  Model.find({})
  .then((data) => {
    console.log("product data fetched successfully..");
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
 }, 1000);
});




router.delete("/delete/:pid", (req, res) => {
  Model.findByIdAndDelete(req.params.pid)
    .then((data) => {
      console.log("product data deleted successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});


// for exporting router
module.exports = router;
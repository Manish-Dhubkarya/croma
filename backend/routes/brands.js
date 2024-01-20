var express = require('express');
var router = express.Router();
var pool = require("./pool")
var upload = require("./multer");
/* GET home page. */
router.post('/submit_brands', upload.single("logo"), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    try {
        pool.query("insert into brands (brandname, logo, categoryid) values(?,?,?)", [req.body.brandname, req.file.filename, req.body.categoryid], function (error, result) {
            if (error) {
                console.log(error)
               return res.status(500).json({ status: false, message: "DataBase Error, Plz Contact DataBase Admin" })
            }
            else {
               return res.status(200).json({ status: true, message: "Brand Submitted Successfully!" })
            }
        })
    }
    catch (e) {
      return  res.status(500).json({ status: false, message: "Server Error...!" })

    }
});
router.get("/display_all_brands", function(req, res, next){
    
    try {
        pool.query("select B.*, (select C.categoryname from category C where C.categoryid = B.categoryid) as categoryname from brands B", function (error, result) {
            if (error) {
                console.log(error)
               return res.status(500).json({status: false, message: "DataBase Error, Plz Contact DataBase Admin"})
            }
            else {
               return res.status(200).json({data:result, status: true, message: "Success!" })
            }
            
        })
    }
    catch (e) {
      return  res.status(500).json({ status: false, message: "Server Error...!" })
    }
})
router.post("/update_brands", function(req, res, next){
    try{
      pool.query("update brands set brandname=?, categoryid=? where brandid=?", [req.body.brandname, req.body.categoryid, req.body.brandid], function(error, result){
        if (error) {
            console.log(error)
           return res.status(500).json({ status: false, message: "DataBase Error, Plz Contact DataBase Admin"})
        }
        else {
           return res.status(200).json({ status: true, message: "Brand Updated Successfully!" })
        }
      })
    }
    catch(e){
        return res.status(500).json({status:false, message:"Server Error...!"})
    }
})
router.post("/update_brands_logo", upload.single("logo"), function(req, res, next){
    try{
      pool.query("update brands set logo=? where brandid=?", [req.file.filename, req.body.brandid], function(error, result){
        if (error) {
            console.log(error)
           return res.status(500).json({ status: false, message: "DataBase Error, Plz Contact DataBase Admin"})
        }
        else {
           return res.status(200).json({ status: true, message: "Logo Updated Successfully!" })
        }
      })
    }
    catch(e){
        return res.status(500).json({status:false, message:"Server Error...!"})
    }
})
router.post('/delete_brand', function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    try {
        pool.query("delete from brands where brandid=?", [req.body.brandid], function (error, result) {
            if (error) {
                console.log(error)
               return res.status(500).json({ status: false, message: "DataBase Error, Plz Contact DataBase Admin" })
            }
            else {
               return res.status(200).json({ status: true, message: "Brand Deleted Successfully!" })
            }
        })
    }
    catch (e) {
      return  res.status(500).json({ status: false, message: "Server Error...!" })

    }
});
router.post("/fetch_brands_by_category", function(req, res, next){
    
    try {
        pool.query("select B.*, (select C.categoryname from category C where C.categoryid = B.categoryid) as categoryname from brands B where categoryid=?",[req.body.categoryid], function (error, result) {
            if (error) {
                console.log(error)
                
               return res.status(500).json({status: false, message: "DataBase Error, Plz Contact DataBase Admin"})
            }
            else {
               return res.status(200).json({data:result, status: true, message: "Success!" })
            }
            
        })
    }
    catch (e) {
      return  res.status(500).json({ status: false, message: "Server Error...!" })
    }
})
module.exports = router;

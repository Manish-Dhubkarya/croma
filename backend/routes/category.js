var express = require('express');
var router = express.Router();
var pool = require("./pool")
var upload = require("./multer");
/* GET home page. */
router.post('/submit_category', upload.single("image"), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    try {
        pool.query("insert into category (categoryname, image) values(?,?)", [req.body.categoryname, req.file.filename], function (error, result) {
            if (error) {
                console.log(error)
               return res.status(500).json({ status: false, message: "DataBase Error, Plz Contact DataBase Admin" })
            }
            else {
               return res.status(200).json({ status: true, message: "Category Submitted Successfully!" })
            }
        })
    }
    catch (e) {
      return  res.status(500).json({ status: false, message: "Server Error...!" })

    }
});
router.post('/update_category', function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    try {
        pool.query("update category set categoryname=? where categoryid=?", [req.body.categoryname, req.body.categoryid], function (error, result) {
            if (error) {
                console.log(error)
               return res.status(500).json({ status: false, message: "DataBase Error, Plz Contact DataBase Admin" })
            }
            else {
               return res.status(200).json({ status: true, message: "Category Updated Successfully!" })
            }
        })
    }
    catch (e) {
      return  res.status(500).json({ status: false, message: "Server Error...!" })

    }
});
router.post('/update_category_picture', upload.single("image"), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    try {
        pool.query("update category set image=? where categoryid=?", [req.file.filename, req.body.categoryid], function (error, result) {
            if (error) {
                console.log(error)
               return res.status(500).json({ status: false, message: "DataBase Error, Plz Contact DataBase Admin" })
            }
            else {
               return res.status(200).json({ status: true, message: "Picture Updated Successfully!" })
            }
        })
    }
    catch (e) {
      return  res.status(500).json({ status: false, message: "Server Error...!" })

    }
});
router.post('/delete_category', function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    try {
        pool.query("delete from category where categoryid=?", [req.body.categoryid], function (error, result) {
            if (error) {
                console.log(error)
               return res.status(500).json({ status: false, message: "DataBase Error, Plz Contact DataBase Admin" })
            }
            else {
               return res.status(200).json({ status: true, message: "Category Deleted Successfully!" })
            }
        })
    }
    catch (e) {
      return  res.status(500).json({ status: false, message: "Server Error...!" })

    }
});
router.get("/display_all_category", function(req, res, next){
    
    try {
        pool.query("select * from category", function (error, result) {
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
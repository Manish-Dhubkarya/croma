var express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool')

/* GET home page. */
router.post('/submit_useraccount',function(req,res,next) {
    try{ 
    pool.query('insert into useraccount (emailid,mobileno,username,address,pincode) value(?,?,?,?,?)',[req.body.emailid,req.body.mobileno,req.body.username,req.body.address,req.body.pincode,],function(error,result){
        if(error)
        { console.log("error",error)
         res.status(200).json({status:false,message:'Database error,please connect the database admin'})
        }
        else
        {
            res.status(200).json({status:true,message:'Payment submitted successfully'})
        }
    })
}
catch(e)
{
    res.status(200).json({status:false,message:'server error'})
}

});
    

router.post('/check_account',function(req,res,next) {
    try{ 
    pool.query('select * from useraccount where emailid=? or mobileno=?',[req.body.mobileno,req.body.mobileno],function(error,result){
        if(error)
        { console.log("error",error)
         res.status(200).json({status:false,message:'Database error,please connect the database admin'})
        }
        else
        {   if(result.length==1)
            res.status(200).json({data:result,status:true,message:'User Account Already Exist'})
            else
            res.status(200).json({data:[],status:false,message:'User Account not Exist'})
        }
    })
}
catch(e)
{  console.log("error",e)
    res.status(200).json({status:false,message:'server error'})
}

});
module.exports = router;
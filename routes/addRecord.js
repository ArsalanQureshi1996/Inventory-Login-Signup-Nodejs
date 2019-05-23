var express = require('express');
var router = express.Router();

var Record= require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addRecord', { title: 'Add Record' });
});

router.post('/', function(req,res,next){
  var itemName= req.body.itemName;
  var purchasePrice= req.body.purchasePrice;
  var salePrice= req.body.salePrice;
  var inStock= req.body.inStock;
  var productCategory= req.body.productCategory;
  var brandName= req.body.brandName;
  //var paymentType= req.body.paymentType;
  //console.log(firstName);

  req.checkBody('itemName' , 'Item Name is required').notEmpty();
  req.checkBody('purchasePrice' , 'Purchase Price is required').notEmpty();
  req.checkBody('salePrice' , 'Sale Price is required').notEmpty();
  req.checkBody('inStock' , 'In stock is required').notEmpty();
  req.checkBody('productCategory' , 'Product Category is required').notEmpty();
  req.checkBody('brandName' , 'Brand Name is required').notEmpty();
  //req.checkBody('paymentType' , 'Payment Type is required').notEmpty();

  var error = req.validationErrors();
  
  if(error)
  {
    throw error;
  }
  else
  {

  var newRecord = new Record({
    itemName: itemName,
    purchasePrice:purchasePrice,
    salePrice: salePrice,
    inStock: inStock,
    productCategory:productCategory,
    brandName: brandName,
    //paymentType: paymentType
    

  });
console.log('New Record Inserted');
  Record.insertMany(newRecord, function(err, record){
    if(err){throw err;}
     else{'User not created'};
     console.log(record);
     req.flash('success_msg', 'Your Record is added and can now be viewed');
     res.redirect('viewRecord')

   });
  }
});



module.exports = router;

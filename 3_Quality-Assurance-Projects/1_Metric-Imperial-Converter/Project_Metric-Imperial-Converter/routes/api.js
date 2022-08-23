'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    convertHandler.getNum("hello world");
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    if(initNum === 'invalid number' && initUnit === 'invalid unit'){
      res.json('invalid number and unit')
    }
    
    if(initNum === 'invalid number' && initUnit !== 'invalid unit'){
      res.json('invalid number')
    }  
    
    if(initNum !== 'invalid number' && initUnit === 'invalid unit'){
      res.json('invalid unit')
    }  


    if(initNum !== 'invalid number' && initUnit !== 'invalid unit'){
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
        
  
      
      let responseObject = {}
      responseObject['initNum'] = Number(initNum)
      responseObject['initUnit'] = convertHandler.getReturnUnit(returnUnit);
      responseObject['returnNum'] = Number(returnNum)
      responseObject['returnUnit'] = returnUnit
      responseObject['string'] = toString
      
      res.json(responseObject)
    }
    

  })

};

function ConvertHandler() {

  let inputRegex = /[a-z]+|[^a-z]+/gi
  
  this.getNum = function(input) {
    let result;

    result = input.match(inputRegex)[0]

    let numberRegex = /\d/

    if(numberRegex.test(result) === false){
      result = 1
    }

    if(result.toString().includes('/')){
      let values = result.toString().split('/')
      if(values.length != 2){
        return 'invalid number'
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0]/values[1]).toFixed(5)) 
    }

    if(isNaN(result)){
      return 'invalid number'
    }

    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;

    result = input.match(inputRegex)[1]
    
    if(!result){
      result = input.match(inputRegex)[0]
    }
    
    let validUnits = ['gal','l','mi','km','lbs','kg']
    
    if(!validUnits.includes(result.toLowerCase())){
      return 'invalid unit'
    }

    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    let unitPair = [["gal","L"], ["lbs","kg"], ["mi","km"]]

    for (let index = 0; index < unitPair.length ; index++) {
      if(unitPair[index].includes(initUnit.toLowerCase()) || unitPair[index].includes(initUnit.toUpperCase()))
      {
        if(unitPair[index][0].toLowerCase() == initUnit.toLowerCase())
        {
          return unitPair[index][1]
        }
        else
        {
          return unitPair[index][0]
        }
      }
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = "";

    const unitList = {
       gal: "gallons",
       l: "liters",
       lbs: "pounds",
       kg: "kilograms",
       mi: "miles",
       km: "kilometers"
    };

    

    result = unitList[unit.toLowerCase()]
    
    
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if(initUnit === 'gal' || initUnit === 'GAL'){
      result = (initNum * galToL).toFixed(5)
    }else if(initUnit === 'l' || initUnit === 'L'){
      result = (initNum/galToL).toFixed(5)
    }
    
    if(initUnit === 'lbs' || initUnit === 'LBS'){
      result = (initNum * lbsToKg).toFixed(5)
    }else if(initUnit === 'kg' || initUnit === 'KG'){
      result = (initNum/lbsToKg).toFixed(5)
    }
    
    if(initUnit === 'mi' || initUnit === 'MI'){
      result = (initNum * miToKm).toFixed(5)
    }else if(initUnit === 'km' || initUnit === 'KM'){
      result = (initNum/miToKm).toFixed(5)
    }
    
    
    return Number(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' +  returnNum+ ' ' + this.spellOutUnit(returnUnit)

    
    return result;
  };
  
}

module.exports = ConvertHandler;

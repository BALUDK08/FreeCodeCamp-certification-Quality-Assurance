'use strict';

const Translator = require('../components/translator.js');


const americanOnly = require('./../components/american-only.js');
const americanToBritishSpelling = require('./../components/american-to-british-spelling.js');
const americanToBritishTitles = require("./../components/american-to-british-titles.js")
const britishOnly = require('./../components/british-only.js');


const reverseDict = (obj) => {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([k,v]) => ({[v]: k}))
  )
}

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body)

      if(!req.body.locale || req.body.text == undefined)
      {
        return res.json({ error: 'Required field(s) missing' })
      }

      if(req.body.text === "")
      {
        return res.json({ error: "No text to translate"})
      }

      
      
      let objet = {};

      let fromLToLSpelling = americanToBritishSpelling;
      let fromLToLTitles = americanToBritishTitles;
      let fromLtoLOnly = americanOnly;   
      let timeRegex = '';
      let timeSeparator = '';
      
      let objetToTranslate = req.body.text ;
      switch(req.body.locale)
      {
        case "american-to-british":
          fromLToLSpelling = americanToBritishSpelling;
          fromLToLTitles = americanToBritishTitles;
          fromLtoLOnly = americanOnly;
          timeRegex = /([1-9]|1[0-2]):([0-5][0-9])/g
          timeSeparator = '.'
          break;

        case "british-to-american":
          fromLToLSpelling = reverseDict(americanToBritishSpelling);
          fromLToLTitles = reverseDict(americanToBritishTitles);
          fromLtoLOnly = britishOnly;
          timeRegex = /([1-9]|1[0-2]).([0-5][0-9])/g
          timeSeparator = ':'
          break;

        default:
          return res.json({ error: 'Invalid value for locale field' });
          break;
          
            
      }


>    regEx, 
              '<span class="highlight">'+ fromLToLTitles[key][0].toUpperCase() + fromLToLTitles[key].slice(1) +'</span>'
            )
          })

      Object.keys(fromLtoLOnly).forEach(function(key) {
        let regEx = new RegExp(key, "gi");
            objetToTranslate = objetToTranslate.replace(
              regEx, 
              '<span class="highlight">'+ fromLtoLOnly[key] +'</span>'
          )
      })

      objetToTranslate = objetToTranslate.replace(timeRegex, '<span class="highlight">' + '\$1' + timeSeparator + '\$2' + '</span>');
      objetToTranslate = objetToTranslate[0].toUpperCase() + objetToTranslate.slice(1); 
      let found = objetToTranslate.match('^\<span class\=\"highlight\"\>');

      if(!found)
      {

      }
      else
      {
        objetToTranslate = objetToTranslate.replace('<span class="highlight">', '');
        console.log(objetToTranslate)
        objetToTranslate = objetToTranslate[0].toUpperCase() + objetToTranslate.slice(1); 
        objetToTranslate = '<span class="highlight">' + objetToTranslate;
      }
      
      
      objet["text"] = req.body.text;
      objet["translation"] = objetToTranslate;
      if(objet["translation"] === req.body.text)
      {
        objet["translation"] = "Everything looks good to me!";
      }
      console.log(objet["translation"])

      return res.json(objet)
      
    });
};

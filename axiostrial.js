const { default: axios } = require('axios');

//axios = require('axios').default;
var options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': '4eb5bdbd1amsh0d8420752fe242ep1f4eaajsne6c4431de3fb'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error.data);
  });
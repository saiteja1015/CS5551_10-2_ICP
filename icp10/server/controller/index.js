var request = require('request');
module.exports = function(app) {
    var url = 'https://api.nutritionix.com/v1_1/search/?results=0:1&fields=*&appId=50cd56b2&appKey=0a2530b35c41daa7d46da44fc528208d&q=';
    app.get('/api/rxlist', function(req, res) {
        url = url+req.query.q;
        request.get(url).pipe(res);
        console.log(res);
    });
}
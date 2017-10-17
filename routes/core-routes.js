module.exports = function(app) {

   app.get('/', function(req, res){
    var title = 'Isabelle Miller';
    res.render('index.html');
  });

  app.get('/*', function(req, res) {
    res.redirect('/');
  });

}
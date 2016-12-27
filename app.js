var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    connection = require('express-myconnection'),
    mysql = require('mysql');
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

router.get('/land/:land/harvest', function(req, res){
  res.send('Busqueda de finca :' + req.params.land);
});

router.get('/harvest', function(req, res){
  var fecini = req.query.fecini;
  var fecfin = req.query.fecfin;
  if( req.accepts('application/json') ){
      res.json({'saludo': 'Hola Andres', 'fecini': fecini, 'fecfin': fecfin});
  }else{
      res.send('Hola');
  }
});

router.post('/harvest', function(req, res){
  var variety = req.body.variety;
  res.status(201);
  res.send('Variedad ' + variety);
});

router.put('/harvest/:id', function(req, res){
  var id = req.params.id;
  res.send('El id que envio es: ' + id);
});

router.delete('/harvest/:id', function(req, res){
  var id = req.params.id;
  res.send('El id que envio para eliminar es: ' + id);
});

router.patch('/harvest/:id', function(req, res){
  var id = req.params.id;
  res.send('El id que envio para edicion parcial es: ' + id);
});





app.use(router);

var port = process.env.PORT || 3001;

app.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Service is running on port: ', port);
    }
});

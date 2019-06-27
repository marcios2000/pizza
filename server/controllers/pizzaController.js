module.exports = {
    create: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { name, price, img} = req.body;
  
      dbInstance.create_pizza([name, price, img])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    getOne: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.read_pizza(id)
        .then(pizz => res.status(200).send(pizz))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    getAll: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_pizzas()
        .then(pizzas => res.status(200).send(pizzas))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    update: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { name, price, img} = req.body;
      const { params} = req;
  
      dbInstance.update_pizza([params.id, name, price, img])
        .then((response) => res.status(200).json(response))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    delete: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.delete_pizza(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    }
  };
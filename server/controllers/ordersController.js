module.exports = {
    create: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {name, items_purchased, total} = req.body;
  
      dbInstance.create_order([name, items_purchased, total])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    getOne: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.read_order(id)
        .then(order => res.status(200).send(order))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    getAll: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_orders()
        .then(orders => res.status(200).send(orders))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    update: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {name, items_purchased, total} = req.body;
      const { params} = req;
  
      dbInstance.update_order([name, items_purchased, total])
        .then((response) => res.status(200).json(response))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    delete: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.delete_order(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    }
  };
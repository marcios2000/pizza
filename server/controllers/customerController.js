module.exports = {
    create: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { name, address, phone} = req.body;
  
      dbInstance.create_customer([name, address, phone])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    getOne: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.read_customer(id)
        .then(cust => res.status(200).send(cust))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    getAll: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_customers()
        .then(customer => res.status(200).send(customer))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    update: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const {name, address, phone} = req.body;
      const { params} = req;
  
      dbInstance.update_customer([name, address, phone])
        .then((response) => res.status(200).json(response))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    },
  
    delete: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.delete_customer(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong." });
          console.log(err)
        });
    }
  };
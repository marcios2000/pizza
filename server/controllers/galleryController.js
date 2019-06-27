module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { img, width, height, price, section} = req.body;
    
        dbInstance.create_gallery([img, width, height, price, section])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong." });
            console.log(err)
          });
      },
      getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_gallery()
          .then(gallery => res.status(200).send(gallery))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong." });
            console.log(err)
          });
      }
}
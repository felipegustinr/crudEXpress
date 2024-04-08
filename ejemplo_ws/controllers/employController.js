const employ = require("../models").employ_model;
module.exports = {
  list(req, res) {
    return employ
      .findAll({})
      .then((employ) => res.status(200).send(employ))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    console.log(req.params.id);
    return employ
      .findByPk(req.params.id)
      .then((employ) => {
        console.log(employ);
        if (!employ) {
          return res.status(404).send({ message: "employ Not Found" });
        }
        return res.status(200).send(employ);
      })
      .catch((error) => res.status(400).send(error));
  },
  add(req, res) {
    return employ
      .create({
        title: req.body.title,
        description: req.body.description,
        state: req.body.state,
      })
      .then((employ) => res.status(201).send(employ))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return employ
      .findByPk(req.params.id)
      .then((employ) => {
        if (!employ) {
          return res.status(404).send({ message: "employ Not Found" });
        }
        return employ
          .update({
            title: req.body.title || employ.title,
            description: req.body.description || employ.description,
            state: req.body.state || employ.state,
          })
          .then(() => res.status(200).send(employ))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return employ
      .findByPk(req.params.id)
      .then((employ) => {
        if (!employ) {
          return res.status(400).send({ message: "employ Not Found" });
        }
        return employ
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

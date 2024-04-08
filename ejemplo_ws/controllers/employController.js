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
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
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
            name: req.body.name || employ.name,
            lastname: req.body.lastname || employ.lastname,
            email: req.body.email || employ.email,
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

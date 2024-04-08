const activity = require("../models").activity_model;
module.exports = {
  list(req, res) {
    return activity
      .findAll({})
      .then((activity) => res.status(200).send(activity))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    console.log(req.params.id);
    return activity
      .findByPk(req.params.id)
      .then((activity) => {
        console.log(activity);
        if (!activity) {
          return res.status(404).send({ message: "activity Not Found" });
        }
        return res.status(200).send(activity);
      })
      .catch((error) => res.status(400).send(error));
  },
  add(req, res) {
    return activity
      .create({
        name: req.body.name,
        description: req.body.description,
        id_Project: req.body.id_Project,
      })
      .then((activity) => res.status(201).send(activity))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return activity
      .findByPk(req.params.id)
      .then((activity) => {
        if (!activity) {
          return res.status(404).send({ message: "activity Not Found" });
        }
        return activity
          .update({
            name: req.body.name || activity.name,
            description: req.body.description || activity.description,
            id_Project: req.body.id_Project || activity.id_Project,
          })
          .then(() => res.status(200).send(activity))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return activity
      .findByPk(req.params.id)
      .then((activity) => {
        if (!activity) {
          return res.status(400).send({ message: "activity Not Found" });
        }
        return activity
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

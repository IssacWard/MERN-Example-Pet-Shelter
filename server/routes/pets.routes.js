const PetController = require('../controllers/pets.controller');

module.exports = (app) => {
    app.post("/api/pets/new",PetController.create);
    app.put("/api/pets/update/:id",PetController.update);
    app.delete("/api/pets/delete/:id",PetController.delete);
    app.get("/api/pets/:id",PetController.specific);
    app.get("/api/pets",PetController.index);
};
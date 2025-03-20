const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  register,
  login,
} = require("../controllers/userController");

const router = express.Router();

// 📌 Inscription de l'utilisateur
router.post("/register", register);

// 📌 Connexion de l'utilisateur
router.post("/login", login);

// 📌 Créer un utilisateur
router.post("/", createUser);

// 📌 Récupérer tous les utilisateurs
router.get("/", getUsers);

// 📌 Récupérer un utilisateur par ID
router.get("/:id", getUserById);

// 📌 Mettre à jour un utilisateur
router.put("/:id", updateUser);

// 📌 Supprimer un utilisateur
router.delete("/:id", deleteUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tasksController');

router
  .get('/tasks',        tarefasController.listarTarefas)
  .get('/tasks/:id',    tarefasController.listarTarefasPorId)
  .post('/tasks',       tarefasController.cadastrarTarefa)
  .put('/tasks/:id',    tarefasController.atualizarTarefa)
  .delete('/tasks/:id', tarefasController.excluirTarefa)


module.exports = router;
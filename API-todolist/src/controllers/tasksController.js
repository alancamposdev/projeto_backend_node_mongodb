const tarefas = require('../models/Task'); 

class tasksController {

  static listarTarefas = (req, res) => {
    tarefas.find((err, tarefas) => {
      res.status(200).json(tarefas)
  })
  }

  static listarTarefasPorId = (req, res) => {
    const id = req.params.id;

    tarefas.findById(id, (err, tarefas) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id da tarefa não localizado.`})
      } else {
        res.status(200).send(tarefas);
      }
    })
  }

  static cadastrarTarefa = (req, res) => {
    let tarefa = new tarefas(req.body);

    tarefa.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar a tarefa.`})
      } else {
        res.status(201).send(tarefa.toJSON())
      }
    })
  }

  static atualizarTarefa = (req, res) => {
    const id = req.params.id;

    tarefas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Tarefa atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirTarefa = (req, res) => {
    const id = req.params.id;

    tarefas.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Tarefa removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

module.exports = tasksController;


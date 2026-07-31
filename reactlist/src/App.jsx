import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import penIcon from "./assets/penicon.svg"
import trashIcon from "./assets/trashicon.svg"

function App() {
  // States / Variaveis
  const [taskList, setTaskList] = useState([])
  const [taskValue, setTaskValue] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [idToEdit, setIdToEdit] = useState(0)

  //Funcoes
  const getTasks = async () => {
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoint")
      const APIData = APIReturn.data

      setTaskList(APIData)
    } catch (error) {
      console.log(error);
    }
  }

  const getTasksById = (id) => {
    alert(`Funcao getTasksById em desenvolvimento ${id}`)
  }

  const postTasks = async (e) => {
    e.preventDefault()
    if (taskValue.trim().length == 0) {
      alert("Preencher o campo valor")
      return false
    }

    try {
      const APIReturn = await axios.post("http://localhost:3000/taskpoint", {
        descricao: taskValue,
      })

      setTaskValue("")
      getTasks()
    } catch (error) {
      console.log(error);
    }
  }

  const putTasks = (item) => {
    setIdToEdit(item.id)
    setEditMode(true)
    setTaskValue(item.descricao)
  }

  const confirmPutTask = async (e) => {
    e.preventDefault()

    if (taskValue.trim().length == 0) {
      alert("Preencha o texto da tarefa")
      return false
    }

    try {
      const APIReturn = await axios.put(`http://localhost:3000/taskpoint/${idToEdit}`, {
        descricao: taskValue
      })

      setIdToEdit(0)
      setTaskValue("")
      setEditMode(false)
      getTasks()

      alert(`A tarefa foi editada!`)
    } catch (error) {
      alert(`Erro ao editar!`)
      console.log(error);
    }
  }

  const deleteTasks = async (id) => {
    const excluir = confirm("Atencao: quer realmente excluir essa tarefa?")
    if (!excluir) {
      return false
    }

    try {
      const APIReturn = await axios.delete(`http://localhost:3000/taskpoint/${id}`);
      alert("Tarefa excluida com sucesso!")

      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  //Effects e Ciclo de Vida 

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <header className='header-section'>
        <h1 className='header-section__title'> React List </h1>
      </header>

      <main className='body-section'>
        <form className='cad-task' onSubmit={editMode ? confirmPutTask : postTasks}>
          <input
            className='cad-task__entry'
            type="text"
            placeholder='Adicione uma tarefa'
            value={taskValue}
            onChange={(e) => {
              setTaskValue(e.target.value)
            }}
          />
          <p>{taskValue}</p>
          <button className='cad-task__btn-confirm'>Adicionar</button>

          {
            editMode &&
            <button
              className='cad-task__btn-confirm'
              type='button'
              onClick={() => {
                setTaskValue("")
                setIdToEdit(0)
                setEditMode(false)
              }}
            >
              Cancelar
            </button>
          }

        </form>
        <section className='cardlist'>

          {
            taskList.map((t) => {
              return (
                <article className='cardtask' key={t.id}>
                  <p className='cardtask__task-text'>{t.descricao}</p>

                  <div className='cardtask__icon-box'>
                    <div className='cardlist__icon'>
                      <img
                        src={penIcon}
                        className='cardlist__edit-icon'
                        alt="Iamgem de um lapis, funcao de editar a tarefa"
                        onClick={() => {
                          putTasks(t)
                        }}
                      />
                    </div>
                    <div className='cardlist__icon'>
                      <img
                        src={trashIcon}
                        className='cardlist__delete-icon'
                        alt="Iamgem de uma lixeira, funcao de excluir a tarefa"
                        onClick={() => {
                          deleteTasks(t.id)
                        }}
                      />
                    </div>
                  </div>
                </article>
              )
            })
          }

        </section>
      </main>

      <footer className='footer-list'>
        <p className='footer-list__right-text'> 2026, React List - Todos os direitos reservados </p>
      </footer>

    </>
  )
}
export default App

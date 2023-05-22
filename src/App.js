import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dcotor Appointment',
      day: 'Feb 5th 1:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 5th 1:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th 1:30',
      reminder: false,
    },

  ]
  )

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      { tasks.length>0?
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
        />:'No Tasks To Show'
      }
    </div>
  );
}

export default App;

import React, { useState, useMemo } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  Logo, 
  Form, 
  Input, 
  Button, 
  Wrapper 
} from './styles';

import { MyTasksList } from '../../components/MyTasksList';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function onAdd() {
    if(newTask){
        const data = {
            id: new Date().getTime(),
            title: newTask,
            done: false,
        }

        setTasks(oldState => [...oldState, data])
        setNewTask('');
    }
  }

  function onMarkTaskAsDone(id: number) {
      if(id){
          const taskChanged = tasks.filter(task => task.id === id).map(doneStatus => {
              doneStatus.done = !doneStatus.done;
              return doneStatus
          })
          setTasks(oldTasks => oldTasks.filter(task => [task.id !== id, taskChanged]))
      }
  }

  function onRemove(id: number) {
      setTasks(oldState => oldState.filter(task => task.id !== id));
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Form>
          <Input 
            placeholder="Adicione uma nova tarefa" 
            placeholderTextColor="#808080"
            value={newTask}
            onChangeText={setNewTask}
          />
          <Button onPress={onAdd}>
            <AntDesign name="pluscircleo" size={24} color="#F2F2F2" />
          </Button>
        </Form>
      </Header>

      <Wrapper>
        <MyTasksList 
          tasks={tasks} 
          onPress={onMarkTaskAsDone} 
          onRemove={onRemove} 
          counterCreated={String(tasks.length)}
          counterCompleted={String(tasks.filter((item) => item.done === true).length)}
        />
      </Wrapper>
    </Container>
  )
}

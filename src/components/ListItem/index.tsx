import { Feather } from '@expo/vector-icons';

import { Container, Title, Button, Checkbox } from './styles';

interface TaskItemProps {
  id: number;
  title: string;
  done: boolean;
}

type ListItemProps =  {
  task: TaskItemProps;
  onPress: (id: number) => void;
  onRemove: (id: number) => void
}

export function ListItem({ task, onPress, onRemove } : ListItemProps) {
  return (
    <Container>
      <Checkbox
        onPress={() => onPress(task?.id)}
        done={task?.done}>
          {task?.done && <Feather name="check" size={14} color="#F2F2F2" />}          
      </Checkbox>
      <Title done={task?.done}>{task.title}</Title>
      <Button onPress={() => onRemove(task.id)}>
        <Feather name="trash-2" size={20} color="#808080" />
      </Button>
    </Container>
  )
}
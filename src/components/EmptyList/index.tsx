import { Container, Title, Subtitle, Clipboard } from './styles';

export function EmptyList() {
  return (
    <Container>
      <Clipboard />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
    </Container>
  )
}
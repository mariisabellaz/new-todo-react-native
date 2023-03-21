import React from 'react';
import { FlatList } from 'react-native';

import { Label, Container, Wrapper, Counter, CounterLabel, Header } from './styles';
import { ListItem } from '../ListItem';
import { EmptyList } from '../EmptyList';


interface TaskItemProps {
    id: number;
    title: string;
    done: boolean;
}

type TasksListProps =  {
    tasks: TaskItemProps[];
    onPress: (id: number) => void;
    onRemove: (id: number) => void
    counterCreated: string;
    counterCompleted: string;
}

export function MyTasksList({
    tasks, 
    onRemove, 
    onPress, 
    counterCreated,
    counterCompleted
}: TasksListProps) {
    return (
        <Container>
            <Header>
                <Wrapper>
                    <Label type="created">Criadas</Label>
                    <Counter>
                        <CounterLabel>{counterCreated}</CounterLabel>
                    </Counter>
                </Wrapper>

                <Wrapper>
                    <Label type="completed">Concluídas</Label>
                    <Counter>
                        <CounterLabel>{counterCompleted}</CounterLabel>
                    </Counter>
                </Wrapper>

            </Header>
            <FlatList
                data={tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => {
                    return (
                        <ListItem 
                            onPress={onPress} 
                            onRemove={onRemove} 
                            task={item}
                        />
                    )
                }}
                ListEmptyComponent={<EmptyList/>}
                style={{marginTop: 32 }}
            />
        </Container>
        
    )
}
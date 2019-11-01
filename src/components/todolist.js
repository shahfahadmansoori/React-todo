import React from 'react';
import  TodoListItem  from '../components/todolistitem';

const TodoList = (props) =>( 
            <ul>{props.todolist.map(items => {
                   return <TodoListItem todolistitem={items} deletetodo={props.deletetode}/>
                 })}
            </ul>
            );

export default TodoList;
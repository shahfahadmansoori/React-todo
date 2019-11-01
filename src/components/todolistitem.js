import React from 'react';
import  styled  from '@emotion/styled'
import { TiBackspace , TiTick } from "react-icons/ti";

const Item = styled.li
`
background:#dfe6e9;
font-size:30px;
margin-bottom:20px;
padding:30px;
display:flex;
justify-content:space-between;
.action{
  visibility:hidden;
}
&:hover .action{
  visibility:visible;
}
button{
  background:transparent;
  border:0;
  font-size:30px;
  padding-right:20px;
}
}
`
const TodoListItem = (props) => {
  return(
          <Item>
             {props.todolistitem.name}
             <div className='action'>
               <button onclick={() => props.deletetodo(props.todolistitem.id)}>
                <TiBackspace/>
               </button>
               <button>
                 <TiTick />
               </button>
             </div>
          </Item>
        )};

export default TodoListItem;
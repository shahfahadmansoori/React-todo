import React from 'react';
import TodoList from '../components/todolist';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx , css } from '@emotion/core';


const Todocontainer = styled.div
`width:80%;
max-width:1100px;
backgroung:#dfe6e9;
margin: 50px auto;
.Todo-btn{
  text-align:right;
  button{
    background:#747d8c;
    padding:15px 30px;
    font-size:25px;
    border:0;
   margin-bottom:20px;
  }
}
`
class  Todo extends React.Component{
  constructor(props){
    super(props);
       this.state = {
         displayform:false
        };
  };
 
  FormHandler(event){
    return (this.setstate = {...this.state , displayform:true});
  }
       render(){
           const {todos , deletetodo } = this.props; 
           const {displayform} = this.state;
       <Todocontainer>
             <TodoList todolist={todos} deletetodo={deletetode}/>
                 <div className="Todo-btn">
                  <button onClick = {this.FormHandler} className="field">Add Todo</button>
                  </div>
                  <form css={css`
                  text-align:center;
                  margin-bottom:30px;
                  input:not([type=submit]){
                   disply:block;
                   width:100%;
                   padding:10px;
                   margin-bottom:20px;
                  }
                  .field{
                     background:#747d8c;
                     padding:15px 30px;
                     font-size:25px;
                     border:0;
                     margin-bottom:20px;
                    }
                  `}>
                    <input type="text"/>
                    <input type="submit" className="field"/>
                   
                  </form>
          </Todocontainer>
            
          } 
        };

export default Todo;
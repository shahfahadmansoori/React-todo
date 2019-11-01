import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import Todo from './components/todo';
 
const id = 0;
const generateid = () => {
    return id += 1;
}



class App extends React.component{ 
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
    }
    deletetode(id){
        const newtodo = (this.state.todos.filter(todo => todo.id !== id));
        this.setstate({todo : newtodo});
    }
        render(){
            <div>
              <Header/>
              <Todo todos={this.state.todos} deletetode={this.deletetode} /> 
              </div>
        };
}

export default App;
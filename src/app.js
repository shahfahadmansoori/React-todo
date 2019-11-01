import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import todo from './components/todo';


class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
              <Header />
              <todo /> 
              </div>
          
         ); }
       
}

export default App;
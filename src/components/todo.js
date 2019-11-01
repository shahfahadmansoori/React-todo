import React from 'react';
import todolist from '../components/todolist';
import { styled } from '@emotion/styled'

class todo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <todoconatiner>
            <todolist />
          </todoconatiner>
        )
    }
}

export default 'todo';
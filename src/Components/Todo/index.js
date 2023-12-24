
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TaskCreator from "../../modal/TaskCreator"
import TodoCard from '../Card/TodoCard';


const Container = styled.div`
  display: flex;
  justify-content: center;

`;
const Wrapper = styled.div`
  margin: 70px 30px;
  width: 1600px;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
   
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px 20px 0px 0px;
  background-color: #cae9ea;
`;
const CardWrapper = styled.div`
 max-width:95%
  height: auto;
  margin-bottom: 20vh;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  min-height:200px;
  @media screen and (max-width:700px) {
    flex-direction:column;
    justify-content: space-around;

       
  }
`;
const H1 = styled.div`
  margin-top: 5%;
  font-size: 80px;
  font-weight: 600;
  font-family: "Baloo Tammudu 2";
  letter-spacing: 1px;
  @media screen and (max-width: 500px) {
    font-size: 55px;
    font-weight: 560;
       
  }
`;
const Button = styled.button`

margin-bottom:5%;
font-size: 20px;
font-weight: 600;
font-family: "Baloo Tammudu 2";
padding: 13px 20px 13px;
outline: 0;
border: 2px solid black;
border-radius:12px;
cursor: pointer;
background-color: rgba(0, 0, 0, 0);
transition: all 0.4s ease-in-out;
:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    border: 2px solid ${({ theme }) => theme.primary};
    
    .mobile-device:hover {
       
        cursor: default; 
      }
`;

const Todo = () => {
    
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const deleteTodo = (index) => {
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let editList = taskList
        editList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(editList))
        setTaskList(editList)
        window.location.reload();
    }

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => setModal(!modal);
    useEffect(()=>{
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    

  return (
    <Container>
      <Wrapper>
        <Div>
          <H1>ToDo - List</H1>
          <Button onClick={()=> setModal(true)}>create a new task</Button>
        </Div>
        <CardWrapper>
        {taskList && taskList.map((obj, index) => <TodoCard taskObj={obj} index={index} deleteTodo = {deleteTodo} updateListArray={updateListArray}/>)}
        </CardWrapper>
        <TaskCreator toggle={toggle} modal={modal} save = {saveTask} />
      </Wrapper>
    </Container>
  );
};

export default Todo;

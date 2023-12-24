import React from "react";
import styled from "styled-components";
import { CardBody } from "reactstrap";
import TaskEdit from "../../modal/TaskEdit";
import  { useState } from 'react';

const Container = styled.div`
display:flex;
@media screen and (max-width:700px) {
justify-content: center;
`

const Cards = styled.div`
margin:10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.49); 
min-width:250px;
border-radius:7px;
`
const H5 = styled.div`
border-top-left-radius: 7px;
border-top-right-radius: 7px;
text-align:center;
font-size:25px;
font-weight: 500;
font-family: "Baloo Tammudu 2";
letter-spacing: 1px;
padding-top:7px;
min-height:40px;


`
const CardText = styled.div`
text-align:center;
font-size:20px;
min-height:30px;

`

const Div = styled.div`
text-align:end;
font-size:22px;
padding-top:100px;

`
const I = styled.div`

font-size:22px;
padding:5px;

`

const TodoCard = ({ taskObj, index, deleteTodo, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const deleteCard = () => {
    deleteTodo(index);
  };
  const updateTask = (obj) => {
    updateListArray(obj, index);
  };
  const colors = [
    {
      primaryColor: "rgb(77, 226, 72)",
      secondaryColor: "rgba(77, 226, 72, 0.315)",
    },
    {
      primaryColor: "rgb(255, 210, 60)",
      secondaryColor: "rgba(255, 209, 60, 0.619)",
    },
    {
      primaryColor: "#5D93E1",
      secondaryColor: "rgba(58, 104, 255, 0.301)",
    },
    {
      primaryColor: "rgb(255, 57, 57)",
      secondaryColor: "rgba(255, 57, 57, 0.424)",
    },
    {
      primaryColor: "rgb(135, 60, 255)",
      secondaryColor: "rgb(135, 60, 255, 0.424)",
    },
    {
      primaryColor: "rgb(255, 85, 43)",
      secondaryColor: "rgb(255, 85, 43, 0.424)",
    },
  ];
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <Cards style={{"border-bottom": `4px solid ${colors[index % 6].primaryColor}`}}>
        <H5  style={{ background: colors[index % 6].secondaryColor }}>
          {taskObj.Name}
        </H5>
        <CardBody>
          <CardText   style={{background: "white"}}>
            {taskObj.Description}
          </CardText>
          <Div className="icons">
            <I className="far fa-edit edit"style={{color: colors[index % 6].primaryColor,cursor: "pointer",}} onClick={() => setModal(true)}></I>
            <I className="fas fa-trash" style={{ color: colors[index % 6].primaryColor,cursor: "pointer"}}onClick={deleteCard}></I>
          </Div>
        </CardBody>
      </Cards>
      <TaskEdit modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </Container>
  );
};

export default TodoCard;

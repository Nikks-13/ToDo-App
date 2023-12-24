import React, { useState, useRef ,useEffect  } from 'react';
import { Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

const Form = styled.div``;
const Div = styled.div`
display:flex;
flex-direction:column;
margin: 0 20px;
padding-top: 10px;
padding-bottom: 10px;
`;
const Label = styled.label`
font-size:20px;
padding-bottom:10px;
padding-left:5px;
font-family: 'Courgette', cursive;
`; 

const Input = styled.input`
padding:10px;
margin:10px 0;
border: 2px solid black;
border-radius: 10px;
font-family: "Baloo Tammudu 2";
font-size: 20px;
font-weight:400;

`; 
const Textarea = styled.textarea`
padding:20px;
margin:10px 0;
border: 2px solid black;
border-radius: 10px;
font-family: "Baloo Tammudu 2";
font-size: 20px;
font-weight:400;
`;

const Button1 = styled.button`
background-color: rgba(194, 251, 215, 0.8);
border-radius: 100px;
box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
color: green;
cursor: pointer;
display: inline-block;
font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
padding: 7px 20px;
text-align: center;
text-decoration: none;
transition: all 250ms;
border: 0;
font-size: 16px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

:hover {
    box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
    }

`;
const Button2 = styled.button`
background-color: rgba(255, 153, 153, 0.7);
border-radius: 100px;
box-shadow: rgba(255, 0, 0, .1) 0 -25px 18px -14px inset, rgba(255, 0, 0, .1) 0 1px 2px, rgba(255, 0, 0, .1) 0 2px 4px, rgba(255, 0, 0, .1) 0 4px 8px, rgba(255, 0, 0, .1) 0 8px 16px, rgba(255, 0, 0, .1) 0 16px 32px;

color: red;
cursor: pointer;
display: inline-block;
font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
padding: 7px 20px;
text-align: center;
text-decoration: none;
transition: all 250ms;
border: 0;
font-size: 16px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

:hover {
    box-shadow: rgba(255, 0, 0, .2) 0 -25px 18px -14px inset, rgba(255, 0, 0, .15) 0 1px 2px, rgba(255, 0, 0, .15) 0 2px 4px, rgba(255, 0, 0, .15) 0 4px 8px, rgba(255, 0, 0, .15) 0 8px 16px, rgba(255, 0, 0, .15) 0 16px 32px;

    transform: scale(1.05) rotate(-1deg);
    }

`;


const TaskEdit = ({modal,toggle,updateTask,taskObj}) => {

    const form = useRef();
    const [taskname, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e)=>{
        const {name, value} = e.target
        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }

    
    useEffect(()=>{
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[taskObj.Description, taskObj.Name])
    const update = (e) =>{
        e.preventDefault();
        let editObj = {}
        editObj["Name"] = taskname
        editObj["Description"] = description
        updateTask(editObj)
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader style={{
        fontFamily: 'Alkatra',
        fontWeight: 'bold',
        
      }} toggle={toggle}>Update Your Todo Task</ModalHeader>
            <ModalBody>
               <Form ref={form}>
                   <Div >
                       <Label> Update Task Name:</Label>
                       <Input type="text"  placeholder="Edit your task !"  value={taskname} onChange={handleChange} name="taskName" required/>
                   </Div>
                   <Div>
                       <Label> Update Description:</Label>
                       <Textarea  rows="5"  placeholder="Edit Description about Task!"value={description} onChange={handleChange} name="description"></Textarea>
                   </Div>
               </Form>              
            </ModalBody>
            <ModalFooter>
                <Button1 className="createBtn" onClick={update}>Update</Button1>
                <Button2 className="cancelBtn" onClick={toggle}>Cancel</Button2>
            </ModalFooter>
        </Modal>
    );
};

export default TaskEdit;
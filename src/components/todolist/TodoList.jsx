import React, { useState } from 'react';
import Buttun from '../Buttun'
import Input from '../Input'
import { nanoid } from 'nanoid';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import './todolist.scss'

const TodoListForm = () => {
    const [fullName, setFullName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [todos, setTodos] = useState([]);

    const clearForm = () => {
        setFullName('');
        setBirthdate('');
        setPhoneNumber('');
        setAddress('');
        setGender('');
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = { fullName, birthdate, phoneNumber, address, gender };

        if (editIndex !== null) {
            const updatedTodos = [...todos];
            updatedTodos[editIndex] = newTodo;
            setTodos(updatedTodos);
            setEditIndex(null);
        } else {
            setTodos([...todos, newTodo]);
        }

        clearForm()
    };
    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };
    const handleEdit = (index) => {
        const todoToEdit = todos[index];
        setFullName(todoToEdit.fullName);
        setBirthdate(todoToEdit.birthdate);
        setPhoneNumber(todoToEdit.phoneNumber);
        setAddress(todoToEdit.address);
        setGender(todoToEdit.gender);
        setEditIndex(index);
    };
    return (
        <section className='todolist'>
            <h1 className='todolist-title'>Todo List</h1>
            <form className='todolist-form-control' onSubmit={handleSubmit}>
                <Input required type={'text'} placeholder={'Full Name'} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <Input required type={'text'} placeholder={'Birthdate'} value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                <Input required type={'number'} placeholder={'Tel: 998901234567'} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <Input required type={'text'} placeholder={'Address'} value={address} onChange={(e) => setAddress(e.target.value)} />
                <div className='todolist-form-radioInput'>
                    <label> <Input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male </label>
                    <label> <Input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female </label>
                </div>
                <Buttun type="submit">{editIndex !== null ? 'Update' : 'Submit'}</Buttun>
            </form>
            <div className="todolist-users">
                {todos?.map((todoItem, index) => (
                    <li key={nanoid()}>
                        <div className='todos-title'>
                            <p> <span>Full Name:</span> {todoItem.fullName}</p>
                            <p> <span>Birthdate: </span> {todoItem.birthdate}</p>
                            <p> <span>Phone Number:</span> {todoItem.phoneNumber}</p>
                            <p> <span>Address:</span> {todoItem.address}</p>
                            <p> <span>Gender:</span> {todoItem.gender}</p>
                        </div>
                        <div className='todos-btns'>
                            <Buttun className='pen' onClick={() => handleEdit(index)}> <FaPen /> </Buttun>
                            <Buttun className='trash' onClick={() => handleDelete(todoItem.id)}> <FaTrashAlt /> </Buttun>
                        </div>
                    </li>
                ))}
            </div>
        </section>
    );
};

export default TodoListForm;
import React, { useState } from 'react';
import Input from './Input';
import Buttun from './Buttun';

const Nimadur = () => {
    const [fullName, setFullName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [todos, setTodos] = useState([]);

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

        setFullName('');
        setBirthdate('');
        setPhoneNumber('');
        setAddress('');
        setGender('');
    };

    const handleDelete = (index) => {
        const updatedTodos = todos.filter(( _, i) => i !== index);
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
        <div className="App">
            <form className='todolist-form-control' onSubmit={handleSubmit}>
                <Input required type={'text'} placeholder={'Full Name'} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <Input required type={'text'} placeholder={'Birthdate'} value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                <Input required type={'number'} placeholder={'Tel: 998901234567'} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <Input required type={'text'} placeholder={'Address'} value={address} onChange={(e) => setAddress(e.target.value)} />
                <div>
                    <label> <Input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male </label>
                    <label> <Input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female </label>
                </div>
                <Buttun type="submit">{editIndex !== null ? 'Update' : 'Submit'}</Buttun>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <p>Name: {todo.fullName}</p>
                        <p>Birthdate: {todo.birthdate}</p>
                        <p>Phone: {todo.phoneNumber}</p>
                        <p>Address: {todo.address}</p>
                        <p>Gender: {todo.gender}</p>
                        <Buttun onClick={() => handleDelete(index)}>Delete</Buttun>
                        <Buttun onClick={() => handleEdit(index)}>Edit</Buttun>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nimadur;

import '../App.css';
import { useState } from 'react';

const Form = () => {
    const [state, setState] = useState({
        name: '',
        nameError: '',
        lastName: '',
        lastNameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        confirmPassword: '',
        confirmPasswordError: ''
    })

    const onChange = (e) => {
        setState({
            ...state
        })


        if (e.target.name === 'name') {
            if (e.target.value.length < 3 && e.target.value.length !== 0) {
                setState({
                    ...state,
                    name: e.target.value,
                    nameError: 'El nombre debe tener al menos 3 caracteres'
                })
            } else {
                setState({
                    ...state,
                    name: e.target.value,
                    nameError: ''
                })
            }
        }
        if (e.target.name === 'lastName') {
            if (e.target.value.length < 3 && e.target.value.length !== 0) {
                setState({
                    ...state,
                    lastName: e.target.value,
                    lastNameError: 'El apellido debe tener al menos 3 caracteres'
                })
            } else {
                setState({
                    ...state,
                    lastName: e.target.value,
                    lastNameError: ''
                })
            }
        }
        if (e.target.name === 'email' && e.target.value.length !== 0) {
            if (e.target.value.length < 3) {
                setState({
                    ...state,
                    email: e.target.value,
                    emailError: 'El email debe tener al menos 3 caracteres'
                })
            } else {
                setState({
                    ...state,
                    email: e.target.value,
                    emailError: ''
                })
            }
        }
        if (e.target.name === 'password' && e.target.value.length !== 0) {
            if (e.target.value.length < 3) {
                setState({
                    ...state,
                    password: e.target.value,
                    passwordError: 'La contraseña debe tener al menos 3 caracteres'
                })
            } else {
                setState({
                    ...state,
                    password: e.target.value,
                    passwordError: ''
                })
            }
        }
        if (e.target.name === 'confirmPassword' && e.target.value.length !== 0) {
            if (e.target.value !== state.password) {
                setState({
                    ...state,
                    confirmPassword: e.target.value,
                    confirmPasswordError: 'Las contraseñas no coinciden'
                })
            } else {
                setState({
                    ...state,
                    confirmPassword: e.target.value,
                    confirmPasswordError: ''
                })
            }
        }
    }

    return (
        <div>
            <form className="form">
                <label htmlFor="name" >Nombre</label>
                <input type="text" name='name' onChange={onChange} />
                {state.nameError ? <p className='errorMsg' >{state.nameError}</p> : null}
                <label htmlFor="lastName" >Apellido</label>
                <input type="text" name='lastName' onChange={onChange} />
                {state.lastNameError ? <p className='errorMsg'>{state.lastNameError}</p> : null}
                <label htmlFor="email" >Email</label>
                <input type="email" name='email' onChange={onChange} />
                {state.emailError ? <p className='errorMsg'>{state.emailError}</p> : null}
                <label htmlFor="password" >Contraseña</label>
                <input type="password" name='password' onChange={onChange} />
                {state.passwordError ? <p className='errorMsg'>{state.passwordError}</p> : null}
                <label htmlFor="confirmPassword" >Confirmar Contraseña</label>
                <input type="password" name='confirmPassword' onChange={onChange} />
                {state.confirmPasswordError ? <p className='errorMsg'>{state.confirmPasswordError}</p> : null}
            </form>
        </div>
    )
}

export default Form;
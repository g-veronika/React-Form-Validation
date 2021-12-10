import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'

const FormSignup = () => {

    const {handleChange, values, handleSubmit} = useForm(validate); 

    return (
        <div className="form-content-right">
            <form className="form"
            onSubmit={handleSubmit}
            >
                <h1>Get started with us today! Create your account by filling out the information below.</h1>

                <div className="form-inputs">
                    <label htmlFor="username" 
                    className="form-label">
                        Username
                    </label>
                    <input 
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                    
                </div>

                <div className="form-inputs">
                    <label htmlFor="email" 
                    className="form-label">  
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" 
                    className="form-label">  
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                     
                </div>

                <div className="form-inputs">
                    <label htmlFor="password2" 
                    className="form-label">  
                        Confirm Password
                    </label>
                    <input 
                        id="password2"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password2"
                        value={values.password2}
                        onChange={handleChange}
                        />
                </div>

                <button className="form-input-button"
                type="submit">
                    Sign Up
                </button>

                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>

            </form>
        </div>
    )
}

export default FormSignup

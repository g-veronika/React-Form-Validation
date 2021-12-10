import React from 'react'

const FormSignup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
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
                        placeholder="Enter your username">
                        </input>
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
                        placeholder="Enter your email">
                        </input>
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" 
                    className="form-label">  
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password"
                        name="email"
                        className="form-input"
                        placeholder="Enter your password">
                        </input>
                </div>

                <div className="form-inputs">
                    <label htmlFor="password2" 
                    className="form-label">  
                        Confirm Password
                    </label>
                    <input 
                        id="password2"
                        type="password"
                        name="email"
                        className="form-input"
                        placeholder="Enter your password2">
                        </input>
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

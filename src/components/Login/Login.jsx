import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {
    const {login} = useAuth ()
    const navigate = useNavigate()  
    const [formData, setFormData] = useState({
        email:"",
        password:"",  
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value });
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            //viene del contexto
            await login(formData.email, formData.password);
            console.log("login exitoso");
            navigate("/admin",{replace: true});

        } catch (error) {
            console.error(error);
            alert("error al inicial sesión");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Iniciar Sesión</h2>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Login</button>

        </form>
    )

}
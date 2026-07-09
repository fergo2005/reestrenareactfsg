import { useState } from "react";
import { FormUI } from "./FormUI";
import { validateForm } from "../../utils/validateForms";
import "./Form.css";

export const FormContainer = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({}); //lo vamos a utilizar cuando hacemos submit para mostrar los errores de validación
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
    };

    const handleSubmit = (e) => {  
        e.preventDefault();

        const error = validateForm(formData);
        
        if (Object.keys(error).length > 0) {
            //si hay errores, los guardamos en el estado. No se envía el formulario y se muestran los errores
            setErrors(error);
        } else {
            //si no hay errores, reseteamos el estado (errors) por si previamente tuvo errores. se envía el formulario. Aquí podríamos hacer una llamada a una API o mostrar un mensaje de éxito
            console.log("Formulario enviado con éxito:", formData);
            //mostramos en la consola el objeto formData creado con los datos ingresados por el usuario. En una aplicación real, aquí podríamos hacer una llamada a una API para enviar los datos al servidor o mostrar un mensaje de éxito al usuario.
            setErrors({}); //limpiamos los errores si el formulario se envió correctamente, lo mismo que si el usuario corrige los errores y vuelve a enviar el formulario, se limpian los errores anteriores.
            console.log(">>>Set Errors [{}] : ", formData);
            setFormData({
                name: "",
                lastName: "",
                email: "",
                message: ""
            }); //limpiamos el formulario después de enviarlo correctamente, reseteando el estado formData a sus valores iniciales. Esto hace que los campos del formulario se vacíen y estén listos para una nueva entrada.
        }

        const validationErrors = validateForm(formData);
        setErrors(validationErrors); 

    };

    /* return <FormContainer/>; */
    return (<FormUI onChange={handleChange} onSubmit={handleSubmit} formData={formData} errors={errors} />);
};



/* del return */

/* {
<div className="form-container">
            {children}
        </div>
} */

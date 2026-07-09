export const FormUI = ({ onChange, onSubmit, formData, errors }) => { //recibimos por props las funciones onChange y onSubmit, el estado formData y el estado errors desde el componente FormContainer. Esto nos permite mantener la lógica de manejo de estado y validación en el contenedor, mientras que el componente FormUI se encarga únicamente de la presentación del formulario.(yo agregue las llaves)
    return (
        <form onSubmit={onSubmit}>
            <h2>Formulario de Contacto</h2>

            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    type="text"
                    onChange={onChange}
                /* className={errors.name ? "error" : ""} */
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="lastName">Apellido:</label>
                <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    type="text"
                    onChange={onChange}
                /* className={errors.lastName ? "error" : ""} */
                />
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    type="email"
                    onChange={onChange}
                /* className={errors.email ? "error" : ""} */
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                /* className={errors.message ? "error" : ""} */
                />
                {errors.message && <p className="error-message">{errors.message}</p>}
            </div>

            <button className="btn">Enviar</button>

        </form>
    );
}; 
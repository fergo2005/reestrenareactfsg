export const validateForm = (formData) => {
    const errors = {};

        if (!formData.name) {
        errors.name = "Debe ingresar un nombre";
    }

    if (!formData.lastName) {
        errors.lastName = "Debe ingresar un apellido";
    }

    if (!formData.email) {
        errors.email = "Debe ingresar un email";

    } else if (!formData.email.includes("@")) {
    /* } else if (!/\S+@\S+\.\S+/.test(formData.email)) { */

        errors.email = "Debe ingresar un email válido";
    }

    if (!formData.message) {
        errors.message = "El mensaje no puede estar vacío";
    }

    return errors;
};
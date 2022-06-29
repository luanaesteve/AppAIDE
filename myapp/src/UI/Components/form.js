import React, {useState} from 'react';

const Formulario = () => {
	
	const [inputCorreo, cambiarInputCorreo] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ..
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</>
	);
}
 
export default Formulario;

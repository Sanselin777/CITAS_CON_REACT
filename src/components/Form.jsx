import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [namePuppy, setNamePuppy] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length) {
      setNamePuppy(paciente.namePuppy);
      setOwner(paciente.owner);
      setEmail(paciente.email);
      setDate(paciente.date);
      setSymptoms(paciente.symptoms);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([namePuppy, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }
    //making object
    const pacienteObject = {
      namePuppy,
      owner,
      email,
      date,
      symptoms,
    };

    if (paciente.id) {
      //Editando paciente
      pacienteObject.id = paciente.id;
      const pacientesActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? pacienteObject : pacienteState
      );

      setPacientes(pacientesActualizado);
      setPaciente({});
    } else {
      //Add new paciente
      pacienteObject.id = crypto.randomUUID();
      setPacientes([...pacientes, pacienteObject]);
    }

    setNamePuppy("");
    setOwner("");
    setDate("");
    setEmail("");
    setSymptoms("");
    setError(false);
  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 mb-10">
        Anade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Nombre de la Mascota"
            value={namePuppy}
            onChange={(e) => setNamePuppy(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Nombre del Propietario"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="date"
          >
            Alta
          </label>
          <input
            type="date"
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Nombre de la Mascota"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Sintomas
          </label>
          <textarea
            type="text"
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Form;

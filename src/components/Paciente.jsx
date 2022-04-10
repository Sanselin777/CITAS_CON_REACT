const Paciente = ({ paciente, setPaciente, deletePacientes }) => {
  const { namePuppy, owner, email, date, symptoms, id } = paciente;
  const handleDelete = () => {
    const confirma = confirm("Eliminaras este paciente?");
    if (confirma) deletePacientes(id);
  };
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{""} <span className="font-normal normal-case">{namePuppy}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{""}{" "}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{""} <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{""} <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{""}{" "}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const getLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLs);
    };
    getLs();
  }, []);

  useEffect(() => {
    const setPacientesLs = () => {
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
    };
    setPacientesLs();
  }, [pacientes]);

  const deletePacientes = (id) => {
    const filterPacientes = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(filterPacientes);
  };
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePacientes={deletePacientes}
        />
      </div>
    </div>
  );
}

export default App;

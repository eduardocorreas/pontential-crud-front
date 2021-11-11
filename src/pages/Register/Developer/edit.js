import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import api from "../../../services/api";

function EditDeveloper() {
  let { id } = useParams();

  const [developerId, setDeveloperId] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [hobbies, setHobbies] = useState("");

  async function update() {
    if (!name || !birthdate || !gender || !specialty || !hobbies) {
      toast.error("Todos os dados são obrigatórios");
    } else {
      await api
        .put("/developers/" + developerId, {
          id: developerId,
          nome: name,
          datanascimento: birthdate,
          sexo: gender,
          especialidade: specialty,
          hobby: hobbies,
        })
        .then(() => {
          window.location.assign("/");
          toast.success("Desenvolvedor atualizado com sucesso");
        })
        .catch(() => {
          toast.error("Erro ao cadastrar desenvolvedor");
        });
    }
  }

  async function getDeveloper() {
    await api
      .get("/developers/" + id)
      .then((res) => {
        setDeveloperId(res.data.id);
        setName(res.data.nome);
        setBirthdate(res.data.datanascimento);
        setGender(res.data.sexo);
        setHobbies(res.data.hobby);
        setSpecialty(res.data.especialidade);
      })
      .catch(() => {
        toast.error("Erro ao buscar o desenvolvedor");
      });
  }

  useEffect(() => {
    getDeveloper();
  }, []);

  return (
    <div className="mt-10 sm:mt-0">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Insira seu nome"
                      className="mt-1 p-2 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Data de nascimento
                    </label>
                    <input
                      type="date"
                      className="mt-1 h-10 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sexo
                    </label>
                    <select
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="m">Masculino</option>
                      <option value="f">Feminino</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Especialidade
                    </label>
                    <select
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                      <option value="fullstack">Fullstack</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Quais são seus hobbies?
                    </label>
                    <textarea
                      type="text"
                      rows={5}
                      placeholder="Hobbies"
                      className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => setHobbies(e.target.value)}
                      value={hobbies}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => update()}
                >
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditDeveloper;

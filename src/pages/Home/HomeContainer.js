import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import Home from "./Home";

function HomeContainer() {
  const [developers, setDevelopers] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function getDevelopers() {
    setLoading(true);
    await api
      .get("/developers")
      .then((res) => {
        setDevelopers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Erro ao buscar os desenvolvedores");
      });
  }

  async function searchDeveloper() {
    setLoading(true);
    await api
      .get("/developers?nome=" + name)
      .then((res) => {
        setDevelopers(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Erro ao buscar os desenvolvedores");
      });
  }

  async function deleteDeveloper(id) {
    setLoading(true);
    await api
      .delete("/developers/" + id)
      .then(() => {
        toast.success("Desenvolvedor excluído com sucesso!");
        getDevelopers();
      })
      .catch(() => {
        setLoading(false);
        toast.error("Erro ao excluir os desenvolvedores");
      });
  }

  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <>
      {!loading ? (
        <Home
          developers={developers}
          name={name}
          setName={setName}
          searchDeveloper={searchDeveloper}
          deleteDeveloper={deleteDeveloper}
        />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 text-center">
          Carregando
        </div>
      )}
    </>
  );
}

export default HomeContainer;

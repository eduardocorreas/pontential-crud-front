import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import Home from "./Home";

function HomeContainer() {
  const [developers, setDevelopers] = useState([]);
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

  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <>
      {!loading ? (
        <Home developers={developers} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 text-center">
          Carregando
        </div>
      )}
    </>
  );
}

export default HomeContainer;

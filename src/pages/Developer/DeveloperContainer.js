import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Developer from "./Developer";
import { useParams } from "react-router-dom";

function DeveloperContainer(match) {
  let { id } = useParams();
  const [developer, setDeveloper] = useState();

  async function getDevelopers() {
    await api
      .get("/developers/" + id)
      .then((res) => {
        setDeveloper(res.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  useEffect(() => {
    getDevelopers();
  }, []);

  return (
    <>
      {developer !== undefined ? (
        <Developer developer={developer} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 text-center">
          Carregando
        </div>
      )}
    </>
  );
}

export default DeveloperContainer;

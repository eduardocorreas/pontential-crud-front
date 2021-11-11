import React, { useState } from "react";
import { Link } from "react-router-dom";
import { image } from "faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function Home({ developers, name, setName, searchDeveloper, deleteDeveloper }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
      <div className=" mt-3 mb-3">
        <div className="md:flex lg:flex justify-between ">
          <div>
            <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl md:text-left text-center uppercase">
              <span className="inline">Talentos</span>{" "}
              <span className=" text-indigo-600">da nossa base</span>
            </h1>
            <h3 className="text-lg text-gray-500 text-center md:text-left lg:text-left">
              São {developers.length} profissionais preparados para encarar os
              desafios do seu projeto!
            </h3>
          </div>
          <div className="flex mt-5">
            <input
              type="text"
              name="price"
              id="price"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 pl-7 pr-12 sm:text-sm 
              border-indigo-500 rounded-md bg-white shadow-sm"
              placeholder="Buscar desenvolvedor"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="ml-8  h-10 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent
             rounded-md shadow-sm text-base font-medium bg-indigo-700 text-white hover:bg-indigo-900 hover:text-white"
              onClick={() => searchDeveloper()}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
          {developers.map((developer) => (
            <div className="flex flex-col rounded-lg m-2" key={developer.id}>
              <img
                src={image.avatar()}
                alt=""
                className="rounded-lg shadow-lg"
              />
              <div className="flex flex-col items-start mt-4">
                <h4 className="text-xl ">{developer.nome}</h4>
                <h5 className="text-lg text-indigo-600">
                  {developer.especialidade}
                </h5>
                <div className="flex">
                  <Link
                    to={"/developer/" + developer.id}
                    className="p-2 mr-2 leading-none rounded font-medium mt-3 bg-indigo-600 text-white text-xs uppercase"
                  >
                    <FontAwesomeIcon icon={faEye} /> Ver mais
                  </Link>

                  <button
                    className="p-2 mr-2 leading-none rounded font-medium mt-3 bg-red-600 text-white text-xs uppercase"
                    onClick={() => deleteDeveloper(developer.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} color="#fff" /> Excluir
                  </button>
                  <Link
                    to={"/developer/edit/" + developer.id}
                    className="p-2 leading-none rounded font-medium mt-3 bg-yellow-400 text-white text-xs uppercase"
                  >
                    <FontAwesomeIcon icon={faPen} color="#fff" /> Editar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

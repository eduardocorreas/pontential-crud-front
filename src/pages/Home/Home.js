import React from "react";
import { Link } from "react-router-dom";
import { image } from "faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faRocket } from "@fortawesome/free-solid-svg-icons";

function Home({ developers }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
      <div className=" mt-3 mb-3">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl md:text-left text-center uppercase">
          <span className="inline">Talentos</span>{" "}
          <span className=" text-indigo-600">da nossa base</span>
        </h1>
        <h3 className="text-lg text-gray-500">
          São {developers.length} profissionais preparados para encarar os
          desafios do seu projeto!
        </h3>
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
                  {developer.specialty}
                </h5>

                <Link
                  to={"/developer/" + developer.id}
                  className="p-2 leading-none rounded font-medium mt-3 bg-indigo-600 text-white text-xs uppercase"
                >
                  <FontAwesomeIcon icon={faEye} /> Ver mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";

import { image, phone } from "faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faFemale,
  faMale,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Developer({ developer }) {
  return (
    <div className="max-w-7xl mx-auto my-5 px-4 py-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div class="col-span-1 row-span-full ">
          <img
            src={image.avatar()}
            alt=""
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="col-span-3">
          <div className="grid grid-rows-3 gap-2">
            <div className="">
              <h1 className="text-2xl text-indigo-600 tracking-tight font-bold sm:text-2xl md:text-4xl md:text-left text-center">
                {developer.nome}
              </h1>
              <div className="grid grid-cols-3 my-3">
                <div>
                  {developer.sexo === "f" ? (
                    <>
                      <FontAwesomeIcon icon={faFemale} /> Desenvolvedora{" "}
                      {developer.especialidade}
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faMale} /> Desenvolvedor{" "}
                      {developer.especialidade}
                    </>
                  )}
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} /> {phone.phoneNumberFormat()}
                </div>
                <div>
                  <FontAwesomeIcon icon={faBirthdayCake} />{" "}
                  {developer.datanascimento.split("-").reverse().join("/")}
                </div>
              </div>
              <hr className="my-3" />
              <h3 className="text-lg font-bold">Hobby</h3>
              <p className="text-lg text-gray-500">
                {developer.hobby !== null ? developer.hobby : "Não informado"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
        <div className="flex flex-col rounded-lg m-2"></div>
      </div>
    </div>
  );
}

export default Developer;

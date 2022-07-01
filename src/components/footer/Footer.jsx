import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logoP from "../../assets/logoP.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-full mt-1 bg-[#1D4f15] text-white">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-5 border-b-2 sm:w-full border-[#1D4f15] py-6">
        <div className="flex flex-col md:flex-row">
          <img
            className="w-44 rounded-full border-none h-36 object-cover bg-transparent"
            src={logoP}
            alt="/"
          />
        </div>
        <div className="flex flex-col">
          <h6 className="font-bold uppercase pt-2 mb-2">Enlaces</h6>
          <ul>
            <li className="py-2 w-28">
              <Link to="/">Inicio</Link>
            </li>
            <li className="py-2 w-28">
              <Link to="/productos">Productos</Link>
            </li>
            <li className="py-2 w-28">
              <Link to="/productores">Productores</Link>
            </li>
            <li className="py-2 w-28">
              <Link to="/quienesomos">Quienes somos</Link>
            </li>
            <li className="py-2 w-28">
              <Link to="/contactanos">Contactanos</Link>
            </li>
{/*             <li className="py-2 w-28">
              <Link to="/blog">Blog</Link>
            </li> */}
          </ul>
        </div>
        <div className="flex flex-col">
          <h6 className="font-bold uppercase pt-2 mb-2">Redes Sociales</h6>
          <ul>
            <li className="list-elements">
              <FaFacebook className="w-8 h-8" />
            </li>
            <li className="list-elements">
              <FaInstagram className="w-8 h-8" />
            </li>
            <li className="list-elements">
              <FaTwitter className="w-8 h-8" />
            </li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase mb-4">Suscribete</p>
          <form className="flex flex-col">
            <input
              className="w-full p-2 mr-4 mb-4 text-center"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="w-full p-2 mr-4 mb-4 text-center"
              type="email"
              placeholder="Correo"
            />
            <button className="p-2 mb-4 bg-[#9EC08D] text-[#123C0D] font-semibold">
              Suscribete
            </button>
          </form>
        </div>
      </div>
      <div className="flex max-w-auto px-2 py-4 mx-auto bg-[#123C0D]">
        <p className="flex mx-auto text-center">MercaConsciente 2022</p>
      </div>
    </div>
  );
};

export default Footer;

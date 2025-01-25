import { CiMail } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Buttons from "./Buttons";


export default function About() {
    return (
        <div className="flex flex-col bg-[#161616] text-white items-center font-inter">
          <div id="sobre" className="w-[1216px] py-20 mac:w-11/12">
            <div className="flex flex-col gap-10 md:items-center">
                <h1 className="text-3xl text-[#BF91F9] font-chabul md:text-xl">Sobre mim</h1>
                <p className="text-xl font-medium md:text-lg">Brasília, Brasil</p>
                <p className="text-xl md:text-lg">
                  Olá, sou o João Victor Almeida, estudante de Análise e Desenvolvimento de Sistemas, com conhecimetos em HTML/CSS e Javascript. Atualmente desenvolvendo sites responsivos com <span className="text-[#BF91F9]">NextJS</span>
                </p>

                <div className="flex gap-5">
                  <div className="flex justify-center items-center bg-[#161616] w-10 h-10 rounded-full border border-[#BF91F9] cursor-pointer">
                    <CiMail className="text-[#BF91F9] w-5 h-5"/>
                  </div>
                  
                  <a href="https://www.instagram.com/jvsantosal/" target="_blank">
                  <div className="flex justify-center items-center bg-[#161616] w-10 h-10 rounded-full border border-[#BF91F9] cursor-pointer">
                      <FiInstagram className="text-[#BF91F9] w-5 h-5"/>
                  </div>
                  </a>

                  <a href="https://x.com/joaokkp1" target="_blank">
                  <div className="flex justify-center items-center bg-[#161616] w-10 h-10 rounded-full border border-[#BF91F9] cursor-pointer">
                      <FaXTwitter className="text-[#BF91F9] w-5 h-5"/>
                  </div>
                  </a>

                  <a href="https://github.com/joaovictoralmeida" target="_blank">
                  <div className="flex justify-center items-center bg-[#161616] w-10 h-10 rounded-full border border-[#BF91F9] cursor-pointer">
                      <FaGithub className="text-[#BF91F9] w-5 h-5"/>
                  </div>
                  </a>

                </div>

                <a href="https://drive.usercontent.google.com/u/0/uc?id=1AxlPRylQqzghIiT8-Ommk1ylmoz6BjPf&export=download">
                  <button className="bg-[#BF91F9] text-black font-inter rounded-sm py-2 px-10 my-3 w-60 h-10 md:w-full">
                    Baixar Currículo
                  </button>
                </a>
            </div>
          </div>
        </div>
    )
}
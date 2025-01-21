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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
                </p>

                <div className="flex gap-5">
                  <div className="flex justify-center items-center bg-[#161616] w-10 h-10 rounded-full border border-[#BF91F9] cursor-pointer">
                    <CiMail className="text-[#BF91F9] w-5 h-5"/>
                  </div>

                  <div className="flex justify-center items-center bg-[#161616] w-10 h-10 rounded-full border border-[#BF91F9] cursor-pointer">
                    <FiInstagram className="text-[#BF91F9] w-5 h-5"/>
                  </div>

                  <div className="flex justify-center items-center bg-[#161616] w-10 h-10 rounded-full border border-[#BF91F9] cursor-pointer">
                    <FaXTwitter className="text-[#BF91F9] w-5 h-5"/>
                  </div>

                  <div className="flex justify-center items-center bg-[#161616] w-10 h-10 rounded-full border border-[#BF91F9] cursor-pointer">
                    <FaGithub className="text-[#BF91F9] w-5 h-5"/>
                  </div>
                </div>
                <Buttons
                title="Baixar currículo"
                />
            </div>
          </div>
        </div>
    )
}
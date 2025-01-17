import { FaXTwitter } from "react-icons/fa6";
import { FiTwitch } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


export default function About() {
    return (
        <div className="flex flex-col items-center w-screen bg-[#161616] ">
          <div id="sobre" className="flex flex-col w-[1216px]">
            <div className="flex flex-col justify-center w-[1200px]">
              <h1 className="font-chabul text-[#BF91F9] text-4xl my-5">Sobre mim</h1>
              <p className="font-medium font-inter text-xl text-white my-5">Brasilia, Brasil</p>
              <p className="text-xl font-inter text-white my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="flex text-[#BF91F9] my-5">
              <FaXTwitter className="mx-5 w-6 h-6 cursor-pointer" />
              <FiTwitch className="mx-5 w-6 h-6 cursor-pointer" />
              <FiYoutube className="mx-5 w-6 h-6 cursor-pointer" />
              <FaGithub className="mx-5 w-6 h-6 cursor-pointer" />
            </div>
            <button className="my-5 px-[40px] py-[10px] bg-[#BF91F9] rounded-sm w-[200px] font-inter">Baixar currículo</button>
          </div>
        </div>
    )
}
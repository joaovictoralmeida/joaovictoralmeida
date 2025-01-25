import Buttons from "./Buttons";
import Cards from "./Cards";
import SecButton from "./SecButton";
import Login from "../../../public/images/Login.png"
import Tech from "../../../public/images/TechBlog.png"
import Natal from "../../../public/images/Natal.png"

export default function Projects() {
    return (
        <div className="flex flex-col bg-black w-screen">
            <div id="projetos" className="flex flex-col py-20 px-0 items-center">
                <div className="flex flex-col gap-20 w-[1216px] mac:w-11/12 mac:items-center">
                    <h1 className="font-chabul text-4xl text-[#BF91F9] font-semibold">Projetos</h1>
                    <div className="grid grid-cols-2 gap-16 mac:grid-cols-1">
                        <div className="flex flex-col">
                            <Cards
                            img={Login}
                            title="Login Page"
                            tech="React"
                            />
                            <div className="flex md:flex-col">
                                <Buttons title="Acessar projeto" link="https://login-page-seven-rho.vercel.app" />
                                <SecButton title="Acessar repositório" link="https://github.com/joaovictoralmeida/Login_Page"/>
                            </div>
                        </div>
                        
                        <div className="flex flex-col">
                            <Cards
                            img={Tech}
                            title="TechBlog"
                            tech="React"
                            />
                            <div className="flex md:flex-col">
                                <Buttons title="Acessar projeto" link="https://github.com/joaovictoralmeida/TechBlog" />
                                <SecButton title="Acessar repositório" link="https://github.com/joaovictoralmeida/TechBlog"/>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <Cards
                            img={Natal}
                            title="Feliz Natal"
                            tech="React, Javascript"
                            />
                            <div className="flex md:flex-col">
                                <Buttons title="Acessar projeto" link="https://feliz-natal-seven.vercel.app" />
                                <SecButton title="Acessar repositório" link="https://github.com/joaovictoralmeida/Feliz_Natal"/>
                            </div>
                        </div>


                        <div className="flex flex-col">
                            <Cards
                            title="Nome do Projeto"
                            tech="Tecnologias usadas no projeto"
                            />
                            <div className="flex md:flex-col">
                                <Buttons title="Acessar projeto" />
                                <SecButton title="Acessar repositório"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
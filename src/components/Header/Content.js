import Image from "next/image"
import Me from "../../../public/images/me.png"
import Buttons from "../Content/Buttons"

export default function Content() {
    return (
        <div className="flex flex-col items-center bg-[#0B0B0B] font-inter text-white">
            <div id="inicio" className="flex justify-center w-[1216px] mac:w-11/12 py-20">
                <div className="flex flex-row w-full justify-between items-center md:justify-center">
                    <div className="flex flex-col gap-10 md:items-center">
                        <p className="text-2xl font-medium md:text-lg">Olá, eu sou</p>
                        <h1 className="font-chabul text-5xl text-[#BF91F9] md:text-xl">João Victor Almeida</h1>
                        <p className="text-2xl font-medium md:text-lg">Desenvolvedor Frontend</p>
                        <Buttons
                        title="Linkedin"
                        />
                    </div>
                    <div className="md:hidden">
                        <Image
                        src={Me}
                        alt="Me"
                        width={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
} 
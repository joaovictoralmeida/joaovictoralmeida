import Image from "next/image"
import Arrow from "../../../public/images/arrow.png"

export default function Content() {
    return (
        <div className="flex justify-center w-screen bg-[#0B0B0B]">
            <div className="relative flex font-inter w-[1216px]">
                <div id="inicio" className="flex flex-col justify-center text-white w-[1216px]">
                    <p className="font-medium text-2xl m-3">Olá, eu sou</p>
                    <h1 className="text-[#BF91F9] text-4xl m-3 font-chabul">João Victor Almeida</h1>
                    <p className="font-medium text-2xl m-3">Desenvolvedor Frontend</p>
                    <button className="bg-[#BF91F9] text-black w-36 rounded-sm py-2 px-10 m-3">Linkedin</button>
                </div>
                <div>
                    <p className="absolute top-20 left-[450px] text-[#BF91F9] font-chabul">Apaixonado por café</p>
                    <div className="absolute top-16 left-[320px]">
                        <div>
                            <Image
                            alt="Arrow"
                            src={Arrow}
                            style={ {
                                width: 140,
                                height: 80,
                            }
                            }
                            />
                        </div>
                    </div>
            
                </div>
                <div>
                    <img className="mb-10" src="/images/me.png"/>
                </div>
            </div>
        </div>
    )
} 
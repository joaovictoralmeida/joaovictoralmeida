export default function Menu() {
    return (
        <div className="flex flex-col font-inter items-center bg-[#0B0B0B]">
            <div className="flex justify-center w-[1216px] py-3 mac:w-11/12">
                <div className="flex w-full justify-between md:justify-center">
                    <h1 className="font-chabul text-2xl text-[#BF91F9] md:hidden">João Victor Almeida</h1>
                    <div className="flex gap-10 text-white font-semibold">
                        <a  href="#inicio">Inicio</a>
                        <a  href="#sobre">Sobre mim</a>
                        <a  href="#projetos">Projetos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
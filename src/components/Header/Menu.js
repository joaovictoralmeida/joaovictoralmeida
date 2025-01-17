export default function Menu() {
    return (
        <div className="w-screen flex justify-center bg-[#0B0B0B] ">
            <div className="flex w-[1216px] font-inter p-3">
                <div className="flex justify-between w-full border-b pb-3">
                    <h1 className="text-[#BF91F9] text-xl font-chabul ">João Victor Almeida</h1>
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
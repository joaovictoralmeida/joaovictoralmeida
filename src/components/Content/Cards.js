import Image from "next/image"

export default function Cards({img, title, tech}) {
    return (
        <div className="flex flex-col w-[592px] h-[420px]">
            <div className="border-l-4 border-[#BF91F9] ">
                <Image src={img} alt="img" width={592} height={200}/>
            </div>
            <div className="flex flex-col gap-5 py-[32px] ">
                <h1 className="font-inter text-2xl font-medium text-white">{title}</h1>
                <p className="font-chabul font-medium text-[#BF91F9] text-xl">{tech}</p>
            </div>
        </div>
    )
}
export default function SecButton({link, title}) {
    return (
        <div>
            <a href={link}><button className=" text-[#BF91F9] font-inter border-2 border-[#BF91F9] rounded-sm py-2 px-10 my-3 ml-3 w-60 h-10">{title}</button></a>
        </div>
    )
}
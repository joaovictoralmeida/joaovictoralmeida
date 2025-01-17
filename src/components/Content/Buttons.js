export default function Buttons({title, link}) {
    return (
        <div>
            <a href={link}>
                <button className="bg-[#BF91F9] text-black font-inter rounded-sm py-2 px-10 my-3 w-60 h-10">{title}</button>
            </a>
        </div>
    )
}
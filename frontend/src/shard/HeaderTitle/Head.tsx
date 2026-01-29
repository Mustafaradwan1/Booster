
interface Ihead {
    h:string
    p:string
    btn?:string
    style:string
    styleInfo:string
}

const Head = ({h,p,btn,style,styleInfo}:Ihead) => {
  return (
    <div className={`${style} mb-12`}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{h}</h2>
        <div className={styleInfo}>
            <p className="text-gray-500">{p}</p>
            {btn && <button className="text-[var(--text-main-color)] cursor-pointer">{btn}</button>}
        </div>

    </div>
  )
}

export default Head
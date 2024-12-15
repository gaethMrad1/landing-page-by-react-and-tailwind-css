function Features({data}) {
  return (
    <section className="features bg-[#f6f6f6]" id="features">
        <div className="container mx-auto">
            <h1 className="uppercase w-fit mx-auto mt-[75px] mb-[70px] pb-[15px] relative text-[#333] text-[36px] before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:bg-blue-700 before:w-[30%] before:h-[5px] before:rounded-full">Features</h1>
            <div className="cards grid grid-cols-2 md:grid-cols-4 gap-[20px]">
                {data && data.map((data, index) => {
                    return (
                        <div key={index} className="card flex flex-col items-center shadow-2xl p-[20px] duration-500 hover:scale-[1.1]">
                            <i className={`${data.icon} w-[100px] h-[100px] flex justify-center items-center rounded-full text-[38px] mb-[25px] text-white bg-blue-600`}></i>
                            <h4 className="mb-[15px] text-center">{data.title}</h4>
                            <p className="text-center">{data.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Features
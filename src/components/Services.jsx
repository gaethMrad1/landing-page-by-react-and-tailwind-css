function Services({data}) {
  return (
    <section className="services py-[100px] bg-[#5ca9fb]" id="services">
        <div className="container mx-auto">
            <div className="section-title w-fit mx-auto text-center mb-[70px]">
                <h1 className="uppercase w-fit mx-auto mb-[15px] pb-[15px] relative text-white text-[36px] before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:bg-[#fff] before:w-[30%] before:h-[5px] before:rounded-full">Our Services</h1>
                <p className="text-[#ffffffbf] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="cards grid grid-cols-2 md:grid-cols-3 gap-[20px]">
                {data && data.map((data, index) => {
                    return (
                        <div key={index} className="card text-white flex flex-col items-center gap-[10px]">
                            <i className={`${data.icon} text-[42px] w-[120px] h-[120px] rounded-full bg-[#5ca9fb] flex justify-center items-center shadow-2xl duration-500 hover:rotate-45`}></i>
                            <h4 className="text-center">{data.name}</h4>
                            <p className="text-center">{data.text}</p>
                        </div>
                    )
                })}   
            </div>
        </div>
    </section>
  )
}

export default Services
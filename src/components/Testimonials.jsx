function Testimonials({data}) {
  return (
    <section className="testimonials py-[100px] bg-[#f6f6f6]" id="testimonials">
        <div className="container mx-auto">
            <h1 className="uppercase text-center w-fit mx-auto mt-[75px] mb-[70px] pb-[15px] relative text-[#333] text-[36px] before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:bg-blue-700 before:w-[30%] before:h-[5px] before:rounded-full">What our clients say</h1>
            <div className="cards grid grid-cols-2 md:grid-cols-3 gap-[20px]">
                {data && data.map((data, index) => {
                    return (
                        <div key={index} className="card flex flex-col items-center md:flex-row md:items-start gap-[15px]">
                            <img className="max-w-full rounded-full" src={data.img} alt={data.name} />
                            <div className="info text-center md:text-start">
                                <p className="text-[#777] mb-[15px]">{data.text}</p>
                                <h5 className="text-[#666]">{`-${data.name}`}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Testimonials
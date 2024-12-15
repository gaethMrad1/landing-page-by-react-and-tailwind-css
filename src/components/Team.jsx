function Team({data}) {
  return (
    <section className="team py-[100px]" id="team">
        <div className="container mx-auto">
            <div className="section-title w-fit mx-auto mb-[70px] text-center">
                <h1 className="uppercase w-fit mx-auto mb-[15px] pb-[15px] relative text-[#333] text-[36px] before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:bg-blue-700 before:w-[30%] before:h-[5px] before:rounded-full">Meet the Team</h1>
                <p className="text-[#777] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="cards grid grid-cols-2 md:grid-cols-4">
                {data && data.map((data, index) => {
                    return (
                        <div key={index} className="card flex flex-col items-center gap-[15px]">
                            <img className="max-w-full" src={data.img} alt={data.name} />
                            <h4 className="text-[#333] text-center">{data.name}</h4>
                            <span className="text-[#777] text-center">{data.job}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Team
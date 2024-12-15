function About({data}) {
  return (
    <section className="about bg-white py-[100px]" id="about">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
            <img className="max-w-full mx-auto md:mx-0" src="./img/about.jpg" alt="" />
            <div>
                <h1 className="uppercase mx-auto md:mx-0 w-fit mb-[15px] pb-[15px] relative text-[#333] text-[36px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:bg-blue-700 before:w-[40%] before:h-[5px] before:rounded-full">About Us</h1>
                <p className="my-[30px] text-[#777] text-center md:text-start">{data && data.paragraph}</p>
                <div className="why-us">
                    <h4 className="text-[#333] mb-[20px] mx-auto md:mx-0 w-fit">Why Choose Us?</h4>
                    <div className="lists flex md:items-center justify-between">
                        <ul className="px-[15px] w-2/4">
                            {data && data.Why.map((data, index) => {
                                return (
                                    <li key={index} className="flex gap-[10px] items-center mb-[15px]">
                                        <i className="fa-solid fa-check text-green-500"></i>
                                        <h6 className="text-[#777] text-[8px] md:text-[14px]">{data}</h6>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className="px-[15px] w-2/4">
                            {data && data.Why2.map((data, index) => {
                                return (
                                    <li key={index} className="flex gap-[10px] items-center mb-[15px] justify-self-start">
                                        <i className="fa-solid fa-check text-green-500"></i>
                                        <h6 className="text-[#777] text-[8px] md:text-[14px]">{data}</h6>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
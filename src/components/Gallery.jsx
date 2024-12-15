function Gallery({data}) {
  return (
    <section className="gallery py-[100px]" id="gallery">
        <div className="container mx-auto">
            <div className="section-title w-fit mx-auto text-center mb-[70px]">
                <h1 className="uppercase w-fit mx-auto mb-[15px] pb-[15px] relative text-[#333] text-[36px] before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:bg-blue-700 before:w-[30%] before:h-[5px] before:rounded-full">gallery</h1>
                <p className="text-[#777] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="images grid grid-cols-2 md:grid-cols-3 gap-[15px]">
                {data && data.map((data, index) => {
                    return (
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a key={index} href={data.largeImage} target="_blank" className={`image w-fit before:content-["project-title"] before:text-sm md:before:text-3xl overflow-hidden relative before:absolute before:w-full before:h-full before:left-0 before:bottom-[-100%] before:bg-[#6372ffcc] before:flex before:justify-center before:items-center before:uppercase before:text-white hover:before:bottom-0 before:duration-500`}>
                            <img className="max-w-full" src={data.smallImage} alt={data.title} />
                        </a>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Gallery
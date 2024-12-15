function Header({data}) {
  return (
    <header className="w-full h-screen relative top-[70px] bg-cover bg-center bg-no-repeat" id="top" style={{backgroundImage: "url('https://gaethMrad1.github.io/landing-page-by-react-and-tailwind-css/img/intro-bg.jpg')"}}>
        <div className="w-full h-full bg-introSectionColor">
            <div className="container mx-auto h-full flex justify-center items-center">
                <div className="w-full md:w-[780px] text-white flex flex-col items-center">
                    <h1 className="md:text-[82px] mb-[25px] text-center leading-[.9]">{data && data.title}</h1>
                    <p className="text-center md:text-3xl mb-[60px]">{data && data.paragraph}</p>
                    <button className="px-[35px] py-[15px] uppercase rounded-full border-none outline-none bg-blue-700 duration-500 hover:bg-blue-500 text-white">learn more</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
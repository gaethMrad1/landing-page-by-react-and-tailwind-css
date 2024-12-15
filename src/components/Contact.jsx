function Contact() {
  return (
    <section className="contact py-[100px] bg-[#5ca9fb]" id="contact">
        <div className="container mx-auto">
            <div className="section-title w-fit mx-auto text-center mb-[70px]">
                <h1 className="uppercase w-fit mx-auto mb-[15px] pb-[15px] relative text-white text-[36px] before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:bg-[#fff] before:w-[30%] before:h-[5px] before:rounded-full">Get In Touch</h1>
                <p className="text-[#ffffffbf] text-[18px]">Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
            </div>
            <form action="" className="w-full md:w-[760px] mx-auto flex flex-col items-center md:items-start">
                <div className="inputs mb-[20px] w-full flex justify-between items-center gap-4">
                    <input className="w-2/4 bg-white border-none outline-none text-[#333] py-[10px] px-[25px]" type="text" name="" id="" placeholder="Name"/>
                    <input className="w-2/4 bg-white border-none outline-none text-[#333] py-[10px] px-[25px]" type="email" name="" id="" placeholder="Email"/>
                </div>
                <textarea className="w-full h-[105px] overflow-y-auto mb-[35px] bg-white border-none outline-none text-[#333] py-[10px] px-[25px]" name="" id="" placeholder="Message"></textarea>
                <button className="py-[14px] px-[34px] border-[2px] rounded-full border-white text-white uppercase text-[15px] font-bold[500] duration-500 hover:bg-white hover:text-[#333]">send message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
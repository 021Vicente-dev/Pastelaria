import Home from "./Home";
import Pasteis from "./Pasteis";
import Footer from "./Footer";

const Navbar = () => {
    return (
        <>
            <div className="bg-[#00000069] backdrop-blur-md rounded-b-md fixed top-0 left-0 w-full h-20 flex justify-center gap-8 z-50">
                <div>
                    <a href="#home">
                        <img src="image/bg.jpg" alt="logo" className="w-20" />
                    </a>
                </div>

                <div className="text-center flex justify-center items-center gap-8 font-medium text-2xl">
                    {["home", "pasteis", "footer"].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="relative text-[#f7f0dd]
                                after:content-[''] after:absolute after:left-1/2            after:bottom-0 
                                after:w-0 after:h-[2px] after:bg-[#f7f0dd] after:transition-all after:duration-500
                                hover:after:w-full hover:after:left-0
                                hover:text-[#fcecc1a2]"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>
            </div>

            <div>
                <section
                    id="home"
                    className="min-h-[100vh] p-0 m-0 flex items-center justify-center text-black scroll-mt-20 bg-cover bg-center  "

                    style={"/image/bg.jpg"}
                >
                    <Home />
                </section>

                <section
                    id="pasteis"
                    className="min-h-screen flex items-center justify-center bg-[#f7e9c2] text-black scroll-mt-20"
                >
                    <Pasteis />
                </section>

                <section
                    id="footer"
                    className="min-h-48 flex items-center justify-center bg-[#8f654d] text-white scroll-mt-20"
                >
                    <Footer />
                </section>
            </div>
            <div>
                <a href="https://wa.me/5521971556831" target="_blank">
               <i class="bi bi-whatsapp text-6xl p-4 rounded-[50%] fixed bottom-5 right-5 text-white bg-green-600 shadow-neon animate-pulse-neon"></i></a>
            </div>
        </>
    );
};

export default Navbar;

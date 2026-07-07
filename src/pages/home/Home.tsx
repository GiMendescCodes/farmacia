import { Link } from "react-router-dom";
import bannerFarmacia from "../../assets/bannerFarmacia.png";

function Home() {
    return (
        <main className="bg-[#FDFDF5] flex justify-center px-6 py-8">
            <section className="w-full max-w-[1208px] bg-[#9FBAF1] rounded-3xl overflow-hidden shadow-lg">

                <div className="grid grid-cols-1 md:grid-cols-2 h-[432px]">

                    <div className="flex flex-col justify-center gap-5 px-12">

                        <h1
                            className="text-[48px] leading-[1.2] text-[#EAF3B2]"
                            style={{ fontFamily: "'Julius Sans One', sans-serif" }}
                        >
                            Sua farmácia,
                            <br />
                            mais organizada
                            <br />
                            e eficiente.
                        </h1>

                        <p
                            className="text-base text-[#3D568F]"
                            style={{ fontFamily: "'Karla', sans-serif" }}
                        >
                            Gerencie categorias de produtos de forma simples, rápida e segura
                            em uma plataforma intuitiva.
                        </p>

                        <Link
                            to="#"
                            className="w-fit bg-[#EAF3B2] text-[#3D568F] px-8 py-3 rounded-xl text-lg font-semibold hover:scale-[1.03] hover:shadow-md transition-all duration-500 ease-in-out"
                            style={{ fontFamily: "'Karla', sans-serif" }}
                        >
                            COMECE AGORA
                        </Link>

                    </div>

                    <div className="flex items-center justify-end">
                        <img
                            src={bannerFarmacia}
                            alt="Farmácia"
                            className="h-[432px] w-auto object-contain rounded-r-3xl"
                        />
                    </div>

                </div>

            </section>
        </main>
    );
}

export default Home;
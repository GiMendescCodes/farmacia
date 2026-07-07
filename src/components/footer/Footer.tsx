function Footer() {
    return (
        <footer className="bg-[#3D568F] mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-8 px-6">

                <h2
                    className="text-3xl text-[#FDFDF5] mb-3"
                    style={{ fontFamily: "'Julius Sans One', sans-serif" }}
                >
                    VivaBem
                </h2>

                <p
                    className="text-[#9FBAF1] max-w-xl mb-4"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                >
                    Sistema desenvolvido para facilitar o gerenciamento de categorias e a
                    organização dos produtos da farmácia.
                </p>

                <p
                    className="text-[#9FBAF1] text-sm"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                >
                    © 2026 Farmácia. Todos os direitos reservados.
                </p>

            </div>
        </footer>
    );
}

export default Footer;
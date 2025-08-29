
const Header = () => {
    return (
        <div>
            <h1 className="text-4xl font-black">GuitarLA</h1>
            <nav className="mt-5">
                <a className="mr-5 text-gray-600 hover:text-gray-800" href="/">Inicio</a>
                <a className="mr-5 text-gray-600 hover:text-gray-800" href="/nosotros">Nosotros</a>
                <a className="mr-5 text-gray-600 hover:text-gray-800" href="/blog">Blog</a>
                <a className="mr-5 text-gray-600 hover:text-gray-800" href="/tienda">Tienda</a>
                <a className="mr-5 text-gray-600 hover:text-gray-800" href="/carrito">Carrito</a>
            </nav>
        </div>
    )
}

export default Header

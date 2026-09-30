
import Footer from "./Footer";

export default function Layout() {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
import { Route, Routes } from "react-router-dom";

//pages
import Main from "./pages/Main/Main";
// import AboutUs from "./pages/About/AboutUs";
// import Contact from "./pages/Contact/Contact";
// import Menu from "./pages/Menu/Menu";
// import Detail from "./pages/DetailItem/Detail";
// import Auth from "./pages/Auth/Auth";
// import Profile from "./pages/ProfileDetail/Profile";
// import Cart from "./pages/Cart/Cart";
// import WistList from "./pages/WishList/Wistlist";

function App() {
    console.log("App");
    return (
        <div className="bg-white w-screen h-full overflow-x-hidden">
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WistList />} /> */}
            
            </Routes>
        </div>
    );
}

export default App;

//components
import SideBar from "../../components/commons/Sidebar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Menu() {
    const navigate = useNavigate();
    const isLogin = useSelector((state: any) => state.userSlice.isLogin);

    useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
        sessionStorage.setItem("active", "1");
    }, []);
    return (
        <div className="w-screen h-screen grid grid-cols-6 grid-rows-12 bg-slate-300">
            {/* sidebar */}
            <SideBar />

            {/* content */}
            <div className="w-full h-full bg-slate-300 col-span-5 row-span-12">
                
            </div>
        </div>
    );
}

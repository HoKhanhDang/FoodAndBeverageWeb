import React, { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
type NavigationProps = {
    logoSrc: string;
};

const links = [
    {
        title: "Home",
        url: "",
    },
    {
        title: "About",
        url: "about",
    },
    {
        title: "Menu",
        url: "menu",
    },

    {
        title: "Contact",
        url: "contact",
    },
];

const Navigation: React.FC<NavigationProps> = ({ logoSrc }) => {
    const navigate = useNavigate();
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const handleOpenMenu = () => {
        console.log("isOpenMenusadsad", isOpenMenu);
        setIsOpenMenu(!isOpenMenu);
    };
    useEffect(() => {
        console.log("isOpenMenu", isOpenMenu);
    }, [isOpenMenu]);
    return (
        <>
            {isOpenMenu && <NavMenu handleOpenMenu={handleOpenMenu}/>}
            <nav className="mt-[30px] flex flex-col justify-center items-center self-stretch px-16 py-6 w-full text-xl font-bold bg-orange-50 shadow-sm text-slate-700 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-row gap-10 justify-evenly items-center md:justify-between ml-3 w-full rounded-none max-w-[1198px] max-md:max-w-full">
                    <div className="sm:!hidden flex justify-center items-start ">
                        <RxHamburgerMenu
                            onClick={handleOpenMenu}
                            className="text-[30px] cursor-pointer transform transition-transform duration-300 hover:scale-125"
                        />
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf21ebf32d3638e22d34e08f9fc57515850acf1bdd8864f7413f0799d865e8a?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
                        className="object-contain shrink-0 max-w-full aspect-[1.49] h-[60px] w-[60px] cursor-pointer"
                        alt="Company Logo"
                        onClick={() => navigate("/")}
                    />
                    <div className="flex gap-[50px] justify-center items-center h-full">
                        <div className="sm:flex hidden flex-row h-full w-auto gap-10 items-center whitespace-nowrap text-[18px]">
                            {links.map((link) => (
                                <div
                                    onClick={() => navigate(`/${link.url}`)}
                                    className="self-stretch my-auto hover:text-red-500 cursor-pointer"
                                >
                                    {link.title}
                                </div>
                            ))}
                        </div>
                        <Badge
                            badgeContent={4}
                            color="primary"
                            className="flex justify-center items-start"
                        >
                            <FaCartShopping
                                className="text-[30px] transform transition-transform duration-300 hover:scale-125"
                                color="action"
                                onClick={() => navigate("/cart")}
                            />
                        </Badge>
                        <div className="sm:flex hidden gap-2.5 self-stretch my-auto text-[18px]">
                            <div className="flex flex-col justify-start">
                                <div className="grow self-start">
                                    Delivery Order
                                </div>
                                <div className="grow self-start text-[15px]">
                                    +880 1630 225 015
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa7a00446cf452cebab86c688e9f263c37b3e0e795c7b103c54095f9de29a909?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
                                className="object-contain shrink-0 aspect-square w-[35px]"
                                alt=""
                            />
                        </div>
                        <button
                            onClick={() => navigate("/auth")}
                            className=" sm:flex hidden self-stretch px-5 py-2 my-auto text-lg text-orange-50 whitespace-nowrap bg-red-600 rounded-xl shadow-sm"
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;

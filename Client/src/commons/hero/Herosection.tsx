import React from "react";
import image1 from "../../assets/image/hero.png";

type HeroSectionProps = {
    title: string;
    subtitle: string;
    price: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    price,
}) => {
    return (
        <section className="ml-9 max-w-full w-[953px]">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                    <div className="flex z-10 flex-col items-start mt-6 w-full max-md:mr-0 max-md:max-w-full">
                        <h2 className="text-xl italic font-medium text-red-600">
                            {subtitle}
                        </h2>
                        <h1 className="mt-3 text-5xl italic font-medium text-red-600 w-[422px] max-md:max-w-full max-md:text-4xl">
                            {title}
                        </h1>
                        <div className="hidden lg-flex gap-8 self-end mt-16 max-md:mt-10">
                            <button className="px-4 py-2.5 text-4xl font-bold text-orange-50 bg-red-600 rounded-xl">
                                Order Now
                            </button>
                            <div className="my-auto text-2xl basis-auto text-slate-700">
                                Price : {price}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src={image1}
                        className="object-contain w-full aspect-[1.5] max-md:max-w-full"
                        alt="Delicious chicken burger"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

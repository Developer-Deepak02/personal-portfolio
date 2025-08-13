import React from "react";
import { Ovo } from "next/font/google";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

// Load the Ovo font
const ovo = Ovo({
	subsets: ["latin"],
	weight: ["400"],
});

const About = () => {
	return (
		<div id="about" className="w-11\12  mx-auto  px-[12%] py-10 scroll-mt-20">
			<h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
				Introduction
			</h4>
			<h2 className={`text-center text-5xl ${ovo.className}`}>About me</h2>
			<div className="flex w-full flex-col lg:flex-row items-center justify-between gap-20 my-20 ">
				<div className="w-64 sm:w-80 rounded-3xl max-w-none">
					<Image
						src={assets.user_image}
						alt="User"
						className="w-full rounded-3xl"
					/>
				</div>
				<div className="flex-1 ">
					<p className={`mb-10 max-w-4xl ${ovo.className}`}>
						I'm a Full Stack Web Developer with a strong foundation in both
						front-end and back-end development. I build responsive, modern web
						applications using technologies like Next.js, React, Node.js, and
						Tailwind CSS. Passionate about turning ideas into real-world digital
						solutions, I'm eager to begin my career in the IT field and
						contribute to impactful projects while continuously learning and
						growing.
					</p>

					<ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
						{infoList.map(({ icon, iconDark, title, description }, index) => {
							return (
								<li
									className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:shadow-[var(--shadow-black)] "
									key={index}
								>
									<Image className="w-7 mt-3" src={icon} alt={title} />
									<h3 className="my-4 font-semibold text-gray-700 ">{title}</h3>
									<p className="text-gray-600 text-sm">{description}</p>
								</li>
							);
						})}
					</ul>
					<h4 className={`my-6 text-gray-700 ${ovo.className}`}>Tools I use</h4>
					<ul className="flex items-center gap-5 flex-wrap  max-w-4xl">
						{toolsData.map((tool, index) => (
							<li
								className="flex items-center justify-center w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
								key={index}
							>
								<Image src={tool} alt="tool" className="w-7" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;

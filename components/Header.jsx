import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Ovo } from "next/font/google";

// Load the Ovo font
const ovo = Ovo({
	subsets: ["latin"],
	weight: ["400"],
});

const Header = () => {
	return (
		<div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
			<div>
				<Image
					src={assets.profile_img}
					alt="Profile"
					className="w-32 rounded-full"
				/>
			</div>
			<h3
				className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovo.className}`}
			>
				Hi! I'm Deepak Sharma
				<Image src={assets.hand_icon} alt="Hand wave" className="w-6" />
			</h3>
			<h1 className={`text-3xl sm:text-6xl lg:text-[66px] ${ovo.className}`}>
				Full Stack Web Developer
			</h1>
			<p className={`max-w-2xl mx-auto ${ovo.className}`}>
				Turning ideas into interactive, full-stack digital experiences by
				crafting seamless front-end designs and robust back-end solutions.
			</p>
			<div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
				<a
					href="#contact"
					className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
				>
					Contact me{" "}
					<Image src={assets.right_arrow_white} alt="" className="w-4" />
				</a>

				<a
					href="#sample-resume.pdf"
					download
					className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
				>
					My resume <Image src={assets.download_icon} alt="" className="w-4" />
				</a>
			</div>
		</div>
	);
};

export default Header;

import React from "react";
import { Ovo } from "next/font/google";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";


// Load the Ovo font
const ovo = Ovo({
	subsets: ["latin"],
	weight: ["400"],
});

const Work = () => {
	return (
		<div id="work" className="w-full mx-auto px-[12%] py-10 scroll-mt-20">
			<h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
				My portfolio
			</h4>
			<h2 className={`text-center text-5xl ${ovo.className}`}>
				Recent Projects
			</h2>
			<p
				className={`text-center max-w-2xl mx-auto mt-5 mb-10 ${ovo.className}`}
			>
				A selection of full-stack projects showcasing my skills in building
				responsive front-end interfaces and powerful back-end systems.
			</p>
			<div className="grid [grid-template-columns:var(--grid-auto)] gap-6 my-10">
				<div className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:shadow-[var(--shadow-black)]">
					<Image
						src="/work-1.png"
						width={600}
						height={400}
						className="w-full rounded-md"
					/>

					<h3 className="text-lg my-4 text-gray-700">
						{" "}
						test title Lorem ipsum dolor sit amet.
					</h3>
					<p className="text-gray-600 text-sm leading-5">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
						iste sed, aperiam officia corporis voluptate aliquam impedit veniam
						sapiente minima.
					</p>
					<div className="flex mt-7 items-center justify-between">
						<a className="flex items-center gap-2 text-sm">
							View project{" "}
							<Image
								src={assets.right_arrow_bold}
								alt="icon"
								width={16}
								height={16}
							/>
						</a>
						<a href="#" className="p-2">
							<MdOutlineArrowOutward className=" border w-7 h-7 rounded-full bg-gray-950 text-white" />
						</a>
					</div>
				</div>
				<div className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:shadow-[var(--shadow-black)]">
					<Image
						src="/work-1.png"
						width={600}
						height={400}
						className="w-full rounded-md"
					/>

					<h3 className="text-lg my-4 text-gray-700">
						{" "}
						test title Lorem ipsum dolor sit amet.
					</h3>
					<p className="text-gray-600 text-sm leading-5">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
						iste sed, aperiam officia corporis voluptate aliquam impedit veniam
						sapiente minima.
					</p>
					<div className="flex mt-7 items-center justify-between">
						<a className="flex items-center gap-2 text-sm">
							View project{" "}
							<Image
								src={assets.right_arrow_bold}
								alt="icon"
								width={16}
								height={16}
							/>
						</a>
						<a href="#" className="p-2">
							<MdOutlineArrowOutward className=" border w-7 h-7 rounded-full bg-gray-950 text-white" />
						</a>
					</div>
				</div>
				<div className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:shadow-[var(--shadow-black)]">
					<Image
						src="/work-1.png"
						width={600}
						height={400}
						className="w-full rounded-md"
					/>

					<h3 className="text-lg my-4 text-gray-700">
						{" "}
						test title Lorem ipsum dolor sit amet.
					</h3>
					<p className="text-gray-600 text-sm leading-5">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
						iste sed, aperiam officia corporis voluptate aliquam impedit veniam
						sapiente minima.
					</p>
					<div className="flex mt-7 items-center justify-between">
						<a className="flex items-center gap-2 text-sm">
							View project{" "}
							<Image
								src={assets.right_arrow_bold}
								alt="icon"
								width={16}
								height={16}
							/>
						</a>
						<a href="#" className="p-2">
							<MdOutlineArrowOutward className=" border w-7 h-7 rounded-full bg-gray-950 text-white" />
						</a>
					</div>
				</div>
				<div className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:shadow-[var(--shadow-black)]">
					<Image
						src="/work-1.png"
						width={600}
						height={400}
						className="w-full rounded-md"
					/>

					<h3 className="text-lg my-4 text-gray-700">
						{" "}
						test title Lorem ipsum dolor sit amet.
					</h3>
					<p className="text-gray-600 text-sm leading-5">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
						iste sed, aperiam officia corporis voluptate aliquam impedit veniam
						sapiente minima.
					</p>
					<div className="flex mt-7 items-center justify-between">
						<a className="flex items-center gap-2 text-sm">
							View project{" "}
							<Image
								src={assets.right_arrow_bold}
								alt="icon"
								width={16}
								height={16}
							/>
						</a>
						<a href="#" className="p-2">
							<MdOutlineArrowOutward className=" border w-7 h-7 rounded-full bg-gray-950 text-white" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;

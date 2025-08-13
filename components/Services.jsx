import React from 'react'
import { Ovo } from "next/font/google";
import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';

// Load the Ovo font
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const Services = () => {
  return (
		<div
			id="services"
			className="w-11\12  mx-auto  px-[12%] py-10 scroll-mt-20"
		>
			<h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
				What i offers
			</h4>
			<h2 className={`text-center text-5xl ${ovo.className}`}>My Services</h2>
			<p
				className={`text-center max-w-2xl mx-auto mt-5 mb-10 ${ovo.className}`}
			>
				I provide full stack web development services, covering everything from
				responsive UI to backend and database integration.
			</p>
			<div className="grid [grid-template-columns:var(--grid-auto)] gap-6 my-10">
				{serviceData.map(({ icon, title, description, link }, index) => (
					<div
						key={index}
						className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:shadow-[var(--shadow-black)]"
					>
						<Image src={icon} alt="" className="w-10 rounded-md" />
						<h3 className="text-lg my-4 text-gray-700">{title}</h3>
						<p className="text-gray-600 text-sm leading-5">{description}</p>
						<a className="flex items-center gap-2 text-sm mt-5" href={link}>
							Read more{" "}
							<Image src={assets.right_arrow} alt="" className="w-4" />
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Services

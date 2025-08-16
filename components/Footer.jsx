import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<div className="mt-20">
			<div className="mx-auto flex flex-col items-center text-center space-y-2">
				<a href="#top" className="cursor-pointer text-xl font-semibold">
					Deepak <span className="text-rose-500">.dev</span>
				</a>
				<div className="flex items-center gap-2">
					<Image src={assets.mail_icon} alt="mail" className="w-5 h-5" />
					<span className="text-sm">Devdeepak5363@gmail.com</span>
				</div>
			</div>

			<div className="text-center md:flex items-center justify-between  border-t border-t-gray-400 mx-[10%] mt-12 py-6 text-gray-500">
				<p>@2025 All rights reserved.</p>
				<ul className="flex items-center gap-10 justify-center text-gray-500">
					<li>
						<a target="_blank" href="">
							Github
						</a>
					</li>
					<li>
						<a target="_blank" href="">
							Instagram
						</a>
					</li>
					<li>
						<a target="_blank" href="">
							Twitter
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;

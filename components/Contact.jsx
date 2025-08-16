import React, { useState } from "react";
import { Ovo } from "next/font/google";
import Image from "next/image";
import { assets } from "@/assets/assets";

// Load the Ovo font
const ovo = Ovo({
	subsets: ["latin"],
	weight: ["400"],
});

const Contact = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "6124edb1-4690-436a-b3cb-0e863d362ceb");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<div id="contact" className="w-12/12  mx-auto  px-[12%] py-10 scroll-mt-20">
			<h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
				Contact with me
			</h4>
			<h2 className={`text-center text-5xl ${ovo.className}`}>Get in touch</h2>
			<p
				className={`text-center max-w-2xl mx-auto mt-5 mb-10 ${ovo.className}`}
			>
				i'd love to hear from you! if you have any questions, comments, or
				feedback, plese use the form below or send me an email.
			</p>

			<form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
				<div className="grid grid-cols-auto md:grid-cols-2 gap-6 mt-9 mb-8">
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						required
						className=" p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
					/>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						required
						className=" p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
					/>
				</div>
				<textarea
					rows="6"
					name="message"
					placeholder="Enter your message"
					required
					className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
				></textarea>
				<button
					type="submit"
					className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/85 text-white rounded-full text-sm font-medium mx-auto hover:bg-black duration-500 cursor-pointer"
				>
					Send Message{" "}
					<Image src={assets.right_arrow_white} alt="arrow" className="w-4" />{" "}
				</button>

				<p className="mt-4">{result}</p>
			</form>
		</div>
	);
};

export default Contact;

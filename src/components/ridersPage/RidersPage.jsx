import React from "react";
import appleBtn from "../../assets/images/apple-btn.png";
import googleBtn from "../../assets/images/google-btn.png";
import shield from "../../assets/images/shield.png";
import car from "../../assets/images/car.png";
import check2 from "../../assets/images/check2.png";
import before from "../../assets/images/before.png";
import during from "../../assets/images/during.png";
import after from "../../assets/images/after.png";

import alarm from "../../assets/images/alarm.png";
import numbers from "../../assets/images/numbers.png";
import review from "../../assets/images/review.png";
import promo from "../../assets/images/promo.png";
import icons from "../../assets/images/ICONs-01.png";
import relax from "../../assets/images/RELAX.png";

const RidersPage = () => {
	return (
		<>
			<section className="relative bg-[url(bg-hd.png)] bg-cover bg-center bg-no-repeat z-[-1]">
				<div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

				<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
					<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
						<h1 className="text-3xl font-extrabold sm:text-5xl">
							Ride with us to
							<strong className="block font-extrabold text-rose-700">
								save a life.
							</strong>
						</h1>

						<p className="mt-4 max-w-lg sm:text-xl/relaxed">
							Rydgo is not just a ride-hailing company but donates an amount of
							GHC1 each to support NEURODIVERSITY CHALLENGED PERSONS.
						</p>

						<div
							className="mt-8 flex flex-wrap gap-4 text-center"
							style={{ justifyContent: "center" }}
						>
							<img src={appleBtn} alt="" style={{ width: "150px" }} />

							<img src={googleBtn} alt="" style={{ width: "150px" }} />
						</div>
					</div>
				</div>
			</section>

			<div className="w-full pt-[2rem] pb-14 px-4 bg-white">
				<h1 className="text-3xl font-bold text-center py-8">
					{" "}
					Your SAFETY before, during and after the ride is our priority.
				</h1>

				<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 pt-20">
					<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-white"
							src={shield}
							alt="/"
						/>
						<h2 className="text-2xl font-bold text-center py-8">
							Your SAFETY before, during and after the ride is our priority.
						</h2>
					</div>
					<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-white"
							src={car}
							alt="/"
						/>
						<h2 className="text-2xl font-bold text-center py-8">
							Rydgo is a ride-hailing service for everyone
						</h2>
					</div>
					<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-white"
							src={check2}
							alt="/"
						/>
						<h2 className="text-2xl font-bold text-center py-8">
							Rydgo offers safe rides for everyone
						</h2>
					</div>
				</div>
			</div>

			<div className="w-full pt-[1rem] pb-14 px-4 bg-white">
				<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
					<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-transparent"
							src={before}
							alt="/"
						/>
						<h2 className="text-center text-4xl font-bold pt-5">Before</h2>
						<p className="text-xl font-bold text-center py-8">
							Check to verify the driver, car, and registration number plate.
						</p>
					</div>
					<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-transparent"
							src={during}
							alt="/"
						/>
						<h2 className="text-center text-4xl font-bold pt-5">During</h2>
						<p className="text-xl font-bold text-center py-8">
							Share the ride with family and friends for easy tracking.
						</p>
					</div>
					<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
						<img
							className="w-20 mx-auto mt-[-3rem] bg-transparent"
							src={after}
							alt="/"
						/>
						<h2 className="text-center text-4xl font-bold pt-5">After</h2>
						<p className="text-xl font-bold text-center py-8">
							Rate your driver fairly. Ratings allow us to review driver
							behavior and block those who violate our Terms of Service.
						</p>
					</div>
				</div>
			</div>

			<div className="container px-6 py-4 mx-auto grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-2">
				<div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm bg-[#ff1e00] hover:bg-[#ff5050] transition duration-300 ease-in-out">
					<div className="p-3 mr-4 text-white rounded-full">
						<img src={alarm} alt="" style={{ width: "300px" }} />
					</div>
					<div>
						<p className="mb-2 text-xl font-medium text-white">
							Emergency Assist
						</p>
						<p className="text-sm font-bold text-white">
							Our in-app Emergency Assist button alerts an emergency response
							teamswiftly and consciously. This will also notify our safety
							team, who will makean immediate safety call.
						</p>
					</div>
				</div>
				<div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm bg-[#ff1e00] hover:bg-[#ff5050] transition duration-300 ease-in-out">
					<div className="p-3 mr-4 text-white rounded-full">
						<img src={numbers} alt="" style={{ width: "150px" }} />
					</div>
					<div>
						<p className="mb-2 text-xl  font-medium text-white">
							Your Number Stays Private
						</p>
						<p className="text-sm font-bold text-white">
							When you make a call via the Rydgo app, your phone number remains
							hidden.
						</p>
					</div>
				</div>
				<div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm bg-[#ff1e00] hover:bg-[#ff5050] transition duration-300 ease-in-out">
					<div className="p-3 mr-4 text-white rounded-full">
						<img src={review} alt="" style={{ width: "150px" }} />
					</div>
					<div>
						<p className="mb-2 text-xl  font-medium text-white">
							Unique Review System
						</p>
						<p className="text-sm font-bold text-white">
							Rapid responds to clients comments, recommendations and feedback
						</p>
					</div>
				</div>
				<div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm bg-[#ff1e00] hover:bg-[#ff5050] transition duration-300 ease-in-out">
					<div className="p-3 mr-4 text-white rounded-full">
						<img src={promo} alt="" style={{ width: "250px" }} />
					</div>
					<div>
						<p className="mb-2 text-xl  font-medium text-white">
							Promotions and Discounts
						</p>
						<p className="text-sm font-bold text-white">
							Promotions and discounts such as first-time rider discounts,
							referral bonuses, and special offers for frequent riders.
						</p>
					</div>
				</div>
				<div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm bg-[#ff1e00] hover:bg-[#ff5050] transition duration-300 ease-in-out">
					<div className="p-3 mr-4 text-white rounded-full">
						<img src={icons} alt="" style={{ width: "170px" }} />
					</div>
					<div>
						<p className="mb-2 text-xl  font-medium text-white">
							Affordable fares at REAL TIME
						</p>
						<p className="text-sm font-bold text-white">
							User and customer analytics
						</p>
					</div>
				</div>
				<div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm bg-[#ff1e00] hover:bg-[#ff5050] transition duration-300 ease-in-out">
					<div className="p-3 mr-4  text-white rounded-full">
						<img src={relax} alt="" style={{ width: "170px" }} />
					</div>
					<div>
						<p className="mb-2 text-xl  font-medium text-white">
							Comforting rides of your choice
						</p>
						<p className="text-sm font-bold text-white">
							User and customer analytics
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default RidersPage;

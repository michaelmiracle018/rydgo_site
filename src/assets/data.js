import deliveryMan from "../assets/images/delivery-man.png";
import image1 from "../assets/images/man-wearing-smart.png";
import image02 from "../assets/images/happy-african-people 1.png";


export const subLinks = [
	{ id: "1", name: "Rides", url: "/ride", category: "GO" },
	{ id: "2", name: "Taxi", url: "/taxi", category: "GO" },
	{ id: "3", name: "Bike", url: "/ride", category: "GO" },
	{ id: "4", name: "Car Rental", url: "/ride", category: "GO" },
	{ id: "5", name: "School Ride", url: "/ride", category: "GO" },

	{ id: "6", name: "Food", url: "/ride", category: "EAT" },
	{ id: "7", name: "DineOut", url: "/ride", category: "EAT" },

	{ id: "8", name: "Quik", url: "/ride", category: "GET" },
	{ id: "9", name: "Supermarket", url: "/ride", category: "GET" },
	{ id: "10", name: "Delivery", url: "/ride", category: "GET" },
	{ id: "11", name: "Home Cleaning", url: "/ride", category: "GET" },
	{ id: "12", name: "Laundry", url: "/ride", category: "GET" },
	{ id: "13", name: "Pharmacy", url: "/ride", category: "GET" },
	// { id: "14", name: "Flowers", url: "/ride", category: "GET" },
	// { id: "15", name: "Tickets", url: "/ride", category: "GET" },

	{ id: "16", name: "Pay", url: "/ride", category: "PAY" },
	{ id: "17", name: "Donations", url: "/ride", category: "PAY" },
];

export const imageLoad = [
	{
		id: 1,
		img: deliveryMan,
		category: "ONE",
	},

	{
		id: 2,
		img: image02,
		category: "TWO",
	},
	{
		id: 3,
		img: image1,
		category: "THREE",
	},
	{
		id: 4,
		img: deliveryMan,
		category: "FOUR",
	},
	{
		id: 5,
		img: image1,
		category: "FIVE",
	},
];

export const questions = [
	{
		id: 1,
		title: "How Do I Get Paid?",
		info: "By cash payment,credit card and mobile money from riders.",
	},
	{
		id: 2,
		title: "What Is The Duration In Signing Up?",
		info: "Submission of your valid information takes less than 15 mins remotely and in-person depending on your zone.",
		// subInfo: "30 mins in - person training sessions.",
	},
	{
		id: 3,
		title: "How Do a driver Pay commission to Rydgo?",
		info: "Rydgo deduct commision through bank account! It's affordable, Requires finished trips payment only.",
	},
	{
		id: 4,
		title: "Can I Use Rydgo For Just A Few Hours A Week?",
		info: "Yes, because it's flexible with working hours such as part-time and full time.",
	},
	{
		id: 5,
		title: "What If I Have No Smartphone?",
		info: "You can operate with non-smartphones by using a code to connect to your riders or can be put on a smartphone payment method.",
	},
	{
		id: 6,
		title: "What Happens If I Don't Have A Car?",
		info: "Our team will offer you competitive rates on vehicles that are accepted on our platform and financed by our partners.",
	},
];

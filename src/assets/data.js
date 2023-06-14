import deliveryMan from "../assets/images/delivery-man.png";
import image1 from "../assets/images/man-wearing-smart.png";
import image02 from "../assets/images/happy-african-people 1.png";
import cash from "../assets/icons/ICONs-31.png";
import image03 from "../assets/icons/ICONs-26.png";
import pay from "../assets/icons/ICONs-01.png";
import image04 from "../assets/icons/ICONs-32.png";
import phone from "../assets/icons/ICONs-11.png";
import car from "../assets/icons/ICONs-20.png";

import kids from "../assets/images/kids_seat_2fe5015485.png";
import executiveCar from "../assets/images/executive_6395d52741.png";
import maxVan from "../assets/images/max_van_f9bb9ca049.png";
import sedan from "../assets/images/sedan_7240765cf3.png";
import halaKids from "../assets/images/hala_kids_copy_f3fa57fd0c.png";
import vanTaxi from "../assets/images/van_taxi_58d4223ef8.png";
import taxiCar from "../assets/images/taxi_car_3113f165e9.png";

export const subLinks = [

	{ id: "1", name: "Rides", url: "/rides", category: "RIDE" },
	{ id: "2", name: "RydgoTaxi", url: "/taxi", category: "RIDE" },
	{ id: "3", name: "RydgoWomen", url: "/bike", category: "RIDE" },
	{ id: "4", name: "RydgoStudent", url: "/schoolRide", category: "RIDE" },
	{ id: "5", name: "RydgoRental", url: "/rental", category: "RIDE" },

	{ id: "6", name: "Food", url: "/food", category: "EAT" },
	{ id: "7", name: "RydineOut", url: "/dineOut", category: "EAT" },

	{ id: "8", name: "RydGro", url: "/ride", category: "GET" },
	{ id: "9", name: "RydSuper", url: "/ride", category: "GET" },
	{ id: "10", name: "RydDrop", url: "/ride", category: "GET" },
	{ id: "11", name: "RydSparkle", url: "/ride", category: "GET" },
	{ id: "12", name: "RydLaundry", url: "/ride", category: "GET" },
	{ id: "13", name: "RydPharm", url: "/ride", category: "GET" },
	// { id: "14", name: "Flowers", url: "/ride", category: "GET" },
	// { id: "15", name: "Tickets", url: "/ride", category: "GET" },
  // { id: "1", name: "Rydgo", url: "/ride", category: "GO" },
  // { id: "2", name: "RydgoTaxi", url: "/taxi", category: "GO" },
  // { id: "3", name: "RydgoExtra", url: "/bike", category: "GO" },
  // { id: "4", name: "RydgoStudent", url: "/schoolride", category: "GO" },
  // { id: "5", name: "RydgoRental", url: "/rental", category: "GO" },

  // { id: "6", name: "Food", url: "/food", category: "EAT" },
  // { id: "7", name: "RydineOut", url: "/dineout", category: "EAT" },

  // { id: "8", name: "RydGro", url: "/rydgro", category: "GET" },
  // { id: "9", name: "RydSuper", url: "/rydsuper", category: "GET" },
  // { id: "10", name: "RydDrop", url: "/ryddrop", category: "GET" },
  // { id: "11", name: "RydSparkle", url: "/rydsparkle", category: "GET" },
  // { id: "12", name: "RydLaundry", url: "/rydlaundry", category: "GET" },
  // { id: "13", name: "RydWell", url: "/rydwell", category: "GET" },
  // { id: "14", name: "RydPharm", url: "/rydpharm", category: "GET" },
  // { id: "15", name: "RydTour", url: "/rydtour", category: "GET" },


	{ id: "16", name: "RydPay", url: "/rydpay", category: "PAY" },
	{ id: "17", name: "RydGive", url: "/rydgive", category: "PAY" },
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
    img: cash,
  },
  {
    id: 2,
    title: "What Is The Duration In Signing Up?",
    info: "Submission of your valid information takes less than 15 mins remotely and in-person depending on your zone.",
    img: image03,
  },
  {
    id: 3,
    title: "How Do a driver Pay commission to Rydgo?",
    info: "Rydgo deduct commision through bank account! It's affordable, Requires finished trips payment only.",
    img: pay,
  },
  {
    id: 4,
    title: "Can I Use Rydgo For Just A Few Hours A Week?",
    info: "Yes, because it's flexible with working hours such as part-time and full time.",
    img: image04,
  },
  {
    id: 5,
    title: "What If I Have No Smartphone?",
    info: "You can operate with non-smartphones by using a code to connect to your riders or can be put on a smartphone payment method.",
    img: phone,
  },
  {
    id: 6,
    title: "What Happens If I Don't Have A Car?",
    info: "Our team will offer you competitive rates on vehicles that are accepted on our platform and financed by our partners.",
    img: car,
  },
];

export const go_content = [
  {
    id: 1,
    title: "Rides",
    desc: "This category offers affordable, basic rides for those who want to get from point A to point B without any frills.",
    category: "rides",

    images: [
      {
        id: "i12",
        img: executiveCar,
        textImg: "Rydgo",
      },
      {
        id: "i13",
        img: maxVan,
        textImg: "Premier",
      },
      {
        id: "i14",
        img: sedan,
        textImg: "Extra",
      },
      {
        id: "i11",
        img: kids,
        textImg: "Kids",
      },
    ],
  },
  {
    id: 2,
    title: "Taxi",
    desc: "Ghana’s most affordable ride.",
    category: "taxi",

    images: [
      {
        id: "i15",
        img: halaKids,
        textImg: "Taxi Kids",
      },
      {
        id: "i16",
        img: vanTaxi,
        textImg: "Taxi Max",
      },
      {
        id: "i17",
        img: taxiCar,
        textImg: "Taxi",
      },
    ],
  },

  {
    id: 3,
    title: "Bike",
    desc: "Bike your way, every day.",
    category: "bike",
  },
  {
    id: 4,
    title: "CarRental",
    desc: "No hassle, no deposit, no paperwork. Rent a car for a month, a week, or even a day on Careem. Choose from a wide selection of cars and have it delivered straight to your door. ",
    category: "rental",
  },
  {
    id: 5,
    title: "SchoolRides",
    desc: "With just a tap, you can purchase a School Rides package that’s exclusively customised to meet yours and your child’s needs.",
    category: "schoolRide",
  },
];

import React from "react";
import blogs from "../../../assets/blogs";
import { motion } from "framer-motion";
import WhiteButton from "../../../shared/WhiteButton";
import "../../../styles/blog.scss";

const childVariant = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
	transition: { type: "spring", bounce: 0.4, duration: 1 },
};

const Blog = ({ blog }) => {
	return (
		<div>
			<motion.div variants={childVariant}>
				<section>
					<div className="single__card-blog">
						<img src={blog.image} alt="" />

						<p className="blog__para1">{blog.text1}</p>
						<p className="blog__para2">{blog.text2}</p>
						<WhiteButton>Read more</WhiteButton>
					</div>
				</section>
			</motion.div>
		</div>
	);
};

export default Blog;

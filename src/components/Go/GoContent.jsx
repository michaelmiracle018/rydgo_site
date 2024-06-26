import React from "react";
import "./goStyles.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

const GoContent = ({ items }) => {
	return (
		<>
			<div className="section-center">
				{items.map((item) => {
					const { title, desc } = item;

					return (
						<main className="flex justify-center items-center" key={item.id}>
							<article className="single__item">
								<div className="item__text text-center">
									<p>{desc}</p>
								</div>
								<div className="item__img-content">
									{item?.images?.map((image, index) => {
										const { img, textImg } = image;
										return (
											<AnchorLink href={`#${textImg}`} key={image.id}>
												<div className="img__flex">
													<img src={img} alt="" />
													<h5 className="text-center">{textImg}</h5>
												</div>
											</AnchorLink>
										);
									})}
								</div>
							</article>
						</main>
					);
				})}
			</div>
		</>
	);
};

export default GoContent;

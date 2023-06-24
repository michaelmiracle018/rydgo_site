.driver__card-info-container {
	// width: var(--full-width);
	// max-width: var(--max-width);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1em auto;
	gap: 1em;

	@media screen and (min-width: 570px) {
		margin: 4rem 1rem auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		
		max-width: fit-content;
	}

	@media screen and (min-width: 960px) {
		max-width: 100%;
		margin: 100px auto;
		grid-template-columns: repeat(3, 1fr);
		max-width: fit-content;
		gap: 1em;
	}

	.single__card-info {
		width: 360px;
		height: 100%;
		background-color: #fbf4f4;
		border-radius: 1em;
		.card__img {
			margin-top: 2rem;
			display: flex;
			justify-content: center;
			img {
				width: 120px;
			}
		}
		.card__info-text {
			margin: 1rem 2rem;
			text-align: center;

			h4 {
				font-style: normal;
				font-weight: 900;
				font-size: 22px;
				padding-right: 5px;
				font-family: "Inter-Bold";
				padding-bottom: 1rem;
				color: #000;
			}
			p {
				font-style: normal;
				font-weight: 900;
				font-size: 16px;
				padding-right: 5px;
				font-family: "Inter-Light";
				padding-bottom: 1rem;
				color: #000;
			}
		}
	}
}

.exploreMore__card-info-container {
	// width: var(--full-width);
	// max-width: var(--max-width);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1em auto;
	gap: 1em;

	@media screen and (min-width: 570px) {
		margin: 4rem 1rem auto;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		
		max-width: fit-content;
	}
	@media screen and (max-width: 1136px){
			margin: 4rem 1rem auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		
		max-width: fit-content;
	}

	@media screen and (min-width: 1136px) {
		max-width: 100%;
		margin: 100px auto;
		grid-template-columns: repeat(3, 1fr);
		max-width: fit-content;
		gap: 1em;
	}

	.single__card-info {
		width: 360px;
		height: 100%;
		background-color: #fbf4f4;
		border-radius: 1em;
		.card__img {
			margin-top: 2rem;
			display: flex;
			justify-content: center;
			img {
				width: 120px;
			}
		}
		.card__info-text {
			margin: 1rem 2rem;
			text-align: center;

			h4 {
				font-style: normal;
				font-weight: 900;
				font-size: 22px;
				padding-right: 5px;
				font-family: "Inter-Bold";
				padding-bottom: 1rem;
				color: #000;
			}
			p {
				font-style: normal;
				font-weight: 900;
				font-size: 16px;
				padding-right: 5px;
				font-family: "Inter-Light";
				padding-bottom: 1rem;
				color: #000;
			}
		}
	}
}


											regions={"africa"}
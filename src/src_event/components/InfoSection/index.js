import React from "react";
import { Button } from "../ButtonElements";

import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from "./InfoElements";

const InfoSection = (props) => {
	const { homeObject } = props;
	const { description, title } = props;

	return (
		<>
			<InfoContainer lightBg={homeObject.lightBg} id={homeObject.id}>
				<InfoWrapper>
					<InfoRow imgStart={homeObject.imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{title}</TopLine>
								<Heading lightText={homeObject.lightText}>
									Unlimited Fun With No Money to pay!
								</Heading>
								<Subtitle darkText={homeObject.darkText}>
									<div dangerouslySetInnerHTML={{ __html: description }} />
								</Subtitle>
								<BtnWrap>
									<Button
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primary={homeObject.primary ? 1 : 0}
										dark={homeObject.dark ? 1 : 0}
										dark2={homeObject.dark2 ? 1 : 0}
									>
										{homeObject.buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<Img
								style={{ borderRadius: "50%" }}
								src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
								//  scr="https://image.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg"
								alt={homeObject.alt}
							/>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;

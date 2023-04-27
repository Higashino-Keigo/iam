import styled from "styled-components";

export default function ThirdLayer() {
  const images = [
    "/assets/Frame1.jpg",
    "/assets/Frame2.png",
    "/assets/Frame3.png",
  ];

  return (
    <ThirdLayerContainer>
      <ProfileText>Our Profile </ProfileText>
      <ImageWrapper>
        {images.map((el, idx) => (
          <SingleImage key={idx} imageUrl={el}></SingleImage>
        ))}
      </ImageWrapper>
    </ThirdLayerContainer>
  );
}

interface Url {
  imageUrl: string;
}

const ThirdLayerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileText = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  align-items: center;
  font-size: 32px;
  color: #7294ae;
  text-decoration: underline;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const SingleImage = styled.div<Url>`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  flex: 1 0 0;
  height: 1080px;
`;

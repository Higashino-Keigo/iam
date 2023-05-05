import { useState } from "react";
import styled from "styled-components";
import AnotherHeader from "../../components/AnotherHeader";
import { fadeAction } from "../../style/global.style";
import Layout from "../Layout";

export default function Project() {
  const [currentPage, setCurrentPage] = useState("Media");

  const handleCurrentPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <AnotherHeader />
      <ProjectPageContainer>
        <ProjectHeader>
          <Category
            onClick={() => handleCurrentPage("Media")}
            className={currentPage === "Media" ? "Selected" : ""}
          >
            Media
          </Category>
          <Category
            onClick={() => handleCurrentPage("Communication")}
            className={currentPage === "Communication" ? "Selected" : ""}
          >
            Communication
          </Category>
          <Category
            onClick={() => handleCurrentPage("Answering")}
            className={currentPage === "Answering" ? "Selected" : ""}
          >
            Answering
          </Category>
        </ProjectHeader>
        {currentPage === "Media" ? (
          <LayerWrapper>
            <Layer>
              <LayerImage src="assets/media_image_1.png"></LayerImage>
              <LayerText
                className="a"
                src="assets/media_text_1.png"
              ></LayerText>
            </Layer>
            <Layer>
              <LayerImage src="assets/media_image_2.png"></LayerImage>
              <LayerText
                className="a"
                src="assets/media_text_2.png"
              ></LayerText>
            </Layer>
          </LayerWrapper>
        ) : null}
        {currentPage === "Communication" ? (
          <LayerWrapper>
            <Layer>
              <LayerImage src="assets/communication_image_1.png"></LayerImage>
              <LayerText
                className="a"
                src="assets/communication_text_1.png"
              ></LayerText>
            </Layer>
            <Layer>
              <LayerImage src="assets/communication_image_2.png"></LayerImage>
            </Layer>
          </LayerWrapper>
        ) : null}
        {currentPage === "Answering" ? (
          <LayerWrapper>
            <Layer>
              <LayerImage src="assets/answering_image_1.png"></LayerImage>
              <LayerText
                className="a"
                src="assets/answering_text_1.png"
              ></LayerText>
            </Layer>
            <Layer>
              <LayerImage src="assets/answering_image_2.png"></LayerImage>
            </Layer>
          </LayerWrapper>
        ) : null}
      </ProjectPageContainer>
    </Layout>
  );
}

const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 170px;
  animation: 0.6s ease-in-out ${fadeAction};
`;
const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;
const Category = styled.div`
  color: #7e7e7e;
  cursor: pointer;

  &.Selected {
    color: black;
    font-weight: 900;
  }
`;
const LayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
`;
const LayerImage = styled.img`
  width: 100vw;
`;
const LayerText = styled.img`
  &.a {
    width: 650px;
  }
`;

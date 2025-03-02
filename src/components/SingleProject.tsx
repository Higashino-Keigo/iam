import { useNavigate } from "react-router-dom";
import { mediaQuery } from "style/global.style";
import { FlexColumnDivCentered } from "style/utility.style";
import styled from "styled-components";

interface IPrjProps {
  id: number;
  title: string;
  img: string;
}

export default function SingleProject({ id, title, img }: IPrjProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/project/${id}`);

    //*페이지 최상단으로 이동
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <ProjectContainer onClick={onClick}>
      <ProjectThumbnail img={img} />
      <TitleWrapper>{title}</TitleWrapper>
    </ProjectContainer>
  );
}

const ProjectContainer = styled(FlexColumnDivCentered)`
  margin: 0px 15px;
`;

const ProjectThumbnail = styled.div<{ img: string }>`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.103) 0px 4px 12px;
  border-radius: 10px;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  opacity: 0.8;
  aspect-ratio: 3/4;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;

  &:hover {
    opacity: 1;
  }

  ${mediaQuery.mobile} {
    opacity: 1;
  }
`;

const TitleWrapper = styled.div`
  margin: 10px;
  font-size: 16px;
  font-weight: 1000;
  color: #313131;
  cursor: pointer;

  ${mediaQuery.mobile} {
    font-size: 14px;
  }
`;

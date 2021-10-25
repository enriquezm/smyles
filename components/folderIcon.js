import theme, { color } from '../theme';
import styled from 'styled-components';

const Container = styled.svg`
  &:hover {
    .c-folderIcon_paper {
      transform: translateY(-2px);
      transition: transform 0.3s;
    }
  }
`;

const Paper = styled.path`
  display: ${props => props.isDisabled ? 'none' : 'block'};
`;

const FolderIcon = (props) => {
  return (
    <Container
      width="50" 
      height="50" 
      viewBox="0 0 100 78" 
      fill="none"
    >
      <path 
        className="c-folderIcon_folder"
        d="M98.5 12.125V74C98.5 75.3807 97.3807 76.5 96 76.5H4C2.61929 76.5 1.5 75.3807 1.5 74V4C1.5 2.61929 2.61929 1.5 4 1.5H29.4072C30.0493 1.5 30.6669 1.7471 31.1318 2.19007L37.3414 8.10684C38.3642 9.08139 39.7227 9.625 41.1354 9.625H96C97.3807 9.625 98.5 10.7443 98.5 12.125Z" 
        fill={props.isDisabled ? color.gray : (props.folderColor ? props.folderColor : color.pink)} 
        stroke="black" 
        strokeWidth="3" />
      <Paper
        isDisabled={props.isDisabled}
        className="c-folderIcon_paper"
        d="M96.5 18V74C96.5 75.3807 95.3807 76.5 94 76.5H6C4.61929 76.5 3.5 75.3807 3.5 74V18C3.5 16.6193 4.61929 15.5 6 15.5H32.5116H39.9535H94C95.3807 15.5 96.5 16.6193 96.5 18Z"
        fill={theme.color.white}
        stroke="black"
        strokeWidth="3"
      />
      <path
        className="c-folderIcon_folder"
        d="M98.5 23V74C98.5 75.3807 97.3807 76.5 96 76.5H4C2.61929 76.5 1.5 75.3807 1.5 74V29.0422C1.5 27.6615 2.61929 26.5422 4 26.5422H31.0668C32.3894 26.5422 33.6677 26.0656 34.6675 25.1997L39.3896 21.1102C39.844 20.7166 40.425 20.5 41.0262 20.5H96C97.3807 20.5 98.5 21.6193 98.5 23Z" 
        fill={props.isDisabled ? color.gray : (props.folderColor ? props.folderColor : color.pink)} 
        stroke="black" 
        strokeWidth="3"
      />
    </Container>
  );
};

export default FolderIcon;
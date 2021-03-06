import styled from 'styled-components';
import FeaturePic from '../../images/pic-oimo.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 700px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(4rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 35rem;
    font-size: clamp(3.5rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

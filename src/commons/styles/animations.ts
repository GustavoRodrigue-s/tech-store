import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0%{ 
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }
  100%{ 
    visibility: hidden;
    opacity: 0;
  }
`;

export const slideTopIn = keyframes`
  0% {
    transform: translateY(20px);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

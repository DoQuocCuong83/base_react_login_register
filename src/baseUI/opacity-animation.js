import styled, { keyframes } from "styled-components";

const fade = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const OpacityAnimationContainer = styled.div`
  animation: ${fade} 0.8s forwards;
`;

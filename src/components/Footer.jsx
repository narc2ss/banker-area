import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 20vh;
  background: ${(props) => props.theme.palette.cloudBurst};
`;

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.palette.black};
`;

export default StyledNavLink;

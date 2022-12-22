import { StyledHeader, Content } from "./styled";

const Header = ({ title }) => (
    <StyledHeader>
        <Content>{title}</Content>
    </StyledHeader>
);

export default Header;

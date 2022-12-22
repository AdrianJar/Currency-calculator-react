import styled from "styled-components";

export const StyledMain = styled.main`
    max-width: 700px;
    margin: 50px auto;
    background-color: ${({ theme}) => theme.color.gallery};
    border-radius: 20px;
    padding: 0 20px;
`;
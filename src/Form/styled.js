import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10px;
    border-radius: 20px;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
`;

export const LabelContent = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin: 10px;
`;

export const Input = styled.input`
    max-width: 420px;
    width: 100%;
    height: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 450px;
    }
`;

export const Select = styled.select`
    max-width: 420px;
    width: 100%;
    height: 30px;
    cursor: context-menu;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 450px;
    }
`;

export const FormResult = styled.div`
    border-top: 1px solid ${({ theme }) => theme.color.silver};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    height: 80px;
`;

export const FormResultText = styled.div`
    flex-wrap: wrap;
`;

export const FormResultAmount = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;


    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }
`;

export const Button = styled.button`
    max-width: 200px;
    margin: 10px;
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 5px;
    transition: 1s;
    cursor: pointer;

    &:hover{
        filter: brightness(120%);
        transform: scale(1.05);
    }

    &:active{
        filter: brightness(140%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 500px;
    }
`;

export const Loading = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.teal};
    padding: 50px;
`;

export const Failure = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.monza};
    padding: 50px 10px;
`;

export const StyledResult = styled.div`
    text-align: center;
    margin: 0;
    padding: 0 0 10px;
`;
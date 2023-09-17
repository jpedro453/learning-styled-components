import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0.875rem;
    border-radius: 0.3125rem;
    input {
        background-color: ${(props) =>
            props.theme.title === "light"
                ? props.theme.colors.background
                : props.theme.colors.text};
        border: none;
        padding: 0.5rem 0.8rem;
        border-radius: 0.3125rem 0 0 0.3125rem;
        &::placeholder {
            color: ${(props) => props.theme.colors.primary};
        }
        &:focus {
            outline: none;
        }
    }
    .add {
        background-color: ${(props) =>
            props.theme.title === "light"
                ? props.theme.colors.background
                : props.theme.colors.text};
        color: ${(props) => props.theme.colors.primary};
        border: 1px solid ${(props) => props.theme.colors.primary};
        font-weight: 600;
        padding: 0.5rem 0.8rem;
        border-radius: 0 0.3125rem 0.3125rem 0;
        cursor: pointer;
    }
    .lists-container {
        margin-top: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }
`;

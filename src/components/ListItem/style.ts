import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) =>
        props.theme.title === "light"
            ? props.theme.colors.background
            : props.theme.colors.text};
    color: #000;
    padding: 0.5rem 0.8rem;
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.completed {
        background-color: ${(props) => props.theme.colors.green};
        color: #fff;
    }
    .actions {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        button {
            border: none;
            cursor: pointer;
            padding: 0.4rem;
            border-radius: 0.3125rem;
            color: #fff;
            &.complete {
                background-color: ${(props) => props.theme.colors.green};
            }
            &.remove {
                background-color: ${(props) => props.theme.colors.red};
            }
            &.edit {
                background-color: #f1cf55;
            }
        }
    }
`;

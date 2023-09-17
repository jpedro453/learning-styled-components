import styled from "styled-components";

export const Container = styled.select`
    background-color: #fff;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 6.4px;
    margin-top: 0.8rem;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 16px 12px;
    background-position: right 0.75rem center;
    padding: 0.5rem 1rem;
    &:focus {
        border: none;
        outline: none;
    }
`;

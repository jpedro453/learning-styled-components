import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 1.5rem;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 14px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 0px;
        bottom: -3px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: ${(props) => props.theme.colors.secondary};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px ${(props) => props.theme.colors.secondary};
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

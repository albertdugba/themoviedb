import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html,body{
        padding:0;
        margin:0;
    }
    *,*::before,*::after{
        box-sizing:border-box;
    }


    body{
        font-family: "Vollkorn", serif !important;
        background:${({ theme }) => theme.bgColor} !important;
        color:${({ theme }) => theme.textColor} !important;
        height:100vh;
        display:flex;
        justify-content:center;

    }

`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 30px auto;
`;

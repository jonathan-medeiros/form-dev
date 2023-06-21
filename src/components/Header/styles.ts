import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px 0px;
    border-bottom: 1px solid #16195C;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 28px;
    }

    p{
        font-size: 14px;
        color: #B8B8D4;
    }

    @media (max-width: 980px){
        padding-left: 40px;
        padding-bottom: 0;
        margin-top: 20px;
        border-bottom: 6px solid #16195C;
    }
`;
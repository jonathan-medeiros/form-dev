import styled from 'styled-components';

export const Container = styled.div`
    
    p{
        font-size: 13px;
        color: #B8B8D4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr{
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }
`;

export const InfoArea = styled.div`
    display: flex;
`;
export const Description = styled.div`
    text-align: right;

    p{
        font-size: 16px;
        color: #B8B8D4;
    }

`;
export const Result = styled.div`
    margin-left: 20px;
    flex: 1;

    p{
        font-size: 16px;
        color: #FFF;
        
    }
`;
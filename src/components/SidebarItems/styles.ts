import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 40px 0;
    cursor: pointer;
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    margin-right: 30px;
`;
export const Title = styled.div`
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
`;
export const Description = styled.div`
    font-size: 13px;
    color: #B8B8D4;
`;
export const IconArea = styled.div<{ selected: boolean }>`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.selected ? '#25CD89' : '#535386'};

`;
export const Dot = styled.div`
    display: flex;
    align-items: center;
`;

export const Mark = styled.div<{ selected: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #535386;
    margin-right: -6px;
    background-color: ${props => props.selected ? '#25CD89' : 'none'};
`;
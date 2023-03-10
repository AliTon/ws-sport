import styled from 'styled-components'

export const HeaderStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
    background: #292c3d;
    color: #c4c7d4;

    img {
        margin: 8px;
        border-radius: 16px;
    }

    .title {
        margin: 5px;
        font-weight: bold;
        font-size: 28px;
    }
`

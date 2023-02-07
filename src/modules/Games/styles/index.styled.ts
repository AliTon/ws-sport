import styled from 'styled-components'

export const TabMenuStyle = styled.div`
    background-color: #292c3d;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const DropdownMenuStyle = styled.div`
    background-color: #292c3d;
    width: 300px;
    height: 100%;
    padding: 10px;
    .title {
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        color: #ffffff;
    }
`

export const MainPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    .content {
        display: flex;
        height: 100%;
    }
`

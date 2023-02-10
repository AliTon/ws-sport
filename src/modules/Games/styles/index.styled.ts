import styled from 'styled-components'

export const GamesTabMenuStyle = styled.div`
    background-color: #292c3d;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 8px;
`
export const RegionDropdownMenuStyle = styled.div`
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
export const MatchesContentStyle = styled.div`
  width: 100%;
  margin-right: 20px;
  border-radius: 8px;
  background-color: #363949;
  .matches-title {
    background-color: #363949;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 40px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid #292c3d;
    padding: 0 8px;
  }
`
export const MatchesItemStyle = styled.div<{highlight: boolean}>`
  background: #434656;
  border-radius: 0 8px 8px 0;
  width: 70%;
  min-height: 200px;
  overflow-x: auto;
  border-bottom: 1px solid #292c3d;
  border-top: 1px solid #292c3d;
  color: #c4c7d4;
  .matchesItem_title {  
    font-weight: 500;
    font-size: 20px;
    margin: 4px 8px;
  }
  .updated_values {
    color: ${props => props.highlight ? 'red' : 'white'};
  }
  .matchesItem_time {
    text-align: right;
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 80px;
      opacity: .6;
      background: ${props => props.highlight ? 'red' : '#292c3d'};
      border-radius: 16px;
      padding: 4px;
      margin: 4px;
    }
  }
  .matchesItem_date_status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px;
  }
  .matchesItem_score {
    display: flex;
    align-items: center;
    margin: 0 8px;
    color: #c4c7d4;
    div {
      font-weight: bold;
      margin: 0 8px;
      font-size: 20px;
      opacity: .6;
      background: ${props => props.highlight ? 'red' : '#292c3d'};
      border-radius: 16px;
      padding: 4px 20px;
    }

  }
  .matchesItem_scores {
    display: flex;
    align-items: center;
    margin: 0 8px;
    color: #c4c7d4;
    .matchesItem_scores_item {
      display: flex;
      height: 120px;
      align-items:center;
      justify-content: center;
      margin: 0 8px;
      max-width: 800px;
      overflow-x: auto;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 80px;
        opacity: .6;
        background: ${props => props.highlight ? 'red' : '#292c3d'};
        border-radius: 16px;
        padding: 4px;
        margin: 4px;
      }
    }
  }
`
export const TabItemStyle = styled.div<{ active: boolean }>`
    color: ${(props) => (props.active ? '#3CEFE4' : '#8F92A3')};
    font-weight: normal;
    border-radius: ${(props) => (props.active ? '8px' : '')};
    background: ${(props) => (props.active ? '#363949' : '')};
    width: 120px;
    height: 70px;
    padding: 4px 8px 8px 8px;
    box-shadow: ${(props) =>
    props.active ? '0 4px 16px rgba(0, 0, 0, 0.25)' : ''};
    .tabDescription_count {
        display: flex;
        justify-content: end;
        font-size: 12px;
    }
    .tabDescription_name_icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    &:hover .tabDescription_name_icon {
        color: ${(props) => (props.active ? '#3CEFE4' : '#ffffff')};
        cursor: pointer;
        transition: 0.6s;
    }
`


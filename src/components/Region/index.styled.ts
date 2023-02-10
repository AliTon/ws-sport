import styled from 'styled-components'

interface stateProps {
    state: boolean
}

export const RegionStyle = styled.div<stateProps>`
    background-color: #363949;
    color: #c4c7d4;
    width: 100%;
    height: 40px;
    margin-top: 8px;
    transition-duration: 0.4s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${(props) => (props.state ? '8px 8px 0 0' : '8px')};
    .region_name {
        margin: 0 8px;
        padding: 0 8px;
    }
    .ellipsis-text {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 220px;
        opacity: ${(props) => (props.state ? 0.7 : 1)};
    }
    &:hover {
        cursor: pointer;
        transition: 0.3s;

        .ellipsis-text {
            opacity: 1;
        }
    }

    .region_tournament_count {
        width: 50px;
        margin: 0 8px;
        border-radius: 12px;
        background-color: #434656;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const TournamentItemStyle = styled.div`
    div {
        background-color: #434656;
        display: flex;
        align-items: center;
        height: 40px;
        margin-top: 1px;
        color: #c4c7d4;

        &:hover {
            cursor: pointer;
            transition: 0.3s;

            .ellipsis-text {
                opacity: 1;
            }
        }

        .tournamentItem_star {
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .tournamentItem_name {
            margin: auto;
            text-align: start;
        }

        .tournamentItem_count {
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .ellipsis-text {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 220px;
            opacity: 0.7;
        }
    }
`
export const ArrowStyle = styled.div<stateProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 8px;
    div {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #c4c7d4;
        transition: 0.3s;
        transform: ${(props) => `rotate(${props.state ? 180 : 0}deg)`};
    }
`

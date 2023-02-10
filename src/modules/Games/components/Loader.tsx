import styled, {keyframes} from "styled-components";
import React from "react";


const Loader = () => {
    const bounce = keyframes`
      to {
        opacity: 0.3;
        transform: translate3d(0, -1rem, 0);
      }
    `;

    const LoaderStyle = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;

      .main {
        display: flex;
        justify-content: center;

        div {
          width: 1rem;
          height: 1rem;
          margin: 2rem 0.3rem;
          background: #979fd0;
          border-radius: 50%;
          animation: 0.9s ${bounce} infinite alternate;

          &:nth-child(2) {
            animation-delay: 0.3s;
          }

          &:nth-child(3) {
            animation-delay: 0.6s;
          }
          i {
            display: flex;
            align-items: center;
          }

          div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2px;
          }
        }
      }
    `;


    return (
        <LoaderStyle>
            <div className='main'>
                <div><i className='fa-regular fa-futbol'/></div>

                <div><i className='fa-solid fa-basketball'/></div>

                <div><i className='fa-solid fa-volleyball'/></div>
            </div>
            <div className='main'>
                <div><i className='fa-solid fa-futbol'/></div>

                <div><i className='fa-solid fa-basketball'/></div>

                <div><i className='fa-solid fa-volleyball'/></div>
            </div>
        </LoaderStyle>


    )
}

export default Loader

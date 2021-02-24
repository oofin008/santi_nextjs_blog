import styled from 'styled-components'

const HeaderStyleBox = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  padding: 0 3rem;
  margin: 0 0 3rem;
  background: rgba(0,0,0,.25);
  box-shadow: inset 0 -2px 5px rgb(0 0 0 / 33%);

  .header-logo {
    transition: 0s;
    flex: 0;
    position: relative;
    align-self: stretch;

    > a {
      display: flex;
      align-items: center;
    }
  }

  .header-middle-area {
    flex: 1;
    width: 100%;

    .main-nav {
      > ul {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        height: 100%;
        list-style: none;
        list-style-image: none;

        > li > a {
          font-family: Gotham Narrow SSm A,Gotham Narrow SSm B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
          font-style: normal;
          font-weight: 800;
          text-transform: uppercase;
          font-weight: 500;
          font-size: .8rem;
          height: 100%;
          color: #fff;
          padding: 1.2rem 1rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
      }
    }
  }
`;

export default HeaderStyleBox;
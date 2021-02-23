import styled from 'styled-components'

const HeaderStyleBox = styled.nav`
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  background-color: red;
  padding: 0 3rem 0 3rem;

  > * {
    min-width: 100px;
    min-height: 25px;
    max-height: 100%;
    padding: 0 10px 0 10px;
    color: blue;
    background-color: linear-gradient(180deg, white, grey);
  }
`;

export default HeaderStyleBox;
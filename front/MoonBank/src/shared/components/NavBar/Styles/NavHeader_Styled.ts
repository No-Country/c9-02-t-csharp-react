import styled from 'styled-components';

export const NavHeader_Styled = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 10px 12px;
  gap: 10px;
  background: var(--PurpleD);
  width: 100%;
  height: 70px;
  border-radius: 0 8px 0 0;

  > .NavProfile__UserSprite,
  > .NavProfile__UserSprite > img {
    border-radius: 100%;
  }
  > .NavProfile__UserSprite {
    width: 50px;
    height: 50px;
    border: 1px solid var(--Gray);
    background: #262626;
    > img {
      width: 100%;
      height: 100%;
      background-size: contain;
    }
  }

  > .NavProfile__UserInfo {
    display: grid;
    grid-template-rows: repeat(2, 1fr) 1.3fr;
    width: calc(100% - 10px - 50px);
    justify-items: center;

    > .NavProfile__UserInfo_Welcome,
    > .NavProfile__UserInfo_Welcome_Name {
      align-self: center;
      font-size: 14px;
      font-family: 'Montserrat';
      color: var(--White);
    }
    > .NavProfile__UserInfo_Welcome_Name {
      font-weight: bold;
      font-size: 15px;
    }

    > .NavProfile__UserInfo_Credits {
      align-self: center;
      font-size: 12px;
      font-family: 'Montserrat';
      color: var(--White);
      > .NavProfile__UserInfo_Credits_Amount {
        font-weight: bold;
      }
    }
  }
`;

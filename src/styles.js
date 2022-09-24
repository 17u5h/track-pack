import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :before {
      box-sizing: border-box;
    }

    :after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
  }

  a, a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  @font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('../fonts/Stratos-Regular.woff2') format('woff2'),
    url('../fonts/Stratos-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

export const Main = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Nav = styled.div`
  width: 150px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`

export const Logo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;

  img {
    width: 113.33px;
    height: 17px;
    color: #181818;
  }
`

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
	cursor: pointer;
`

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #D3D3D3;
`

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`

export const NavMenuList = styled.ul`
  padding: 18px 0 10px 0;

  li {
    padding: 5px 0;
    margin-bottom: 16px;

    a {
      color: #FFFFFF;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
`

export const CentralBlock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
  }
`

export const CentralBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4E4E4E;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
  }

  input {
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;

    &::placeholder {
      background-color: transparent;
      color: #FFFFFF;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
`

export const CentralBlockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
  position: relative;
`

export const CentralBlockContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #FFFFFF;
  background-color: #181818;
  color: #fff;
  border-radius: 60px;
  padding: 6px 20px;
  user-select: none;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    border-color: #D9B6FF;
    color: #D9B6FF;
  }

  :active {
    border-color: #AD61FF;
    color: #AD61FF;
  }
`

export const PopUp = styled.div`
  position: absolute;
  top: 50px;
  left: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px;
  gap: 24px;
  background: #313131;
  border-radius: 12px;
  width: 248px;
  height: 305px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background: #4B4949;
    background-clip: content-box;
    border-right: 34px solid transparent;
    border-top: 34px solid transparent;
    border-bottom: 34px solid transparent;
    width: 38px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border-right: 34px solid transparent;
    border-top: 34px solid transparent;
    border-bottom: 34px solid transparent;
    background-color: #fff;
    border-radius: 2px;
  }

  p {
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;

    &:hover {
      color: #B672FF;
      text-decoration: underline;
    }
  }
`
export const PopUpMoved240 = styled(PopUp)`
  left: 240px;
`
export const PopUpMoved390 = styled(PopUp)`
  left: 390px;
`

export const PlayListTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`


export const PlaylistTitleItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;

  svg {
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
`

export const PlaylistTitleItem01 = styled(PlaylistTitleItem)`
  width: 340px;
`
export const PlaylistTitleItem02 = styled(PlaylistTitleItem)`
  width: 260px;
`
export const PlaylistTitleItem03 = styled(PlaylistTitleItem)`
  width: 200px;
`
export const PlaylistTitleItem04 = styled(PlaylistTitleItem)`
  width: 60px;
  text-align: end;
`
export const PlaylistTitleIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 340px;
`

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;

  svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
  }
`

export const TrackTitleText = styled.div`
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4E4E4E;
  }
`

export const TrackAuthor = styled.div`
  width: 260px;
  display: flex;
  justify-content: flex-start;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    text-align: left;
  }
`

export const TrackAlbum = styled.div`
  width: 200px;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
  }
`

export const TrackTime = styled.div`
  svg {
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
  }
`

export const SideBar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`

export const SideBarPersonal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
	gap: 10px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
`

export const PersonalAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`

export const SideBarBlock = styled.div`
  height: 100%;
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const SideBarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SideBarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  a {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }
`

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2E2E2E;
`

export const PlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

const PlayerButton = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`
export const PlayerButtonPrev = styled(PlayerButton)`
  margin-right: 23px;

  svg {
    width: 15px;
    height: 14px;
  }
`
export const PlayerButtonPlay = styled(PlayerButton)`
  margin-right: 23px;

  svg {
    width: 22px;
    height: 20px;
    fill: #D9D9D9;
  }
`
export const PlayerButtonNext = styled(PlayerButton)`
  margin-right: 28px;
  fill: #a53939;

  svg {
    width: 15px;
    height: 14px;
    fill: none;
    stroke: #D9D9D9;
  }
`
export const PlayerButtonRepeat = styled(PlayerButton)`
  margin-right: 24px;

  svg {
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
`
export const PlayerButtonShuffle = styled(PlayerButton)`
  display: flex;
  align-items: center;

  svg {
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
`
export const TrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author''image album';
  align-items: center;
`
export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;

  svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
  }
`
export const TrackPlayAuthor = styled.div`
  grid-area: author;
  min-width: 49px;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
  }
`
export const TrackPlayAlbum = styled.div`
  grid-area: album;
  min-width: 49px;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
  }
`
export const TrackPlayLikeDislike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;

  div {
    padding: 5px;

    :active {
      fill: #696969;
      stroke: #FFFFFF;
      cursor: pointer;
    }

    :hover svg {
      fill: transparent;
      stroke: #ACACAC;
      cursor: pointer;
    }

    :active svg {
      fill: transparent;
      stroke: #FFFFFF;
      cursor: pointer;
    }

    div {
      fill: #696969;
      stroke: #FFFFFF;
      cursor: pointer;
    }
  }
`
export const LikeDislikeSvg = styled.svg`
  fill: transparent;
  stroke: #696969;
  width: ${(props) => (props.$like ? "14px" : "14.34px")};
  height: ${(props) => (props.$like ? "12px" : "13px")};
`
export const BarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;

  svg {
    width: 13px;
    height: 18px;
    fill: transparent;
  }
`
export const VolumeValue = styled.div`
  width: 109px;

  input {
    width: 109px;
    cursor: pointer;
  }
`
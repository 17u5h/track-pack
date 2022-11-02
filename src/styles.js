import styled, {createGlobalStyle} from "styled-components";

const dark = {
	$background: '#383838',
	$icon: '#4e4e4e',
	$text: '#fff',
	$textFade: '#4e4e4e',
	$navBackground: '#1c1c1c',
	$container: '#181818',
	$switcher: 'url("./img/toggle-dark.svg")',
	$buttons: '#4e4e4e',
	$filterButtonActive: '#AD61FF',
	$filterButtonHover: '#D9B6FF',
	$barBackground: 'rgba(28, 28, 28, 0.5)',
	$backgroundTrackImage: '#313131',
	$volumeColor: '#fff',
}

const light = {
	$background: '#fff',
	$icon: '#f6f4f4',
	$text: '#000',
	$textFade: '#b1b1b1',
	$navBackground: '#f6f5f3',
	$container: '#fff',
	$switcher: 'url("./img/toggle-light.svg")',
	$buttons: '#d9d9d9',
	$filterButtonActive: '#D9B6FF',
	$filterButtonHover: '#AD61FF',
	$barBackground: 'rgba(255, 255, 255, 0.5)',
	$backgroundTrackImage: '#f6f4f4',
	$volumeColor: '#b1b1b1',
}


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
`
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: ${(props) => (props.isDarkTheme ? `${dark.$background}` : `${light.$background}`)};
`

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => (props.isDarkTheme ? `${dark.$container}` : `${light.$container}`)};
`

export const Main = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Nav = styled.div`
  width: 150px;
  background-color: ${(props) => (props.isDarkTheme ? `${dark.$container}` : `${light.$container}`)};
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
  background-color: ${(props) => (props.isDarkTheme ? '#D3D3D3' : '#000')};
`

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`

export const NavMenuList = styled.ul`
  padding: 18px 0 10px 0;
`

export const NavMenuLink = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`

export const ButtonToggleTheme = styled.li`
  width: 39px;
  height: 39px;
  cursor: pointer;
  background: ${(props) => (props.isDarkTheme ? `${dark.$switcher}` : `${light.$switcher}`)} no-repeat center;
  background-size: cover;
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
  border-bottom: 1px solid ${(props) => (props.isDarkTheme ? `${dark.$buttons}` : `${light.$buttons}`)};
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
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
    color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};

    &::placeholder {
      background-color: transparent;
      color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
`
export const CentralBlockTitle = styled.h2`
  color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
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
  color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterContainer = styled.div`
  position: relative;

  :not(:last-child) {
    margin-right: 10px;
  }
`

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
  background-color: ${(props) => (props.isDarkTheme ? `${dark.$container}` : `${light.$container}`)};
  color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
  border-radius: 60px;
  padding: 6px 20px;
  user-select: none;

  :hover {
    border-color: ${(props) => (props.isDarkTheme ? `${dark.$filterButtonHover}` : `${light.$filterButtonHover}`)};
    color: ${(props) => (props.isDarkTheme ? `${dark.$filterButtonHover}` : `${light.$filterButtonHover}`)};
  }

  :active {
    border-color: ${(props) => (props.isDarkTheme ? `${dark.$filterButtonActive}` : `${light.$filterButtonActive}`)};
    color: ${(props) => (props.isDarkTheme ? `${dark.$filterButtonActive}` : `${light.$filterButtonActive}`)};
  }
`

export const PopUp = styled.div`
  position: absolute;
  top: 50px;
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
  color: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
  text-transform: uppercase;

  svg {
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
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
  stroke: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
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
  background-color: ${(props) => (props.isDarkTheme ? `${dark.$backgroundTrackImage}` : `${light.$backgroundTrackImage}`)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;

  svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
  }
`

export const TrackTitleText = styled.div`
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
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
    color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
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
    color: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
  }
`

export const TrackTime = styled.div`
  svg {
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
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
    color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
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
  background: ${(props) => (props.isDarkTheme ? `${dark.$barBackground}` : `${light.$barBackground}`)};
`
export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: ${(props) => (props.isDarkTheme ? `${dark.$buttons}` : `${light.$buttons}`)};
  cursor: pointer;
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
    fill: ${(props) => (props.isDarkTheme ? `${dark.$buttons}` : `${light.$buttons}`)};
  }
`
export const PlayerButtonPlayPause = styled(PlayerButton)`
  margin-right: 23px;

  svg {
    width: 22px;
    height: 20px;
    fill: ${(props) => (props.isDarkTheme ? `${dark.$buttons}` : `${light.$buttons}`)};
  }
`
export const PlayerButtonNext = styled(PlayerButton)`
  margin-right: 28px;
  fill: #a53939;

  svg {
    width: 15px;
    height: 14px;
    fill: none;
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$buttons}` : `${light.$buttons}`)};
  }
`
export const PlayerButtonRepeat = styled(PlayerButton)`
  margin-right: 24px;

  svg {
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$buttons}` : `${light.$buttons}`)};
  }
`
export const PlayerButtonShuffle = styled(PlayerButton)`
  display: flex;
  align-items: center;

  svg {
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$buttons}` : `${light.$buttons}`)};
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
  background-color: ${(props) => (props.isDarkTheme ? `${dark.$backgroundTrackImage}` : `${light.$backgroundTrackImage}`)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;

  svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$textFade}` : `${light.$textFade}`)};
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
    color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
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
    color: ${(props) => (props.isDarkTheme ? `${dark.$text}` : `${light.$text}`)};
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
    fill: ${(props) => (props.isDarkTheme ? `${dark.$volumeColor}` : `${light.$volumeColor}`)};
    stroke: ${(props) => (props.isDarkTheme ? `${dark.$volumeColor}` : `${light.$volumeColor}`)};
  }
`
export const VolumeValue = styled.div`
  width: 109px;

  input {
    width: 109px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
		
    ::-webkit-slider-runnable-track {
      height: 2px;
      background-color: ${(props) => (props.isDarkTheme ? `${dark.$volumeColor}` : `${light.$volumeColor}`)};
      margin-top: -10px;
    }

    ::-webkit-slider-thumb {
      background: ${(props) => (props.isDarkTheme ? `${dark.$volumeColor}` : `${light.$volumeColor}`)};
      border-radius: 10px/100%;
			border: 1px solid ${(props) => (props.isDarkTheme ? `${dark.$buttons}` : `${light.$textFade}`)};;
      cursor: pointer;
      width: 12px;
      height: 12px;
      -webkit-appearance: none;
      margin-top: -5px;
    }
  }
  
`
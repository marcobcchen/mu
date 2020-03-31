import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styled, { keyframes } from 'styled-components'

//UI
import Paper from '@material-ui/core/Paper'
import Marquee from '../../components/Marquee/index'
//interface
// import { IHomeProps } from '../../interface/home'

//image
import img_bulletin from '../../assets/images/home/bulletin.png'
import Img_home_bg from '../../assets/images/home/home_bg.png'
import Img_home_login_icon from '../../assets/images/home/home_login_icon.png'
import Img_withdraw from '../../assets/images/home/withdraw.png'
import Img_deposit from '../../assets/images/home/deposit.png'
import Img_transfer from '../../assets/images/home/transfer.png'
import Img_vip from '../../assets/images/home/vip.png'
import Img_geme_category_bg from '../../assets/images/home/geme_category_bg.png'
import Img_non_select from '../../assets/images/home/non_select.png'
import Img_selected from '../../assets/images/home/selected.png'
import Img_carousel_1 from '../../assets/images/home/carousel_1.jpg'
import Img_carousel_2 from '../../assets/images/home/carousel_2.jpg'
import Img_carousel_3 from '../../assets/images/home/carousel_3.jpg'
import Img_card_sports_bob from '../../assets/images/home/card_sports_bob.png'

import TestData from './gameList';

//CSS
const useStyles = makeStyles(theme => ({
  homeContainer: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  bulletinIcon: {
    width: '1.75rem',
    height: 'auto',
    marginRight: '3px'
  },
  carouselContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto'
  },
  carouselItem: {
    background: 'white'
  },
  carouselItemImage: {
    backgroundSize: 'contain',
    width: '100% !important',
    height: 'auto'
  },
  marqueeContainer: {
    position: 'absolute',
    bottom: 0,
    padding: '0 15px',
    width: '100%',
    height: '22px',
    background: "rgba(0, 0, 0, .4)",
    borderRadius: '15px 15px 0 0',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userRelateContainer: {
    padding: '0 5%',
    width: '100%',
    height: '11%',
    background: `url(${Img_home_bg})`,
    backgroundSize: '100% auto'
  },
  userInfoBox: {
    width: '100%',
    height: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '.8rem'
  },
  loginLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginString: {
    marginRight: '5px'
  },
  loginIcon: {
    width: '1.5rem',
    height: '1.5rem'
  },
  transferRelateContainer: {
    width: '100%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '.8rem'
  },
  transferBox: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  transferIcon: {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '3px'
  },
  gamesContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    backgroundColor: '#f1f4f5'
  },
  gamesNavBar: {
    width: '100%',
    height: '6vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontSize: '.8rem'
  },
  gameBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '80%',
    background: 'white',
    transition: 'all .2s'
  },
  gameCategorySelected: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: '100%',
    backgroundImage: `url(${Img_geme_category_bg})`,
    backgroundColor: '#f1f4f5',
    backgroundSize: '101% 100%',
    backgroundRepeat: 'no-repeat',
    color: 'white'
  },
  gamesListContainer: {
    padding: '0 10px 60px 10px',
    width: '100%',
    height: '60vh',
    overflow: 'scroll'
  },
  gamesItemGroup: {
    width: '100%',
    height: 'auto'
  },
  gamesItemBox: {
    marginBottom: '6px',
    width: '100%',
    height: `${(window.innerWidth - 20) * 0.28}px`
  },
  gameTabTitle: {
    fontSize: '12px',
	  lineHeight: '1'
  },
  gameTabEnTitle: {
    fontSize: '.24rem',
    transform: 'scale(.5)',
    width: '200%',
    textAlign: 'center',
    lineHeight: '1'
  },
  gameItemAnimatiedBox: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${Img_card_sports_bob})`,
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat'
  },
  customStarBox: {
    position: 'absolute',
    left: '5%',
    top: '15%',
    width: '5%',
    height: 'auto'
  },
  customStarImg: {
    width: '100%',
	  height: 'auto'
  },
  gameInfoBox: {
    marginLeft: '46%',
    width: 'auto',
    height: '100%'
  },
  gameName: {
    margin: '0',
    paddingTop: '8px',
    fontSize: '1.2rem',
    color: 'white'
  },
  gameCount: {
    marginRight: '3px',
    fontSize: '1.5rem',
    color: 'white'
  },
  gameTitle: {
    fontSize: '.6rem'
  }
}))

const CustomCarousel = styled(Carousel)`
  .carousel-slider {
    .control-dots {
      padding: 0;
      left: 0;
      width: auto;
      height: 100%;
      margin: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        margin: 4px 0 !important;
      }
    }
  }
`;

const gameTabScale = keyframes`
  from {
    transform: scale(0)
  }

  to {
    transform: scale(1)
  }
`

const GameTabScale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${gameTabScale} .5s 1;
`

interface CarouselObject {
  url: string;
}

interface GameTabOject {
  key: string;
  order: number;
  title: string;
  subTitle: string;
  enTitle: string;
}

interface ScrollStill {
  key: string;
  still: number | null;
}

interface GameListDataItemObject {
  id: number;
  name: string;
  title: string;
  order: number;
  isfavorite: boolean;
  count: number;
  image: {
    url: string;
    width: number | string;
    height: number | string;
    format: string;
  },
  wap: string;
  app: string;
  redirect: string;
}

interface GameListDataObject {
  [index:string]: {
    order: number;
    title: string;
    subTitle: string;
    enTitle: string;
    item: Array<GameListDataItemObject>
  }
}

const HomePage: React.FC = (props: any) => {

  const classes = useStyles()
  const [ carouselData, setCarouselData ] = useState<Array<CarouselObject> | null>(null)
  const [ loginStatus, setLoginStatus ] = useState<boolean>(false)
  const [ gameNavPoint, setGameNavPoint ] = useState<string>('')
  const [ gameTabData, setGameTabData ] = useState<Array<GameTabOject> | null>(null)
  const [ gameListData, setGameListData ] = useState<GameListDataObject | null>(null)
  const [ gameScrollStill, setGameScrollStill ] = useState<Array<ScrollStill> | null>(null)

  useEffect(() => {
    // get carousel data
    setCarouselData([
      {
        "url": Img_carousel_1
      },
      {
        "url": Img_carousel_2
      },
      {
        "url": Img_carousel_3
      }
    ])

    setGameListData(TestData);

    let tmpTab:Array<GameTabOject> = []

    // game tab restructure
    Object.entries(TestData).map(item => {
      const [ key, data ] = item
      
      let tmpData = { ...data }
      delete tmpData.item;
      tmpTab.push({
        key,
        ...tmpData
      })
    })

    tmpTab.sort((a:any, b:any) => {
      return a.order - b.order;
    });

    setGameTabData(tmpTab)
    setGameNavPoint(tmpTab[0].key)
  }, [])

  useEffect(() => {

    // game list scroll still
    calculateScrollStill()
  }, [gameListData])

  const calculateScrollStill = () => {

    let scrollStill:Array<ScrollStill> = []

    const singleItemHeight = Math.floor((window.innerWidth - 20) * 0.28)
    let distance = 0

    gameListData && Object.entries(gameListData).map(item => {
      const [ key, data ] = item
      
      if (data.item.length == 0)
        scrollStill.push({key, still: null})
      else {
        distance += data.item.length * singleItemHeight
        scrollStill.push({key, still: distance})
      }
    })

    setGameScrollStill(scrollStill)
  }

  const loginLayout = () => {
    return (
      <React.Fragment>
        <div>
          <span>account</span>
          <span>icon</span>
        </div>
        <div>
          <span>中心钱包：</span>
          <span>{`¥ ${`0.00`}`}</span>
        </div>
      </React.Fragment>
    )
  }

  const unLoginLayout = () => {
    return (
      <React.Fragment>
        <span>欢迎您，亲爱的用户</span>
        <a className={classes.loginLink}>
          <span className={classes.loginString}>请先登录</span>
          <img src={Img_home_login_icon} className={classes.loginIcon} />
        </a>
      </React.Fragment>
    )
  }

  const handleScroll = (evt: React.UIEvent<HTMLDivElement>) => {

    let scrollPos = evt.currentTarget.scrollTop

    gameScrollStill && gameScrollStill.map((item:ScrollStill, index:number) => {
      const { key, still } = item
      const preDistance = index > 0 ? gameScrollStill[index - 1].still : 0

      if (still && preDistance != null && scrollPos >= preDistance && scrollPos < still) {
        setGameNavPoint(key)
      }
    })
  } 

  const scrollToPostion = (gameKey: string) => (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setGameNavPoint(gameKey)

    let scrollView = document.getElementById('scrollView')

    gameScrollStill && gameScrollStill.map((item:ScrollStill, index:number) => {
      const { key, still } = item

      if (key != gameKey || still == null || key == gameNavPoint)
        return

      let scrollDistance = index > 0 ? gameScrollStill[index - 1].still : 0
      scrollView && scrollDistance != null && scrollView.scrollTo(0, scrollDistance);
    })
  }

  const favoriteLayout = (loginState: boolean, isfavorite: boolean) => {
    if (!loginState)
      return

    if (isfavorite) {
      return (
        <div className={classes.customStarBox}>
          <img className={classes.customStarImg} src={Img_selected} />
        </div>
      )
    }
    else {
      return (
        <div className={classes.customStarBox}>
          <img className={classes.customStarImg} src={Img_non_select} />
        </div>
      )
    }
  }

  const gameListItemLayout = (key: string, info: GameListDataItemObject, index: number) => {
    return (
      <div key={index} className={classes.gamesItemBox} id={key}>
        <div className={classes.gameItemAnimatiedBox}>
          { favoriteLayout(loginStatus, info.isfavorite) }
          <div className={classes.gameInfoBox}>
            <p className={classes.gameName}>{info.name}</p>
            <span className={classes.gameCount}>{info.count}</span>
            <span className={classes.gameTitle}>{info.title}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Paper elevation={0} className={classes.homeContainer}>
      <div className={classes.carouselContainer}>
        <CustomCarousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={true}
        >
        {
          carouselData &&
          carouselData.map((item, index) => {
            const { url } = item

            return (
              <div key={index} className={classes.carouselItem}>
                <img src={url} className={classes.carouselItemImage} />
              </div>
            )
          })
        }
        </CustomCarousel>
        <div className={classes.marqueeContainer}>
          <img src={img_bulletin} className={classes.bulletinIcon} />
          <Marquee
            text='小時候我有一個百思不解的問題。故事發生在物質缺乏的花蓮鄉下，小孩子很少有機會吃糖，見到糖果餅乾都非常餓鬼」'
          />
        </div>
      </div>
      <div className={classes.userRelateContainer}>
        <div className={classes.userInfoBox}>
          { loginStatus ? loginLayout() : unLoginLayout() }
        </div>
        <div className={classes.transferRelateContainer}>
          <div className={classes.transferBox}>
            <img src={Img_withdraw} className={classes.transferIcon} />
            <span>存款</span>
          </div>
          <div className={classes.transferBox}>
            <img src={Img_deposit} className={classes.transferIcon} />
            <span>取款</span>
          </div>
          <div className={classes.transferBox}>
            <img src={Img_transfer} className={classes.transferIcon} />
            <span>转账</span>
          </div>
          <div className={classes.transferBox}>
            <img src={Img_vip} className={classes.transferIcon} />
            <span>VIP详情</span>
          </div>
        </div>
      </div>
      <div className={classes.gamesContainer}>
        <div className={classes.gamesNavBar}>
          {
            gameTabData &&
            gameTabData.map((item, index:number) => {
              const { key, title, subTitle, enTitle } = item

              // if (requireLogin && !loginStatus)
              //   return;

              if (key == gameNavPoint) {
                return (
                  <div key={index} className={classes.gameCategorySelected}>
                    <GameTabScale>
                      <span className={classes.gameTabTitle}>{title}</span>
                      <span className={classes.gameTabEnTitle}>{enTitle}</span>
                    </GameTabScale>
                  </div>
                )
              }
              else {
                return (
                  <div key={index} className={classes.gameBox} onClick={scrollToPostion(key)}>
                    <span>{subTitle}</span>
                  </div>
                )
              }
            })
          }
        </div>
        <div id='scrollView' className={classes.gamesListContainer} onScroll={handleScroll}>
          {
            gameListData &&
            Object.entries(gameListData).map((item, index:number) => {
              const [ key, data ] = item

              return (
                <div key={index} className={classes.gamesItemGroup} id={key}>
                  { data.item.map((info: GameListDataItemObject, index: number) => gameListItemLayout(key, info, index)) }
                </div>
              )
            })
          }
        </div>
      </div>
    </Paper>
  )
}

const mapStateToProps = (state: any) => {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps, { })(HomePage)

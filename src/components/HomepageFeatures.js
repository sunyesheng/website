import React from 'react'
import { useSpring, animated, useTrail } from 'react-spring'
import styled from '@emotion/styled'
import BgImage from '@site/static/img/home/bg5.svg'
import MusicUrl from '@site/static/img/home/music.svg'
import Styles from './HomepageFeatures.module.scss'
// import BillBill from '@site/static/img/home/billbill.svg'
// import QQ from '@site/static/img/home/qq.svg'
// import WeChat from '@site/static/img/home/weChat.svg'

export default function HomepageFeatures() {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(3em)' },
    delay: 0,
  })

  // const props2 = useSpring({
  //   opacity: 1,
  //   transform: 'translateY(0)',
  //   from: { opacity: 0, transform: 'translateY(3em)' },
  //   delay: 300,
  // })

  // const props3 = useSpring({
  //   opacity: 1,
  //   transform: 'translateY(0)',
  //   from: { opacity: 0, transform: 'translateY(3em)' },
  //   delay: 600,
  // })

  // const animatedTexts = useTrail(5, {
  //   from: { opacity: 0, transform: 'translateY(3em)' },
  //   to: { opacity: 1, transform: 'translateY(0)' },
  //   config: {
  //     mass: 3,
  //     friction: 45,
  //     tension: 460,
  //   },
  // })

  return (
    <div className={Styles.mainWrapper}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 'calc(100vh - 60px)',
        }}
      >
        <SvgBackGround />
      </div>
      <div style={props} className={Styles.title}>
        <div>
          Welcome to
          <span> Sunyesheng</span>
          's Channel
        </div>
        <div class={Styles.subTitle}>A Rookie Rrogrammer</div>
        {/* <SocialLinks animatedProps={animatedTexts[4]} /> */}
      </div>

      {/* <Music></Music> */}
    </div>
  )
}

// function SocialLinks({ animatedProps, ...props }) {
//   // const { isDarkTheme } = useThemeContext();
//   return (
//     <animated.div className={Styles.socialLinks} style={animatedProps}>
//       <a href="https://space.bilibili.com/345132581">
//         <BillBill />
//       </a>
//       <a href="https://space.bilibili.com/345132581">
//         <QQ />
//       </a>
//       <a href="https://space.bilibili.com/345132581">
//         <WeChat />
//       </a>
//     </animated.div>
//   )
// }

const SvgBackGround = styled(BgImage)`
  height: 70%;
  width: 50vw;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
  margin-bottom: 20px;
`

const Music = styled(MusicUrl)`
  position: fixed;
  bottom: 0px;
  right: 0px;
`

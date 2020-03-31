import React from 'react'
import styled, { keyframes } from 'styled-components'

//CSS
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  marqueeContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  }
}))

interface MarqueeProps {
  text: string;
  containerClass?: string;
  textClass?: string;
}

const marquee = keyframes`
  from {
    transform: translateX(100%)
  }

  to {
    transform: translateX(-100%)
  }
`

const MarqueeSapn = styled.span`
  animation-duration: 10s;
	animation-name: ${marquee};
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	white-space:nowrap;
	font-size: 12px;
`

const Marquee: React.FC<MarqueeProps> = props => {
  const classes = useStyles()
  let speed = Math.ceil(props.text.length / 3);

  return (
    <div className={classes.marqueeContainer}>
      <MarqueeSapn style={{ animationDuration: `${speed + 5}s` }}>{props.text}</MarqueeSapn>
    </div>
  )
}

export default Marquee
import React from 'react'
// import { Direction, Slider } from 'react-player-controls'
import { makeStyles } from '@material-ui/core'

// const WHITE_SMOKE = 'grey'
// const GRAY = '#878c88'
// const GREEN = '#72d687'
const YT = 'red'

const styles = makeStyles( (theme) => ({
  sliderBar: {
    position: 'absolute',
    background: YT,
    borderRadius: 4,
    top: 0,
    bottom: 0,
    left: 0,
    height: 5,
    zIndex: 1,
    cursor: 'pointer',
    '&:hover': {
      background: 'green'
    }
  },
  buffer: {
    position: 'absolute',
    background: '#B9B7B7',
    borderRadius: 4,
    top: 0,
    bottom: 0,
    left: 0,
    height: 5,
  },
  sliderHandle: {
    position: 'absolute',
    width: 16,
    height: 16,
    background: YT,
    borderRadius: '100%',
    transform: 'scale(0.8)',
    transition: 'all 0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    top: 0,
    marginTop: -5,
    marginLeft: -8,
    zIndex: 2
  }
}))

// seeker
export const SliderBar = ({ value }) => (
  <div className={styles().sliderBar} style={{ width: `${value * 100}%` }} />
)

// buffer
export const Buffer = ({ value }) => (
    <div className={styles().buffer} style={{ width: `${value * 100}%` }} />
)



// A handle to indicate the current value
export const SliderHandle = ({ value }) => (
  <div className={styles().sliderHandle} style={{ left: `${value * 100}%` }}
  />
)

// A composite progress bar component
// const ProgressBar = ({ isEnabled, direction, value, buffer, onChange, onChangeStart, onChangeEnd, ...props }) => (
//   <Slider
//     direction={direction}
//     onChange={onChange}
//     onChangeStart={onChangeStart}
//     onChangeEnd={onChangeEnd}
//     style={{
//       width: '100%',
//       height: 3,
//       borderRadius: 4,
//       background: WHITE_SMOKE,
//       // transition: direction === Direction.HORIZONTAL ? 'width 0.1s' : 'height 0.1s',
//       cursor: isEnabled === true ? 'pointer' : 'default',
//       '&:hover': {
//         transform: 'scale(2.9)',
//         margin: 20
//       }
//     }}
//     {...props}
//   >
//     <SliderBar direction={direction} value={value} style={{ background: isEnabled ? YT : GRAY }} />
//     <SliderHandle direction={direction} value={value} style={{ background: isEnabled ? YT : GRAY }} />
//     <Buffer direction={direction} value={buffer} />
//   </Slider>
// )

// export default ProgressBarexport 
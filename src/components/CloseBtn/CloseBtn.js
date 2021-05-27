import React, {Component} from 'react'

class CloseBtn extends Component {
  constructor(props){
    super(props)
    this.addScaleAnimate = this.addScaleAnimate.bind(this)
    this.removeScaleAnimate = this.removeScaleAnimate.bind(this)
  }

  addScaleAnimate(e){
    e.target.closest('span').className += ' scale-animate'
  }

  removeScaleAnimate(e){
    e.target.closest('span').className = 'close-btn'
  }

  render(){
    const { click, getRef, index } = this.props
    return (
      <span className   = 'close-btn'
            onClick     = {click}
            data-index  = {index}
            ref         = {getRef}
            onMouseDown = {this.addScaleAnimate}
            onMouseUp   = {this.removeScaleAnimate}
            onMouseMove = {this.removeScaleAnimate}
            onDrag      = {this.removeScaleAnimate}>
        <svg  xmlns='http://www.w3.org/2000/svg'
              className='close-svg'
              width='12'
              height='11.993'
              viewBox='0 0 12 11.993'>
          <path   fill='#fff'
                  d='M12 1.2L10.8 0 6 4.797 1.2 0 0 1.2l4.8 4.796L0 10.794l1.2 1.2L6 7.195l4.8 4.797 1.2-1.2-4.8-4.797L12 1.2z'/>
        </svg>
      </span>
    )
  }
}

export default CloseBtn

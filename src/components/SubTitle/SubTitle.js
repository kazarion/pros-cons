import React, {Component} from 'react'

class SubTitle extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {label, quan} = this.props

    return(
    <h2 className='sub-title'>
      <span className='sub-title__txt'>
        {label}
      </span>
      <span className='sub-title__quant'>
        <i className='dash'> - </i>
          <u className='numb'>
            {quan}
          </u>
      </span>
    </h2>)
  }
}

export default SubTitle

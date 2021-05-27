import React, {Component} from 'react'

class Title extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.element.className += ' vis'
  }
  render(){
    const {label}  = this.props
    return(
      <h1 className='title' ref={element => this.element = element}>
        {label}
      </h1>
    )
  }
}

export default Title

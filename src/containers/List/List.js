import React, {Component}       from 'react'
import {connect}                from 'react-redux'

import SortableItem             from '../../components/Item/Item'

import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'

class List extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const {colName, getState} = this.props
    return (
            <div className={`scroll-cell ${getState[colName].length <= 3 ? '' : 'scroll-cell--fix-height'}`}>
              <ReactCSSTransitionGroup
                    component='ul'
                    className='list'
                    transitionName='slide'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={1}>
                {
                  getState[colName].map(
                    (item, ind) => {
                    return <SortableItem  label    = {item}
                                          key      = {'item'+ind}
                                          index    = {ind}
                                          ind      = {ind}
                                          type     = {colName}/>
                    }
                  )
                }
              </ReactCSSTransitionGroup>
            </div>
    )
  }
}

export default connect(
  state => ({
    getState: state
  })
)(List)

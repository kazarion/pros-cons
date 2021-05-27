import React, {Component}   from 'react'
import {connect}            from 'react-redux'

import CloseBtn             from '../../components/CloseBtn/CloseBtn'
import Label                from '../../components/Label/Label'
import Input                from '../../components/Input/Input'
import NumberCell           from '../../components/NumberCell/NumberCell'
import {SortableElement}    from 'react-sortable-hoc'

class Item extends Component {
  constructor(props){
    super(props)
    this.handleLabelClick      =  this.handleLabelClick.bind(this)
    this.handleBlur            =  this.handleBlur.bind(this)
    this.handleKeyDown         =  this.handleKeyDown.bind(this)
    this.itemAction            =  this.itemAction.bind(this)
    this.editItem              =  this.editItem.bind(this)
    this.handleCloseClick      =  this.handleCloseClick.bind(this)
    this.blur                  =  true
    this.state                 =  {visible:false}
  }

  handleLabelClick(){
    this.getInput.value = this.getInput.dataset['value']
    this.setState(
      {
        visible: !this.state.visible
      },
      () => {
              this.getInput.focus()
              this.blur = true
            }
    )
  }

  handleBlur(event){
    this.itemAction(event, 'blur')
  }

  handleKeyDown(event){
    this.itemAction(event, 'keyDown')
  }

  handleCloseClick(event){
    const getIndexItem = event.target
                        .closest('.list__item')
                        .querySelector('.input')

    const index = getIndexItem.dataset['index']
    const type = getIndexItem.dataset['type']
    this.props.onDeleteItem(`DELETE_${type.toUpperCase()}`, index)
  }

  itemAction(item, act){
    if (act === 'keyDown'){
      if (item.keyCode === 13){
        this.blur = false
        this.editItem(item, act)
      }
    }
    if (act === 'blur' && this.blur === true){
      this.editItem(item, act)
    }
  }

  editItem(item, act){
      const elementID   = parseInt(item.target.dataset['index'], 10)
      const elementVal  = item.target.value
      const elementType = item.target.dataset['type']

      if (elementVal.trim()!== ''){
        this.props.onChangeItem(
          `UPDATE_${elementType.toUpperCase()}`,
          elementID,
          elementVal
          )
      }

      if (elementVal.trim() === ''){
        this.props.onDeleteItem(
          `DELETE_${elementType.toUpperCase()}`,
          elementID
        )
      }
      this.setState({visible:false})
  }

  render(){
    const {
              label,
              type,
              index,
              ind
            } = this.props

    return (
      <li  className    = {`list__item ${ this.state.visible ? 'list__item--click': ''}`}
            data-id     = {ind}
            draggable   = 'true'>
        <div className='input-wrapper'>
          <CloseBtn click = {this.handleCloseClick}/>
          <NumberCell label={ind+1}/>
          <Label  label   = {this.props.label}
                  click   = {this.handleLabelClick}
                  visible = {this.state.visible}/>

          <Input  label   = {label}
                  visible = {this.state.visible}
                  getRef  = {input => this.getInput = input}
                  keydown = {this.handleKeyDown}
                  blur    = {this.handleBlur}
                  type    = {type}
                  index   = {ind}/>
        </div>
      </li>

    )
  }
}

export default connect(
  state => ({
    getState: state
  }),
  dispatch => ({
    onChangeItem: (type, id, value) => {
      dispatch({type:type, id:id,value:value})
    },

    onDeleteItem: (type, id) => {
      dispatch({type:type, id:id})
    }

  })
)(SortableElement(Item))

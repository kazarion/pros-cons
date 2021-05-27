import React, {Component}       from 'react'
import {connect}                from 'react-redux'

import Title                    from '../../components/Title/Title'
import SubTitle                 from '../../components/SubTitle/SubTitle'
import InputAdd                 from '../../components/InputAdd/InputAdd'

import List                     from '../../containers/List/List'

import {SortableContainer}      from 'react-sortable-hoc'

const SortableList = SortableContainer(List)


class App extends Component {
  constructor(props){
    super(props)
    this.handleSubmit  = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.onSortEnd     = this.onSortEnd.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
  }

  handleKeyDown(event){
    if (event.keyCode === 13 && event.target.value.trim()){
      const inputAddTo = event.target.dataset['type']
      const inputValue = event.target.value
      this.props.onAddItem(`ADD_${inputAddTo.toUpperCase()}`,
                            inputValue.trim())
      const scrollPlace = event.target.closest('.col').querySelector('.scroll-cell')
      setTimeout(() => {
        scrollPlace.scrollTo(0, scrollPlace.scrollHeight)
      }, 1)
      event.target.value = ''
    }
  }

  onSortEnd(elements, event){
    const oldElement = elements.oldIndex
    const newElement = elements.newIndex
    const getType = event
                    .target
                    .closest('.scroll-cell')
                    .querySelectorAll('input')[0]
                    .dataset['type']
    this.props.onSortItems('SORT', getType, oldElement, newElement)
  }

  render(){

    const prosQuan = this.props.getState.pros.length
    const consQuan = this.props.getState.cons.length

    return (
      <main>
				<div className='layout'>
          <Title label='PROS &amp; CONS LIST APP WITH REACT'/>
          <form onSubmit={this.handleSubmit}>
  					<div className='row'>
  						<section className='col'>
                <SubTitle label='PROS' quan={prosQuan}/>

                <SortableList colName   = 'pros'
                              onSortEnd = {this.onSortEnd}
                              lockAxis  = 'y'/>

                <InputAdd  refInOut = {input => this.inputVal = input}
                           keydown  = {this.handleKeyDown}
                           addItem  = 'pros'
                           quan     = {prosQuan}/>

  						</section>
  						<section className='col'>
                <SubTitle label='CONS' quan={consQuan}/>

                <SortableList colName   = 'cons'
                              onSortEnd = {this.onSortEnd}
                              lockAxis  = 'y'/>

                <InputAdd  refInOut = {input => this.inputVal = input}
                           keydown  = {this.handleKeyDown}
                           addItem  = 'cons'
                           quan     = {consQuan}/>
  						</section>
  					</div>
          </form>

				</div>
			</main>
    )
  }
}


export default connect(
  state => ({
    getState: state
  }),
  dispatch => ({
    onAddItem: (type, payload) => {
      dispatch({type: type, payload: payload})
    },

    onSortItems:(type, column, oldElement, newElement) => {
      dispatch({
                  type: type,
                  column: column,
                  oldElement: oldElement,
                  newElement: newElement
                })
    }
  })
)(App)





/*--*/

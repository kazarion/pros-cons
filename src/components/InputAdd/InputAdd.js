import React      from 'react'
import NumberCell from '../../components/NumberCell/NumberCell.js'

const InputAdd = ({
                  getRef,
                  keydown,
                  addItem,
                  quan
                }) =>
    <div className='input-add-wrapper'>
      <NumberCell label={quan+1}/>
      <input  type         = 'text'
              spellCheck   = 'false'
              className    = 'input-add'
              ref          = {getRef}
              onKeyDown    = {keydown}
              data-type    = {addItem}/>
    </div>

export default InputAdd

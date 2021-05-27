import React from 'react'

const Input = ({
                  label,
                  visible,
                  getRef,
                  keydown,
                  blur,
                  type,
                  index
                }) =>

<input  type         = 'text'
        spellCheck   = 'false'
        className    = {`input ${ visible ? '' : 'dn' }`}
        ref          = {getRef}
        onKeyDown    = {keydown}
        onBlur       = {blur}
        data-type    = {type}
        data-value   = {label}
        data-index   = {index} />

export default Input

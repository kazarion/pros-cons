import React from 'react'


const Label = ({label, click, visible}) =>
<span className={`label ${visible ? 'dn' : '' }`}
      onClick={click}>
  <span className='label__txt'>
    {label}
  </span>
</span>

export default Label

import React from 'react'

const Hello = () => {
//without jsx
  // return (
  //   <div className='dummyClass'>
  //   <h1>Hello Isafi</h1>
  //   </div>
  // )

// with jsx

return React.createElement(
  'div',
  {id: 'hello', className: 'dummyClass'},
  React.createElement('h1', null, 'Hello Isafi')
  )
}

export default Hello

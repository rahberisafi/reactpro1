import React from 'react'

// function Greet(){
//     return <h1>Hello Isafi</h1>
// }

// export const Greet = () => <h1>Hello Isafi</h1>

// const Greet = props => {
//   console.log(props)
//   return (
//     <div>
//     <h1>
//     Hello {props.name} a.k.a {props.heroName}
//     </h1>
//     {props.children}
//     </div>
//   )
//
// }

// 1st way destructing

// const Greet = ({name, heroName}) => {
//   return (
//     <div>
//     <h1>
//     Hello {name} a.k.a {heroName}
//     </h1>
//     </div>
//   )
//
// }

// 2nd way

const Greet = props => {
  const {name, heroName} = props
  return (
    <div>
    <h1>
    Hello {name} a.k.a {heroName}
    </h1>
    </div>
  )
}
export default Greet

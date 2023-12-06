// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { incrementActionCreator, decrementActionCreator } from '../redux-toolkit-store/actionCreator/CounterActionCreator'

// export function Counter() {
//     const state = useSelector((state) => console.log(state))
//     const count = useSelector((state) => state.counter.count);
//     const dispatch = useDispatch()

//     return (
//         <div>
//             <div>
//                 <button
//                     onClick={() => dispatch(incrementActionCreator(10))}
//                 >
//                     Increment
//                 </button>
//                 <span>{count}</span>
//                 <button
//                     onClick={() => dispatch(decrementActionCreator(10))}
//                 >
//                     Decrement
//                 </button>
//             </div>
//         </div>
//     )
// }
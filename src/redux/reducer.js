// const initialState = {
//     username: '',
//     loginFirst: false
// }

// const SET_USERNAME = 'SET_USERNAME';
// const SET_LOGIN_FIRST =  'SET_LOGIN_FIRST';


// export function setLoginFirst() {
//     return {
//         type: SET_LOGIN_FIRST,
//         payload: true
//     }
// }
// export function setUsername(username) {
//     return {
//         type: SET_USERNAME,
//         payload: username
//     }
// }

// export default function reducer(state=initialState, action) {
//         switch(action.type) {
//             case SET_LOGIN_FIRST:
//             return {
//                 ...state,
//                 loginFirst:true
//             }
//             case SET_USERNAME:
//             console.log({
//                 ...state,
//                 username: action.payload
//             })
//             return {
//                 ...state, 
//                 username: action.payload
//             }
//         }
// }
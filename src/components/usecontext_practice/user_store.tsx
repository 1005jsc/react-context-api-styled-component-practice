// import React, { createContext, ReactElement, ReactNode } from "react"


// export const UserContext = createContext({})

// type UsersProps = {
//   props: React
// }


// const UserStore = ({props}:UsersProps) => {

//   const users = {
//     name: 'hwarari',
//     job: 'developer'
//   }


//   return <UserContext.Provider value={users}>
//     {props.children}
// </UserContext.Provider>

// }
// export default UserStore;






// import React, { createContext, ReactElement } from "react"


// export const UserContext = createContext({})




// const UserStore = ({...rest}) => {

//   const users = {
//     name: 'hwarari',
//     job: 'developer'
//   }


//   return <UserContext.Provider value={users}>
//     {{...rest}}
// </UserContext.Provider>

// }
// export default UserStore;










import { createContext} from "react"
import { users } from '../../data/data_store'




// 1. createContext를 선언해준다 
// const UserContext라고 선언 했으니까 이제 <UserContext.Provider value={}> 까지는 됨 

// createContext의 초기값 괄호안에는 오브젝트로 정성스레 만든 초기값을 
// 정직하게 넣어준다 


export const UserContext = createContext(users)

type UsersProps = {
  children: JSX.Element 
}





const UserStore = ({children}:UsersProps) => {


// 2. <UserContext.Provider>를 return 에 적는다
// value에 넣은 값은 하위컴포넌트에서 useContext로 받아 볼 수 있다 

  return <UserContext.Provider value={users}>
    {children}
</UserContext.Provider>

}
export default UserStore;

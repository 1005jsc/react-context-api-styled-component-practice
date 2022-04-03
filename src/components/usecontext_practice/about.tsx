import React, { useContext } from "react"
import { UserContext } from './user_store';

const About = () => {

// 3. UserStore 의 createContext로 만들어진 UserContext를 불러오는 거다
// 그럼 user_store.tsx에 정의된 createContext를 하위 컴포넌트인 여기서 쓸 수가 있음 
const context = useContext(UserContext)
console.log(context)

  return <>

    <div >
      <h3>{context.name}</h3>
      <h3></h3>
    </div>
</>

}
export default About;
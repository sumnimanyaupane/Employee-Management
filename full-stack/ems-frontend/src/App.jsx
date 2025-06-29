import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import StudentComponent from './components/StudentComponent'
import ListTeacherComponent from './components/ListTeacherComponent'
import TeacherComponent from './components/TeacherComponent'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
<Route path='/' element={ <ListStudentComponent />} ></Route>
<Route path='/students' element={ <ListStudentComponent />} ></Route>

<Route path='/add-student' element={ <StudentComponent />} ></Route>

<Route path='/edit-student/:id' element={ <StudentComponent />} ></Route>

{/* http://localhost:3000/teachers */}
<Route path='/teachers' element={ <ListTeacherComponent />} ></Route>

{/* http://localhost:3000/add-teachers */}
<Route path='/add-teacher' element={ <TeacherComponent />} ></Route>


<Route path='/edit-teacher/:id' element={ <TeacherComponent />} ></Route>


    </Routes>
    

     <FooterComponent />
     </BrowserRouter>
         </>
  )
}

export default App

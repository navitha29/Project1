import React from 'react'
import SignUp from './SignUp'
import SignInSide from './SignInSide'
import Dashboard from './Dashboard'

const fun1 = () => {
    if(window.location.pathname === "/Dashboard.js") {
        return <Dashboard/>
    }
}
 const fun2 = () => {
    if(window.location.pathname === "/SignInSide.js") {
        return <SignInSide/>
    }
 }
 const fun3 = () => {
    if(window.location.pathname === "/") {
        return <SignUp/>
    }
 }
 const App = () => {
    return (
        <div className="ui container">
        {fun1()}
        {fun2()}
        {fun3()}
        </div>
    )
 }
 export default App;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Footer/Footer';
 import NavHeader from '../../Nav/Nav';
import MessftBoss from '../../MessageFromTheDirector/MessftBoss';




class RouterMessftBoss extends React.Component{
    render(){
        return(
            <div>
                 <NavHeader />
                <MessftBoss />
                <Footer/>
            </div>
        )
    }
}
export default RouterMessftBoss;
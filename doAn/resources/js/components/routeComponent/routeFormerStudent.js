import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import NavHeader from '../Nav/Nav';
import FormerStudent from '../former-student+extracurilar/former-student/former-student';

class RouteFormerStudent extends React.Component{
    render(){
        return(
            <div>
                <NavHeader />
                <FormerStudent />
                <Footer />
            </div>
        )
    }
}
export default RouteFormerStudent;
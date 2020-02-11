import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound/NotFound";

// User is LoggedIn
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./views/user/Dashboard/Dashboard"; 
import SignUp from "./components/SignUp/SignUp"; 
import RouterMessftBoss from "./components/routeComponent/router-MessftBoss/router-MessftBoss"; 
import RouteFormerStudent from "./components/routeComponent/routeFormerStudent"; 







const Main = () => (

    <Switch>
        {/*User might LogIn*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/DangKy" component={SignUp} />
        {/* thông điệp từ giám đốc trung tâm REACHK */}
        <Route path="/thong-diep-tu-giam-doc-trung-tam-REACH" component={RouterMessftBoss} />
        {/* câu lạc bộ cựu học viên */}
        <Route path="/cau-lac-bo-cuu-hoc-vien" component={RouteFormerStudent} />
        {/* tuyển sinh */}
        <Route path="/tuyen-sinh" component={Home} />
        {/* hoạt động đào tạo */}
        <Route path="/hoat-dong-dao-tao" component={Home} />
        {/* tin tức sự kiện */}
        <Route path="/tin-tuc-su-kien" component={Home} />

        {/*User will LogIn*/}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* User is LoggedIn*/}
        <Route path="/dashboard" component={Dashboard} />
        

        {/*Page Not Found*/}
        <Route component={NotFound} />
    </Switch>

);
export default Main;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from '../../../../public/css/Main/Main.css';
import { NavLink } from "react-router-dom";
import Wow from 'wowjs';
// import { } from './style.css';
// import { } from './dist/wow';

class Main extends React.Component {
    componentDidMount(){
        new Wow.WOW().init();
    }
    render() {
        return (
            <div className="mr-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 arrow">
                            <h2 className="title-main "><span>✦</span>REACH đã hỗ trợ đào tạo hơn + 16.000 học viên. học nghề có việc làm cho các bạn học viên có hoàn cảnh khó khăn </h2>
                        </div>
                    </div>
                    {/* <div className="row main">
                        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 picture">
                            <a href="#" className="wraper-image-main">
                                <img className="image-item-2-4" src={require("../../../../public/images/image-main/alumni.jpg")}></img>
                                <p className="title-image">1.Câu Hỏi Thường Gặp</p>
                            </a>
                        </div> */}
                        <div className="wow flipInY"data-wow-iteration="1" data-wow-delay=".2s" data-wow-duration="2s">
                        <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6picture">
                        <NavLink to="/thong-diep-tu-giam-doc-trung-tam-REACH" className="wraper-image-main">
                            <div className="wraper-item">
                                <img className="image-main image-1 wow fadeInDown " data-wow-iteration="1" data-wow-delay=".5s" src={require("../../../../public/images/image-main/CEO_REACH.png")} alt="REACH"></img>
                                <p className="title-image">1.thông điệp từ giám đốc trung tâm reach</p>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 picture">
                        <a href="#" className="wraper-image-main">
                        <div className="wraper-item">
                            <img className="image-main wow fadeInDown "data-wow-iteration="1" data-wow-delay=".75s" src={require("../../../../public/images/image-main/kiyeu.jpg")} alt="REACH"></img>
                                <p className="title-image">2.Câu Chuyện Học Viên</p>
                                </div></a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 picture">
                        <a href="#" className="wraper-image-main">
                        <div className="wraper-item"> 
                            <img className="image-main wow fadeInDown "data-wow-iteration="1" data-wow-delay=".9s" src={require("../../../../public/images/image-main/marketing.jpg")} alt="REACH"></img>
                                <p className="title-image">3.Phản Hồi Của Học Viên</p>
                                </div> </a>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 picture">
                        <a href="#" className="wraper-image-main">
                        <div className="wraper-item image-4">
                            <img  className="image-main wow fadeInDown "data-wow-iteration="1" data-wow-delay="1.2s" src={require("../../../../public/images/image-main/Reach.jpg")} alt="REACH"></img>
                                <p className="title-image">4.Câu chuyện Của Cựu Học Viên</p>
                                </div></a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 picture">
                        <a href="#" className="wraper-image-main">
                        <div className="wraper-item image-5">
                            <img  className="image-main wow fadeInDown "data-wow-iteration="1" data-wow-delay="1.5s" src={require("../../../../public/images/image-main/time.jpg" )} alt="REACH"></img>
                                <p className="title-image">5. Kỷ Niệm Chỉa Sẻ</p>
                                </div></a>
                        </div>
                    </div>
                    </div>
                    </div>

                </div>
                        
        )
    }
}
export default Main
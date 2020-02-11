import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from './extracurricular.css';

class Extracurricular extends React.Component{
    render(){
        return(
            <div>
                 <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                                <div className="slidebar-extracurricular">
                                    {/* Đây là phần 1 */}
                                    <a type="button" className="button-slidebar-extracurricular-1" href="#"><p className="text-button-slidebar-extracurricular">Cựu Học Viên</p></a>
                                    {/* Đây là phần 2 */}
                                    <a type="button" className="button-slidebar-extracurricular-2" href="#"><p className="text-button-slidebar-extracurricular">Hoạt Động Ngoại Khóa</p></a>
                                    {/* Đây là phần 3 */}
                                    <a type="button" className="button-slidebar-extracurricular-3" href="#"><p className="text-button-slidebar-extracurricular">Lớp Học Võ Thuật</p></a>
                                </div>
                                <div className="advertisement-slidebar-extracurricular-main-1">
                                    <div className="advertisement-slidebar-extracurricular-body-1">
                                        <h3 className="h3-advertisement-slidebar-extracurricular-1">
                                            Nộp hồ sơ xét tuyển trực tiếp
                                        </h3>
                                        <p className="p-advertisement-slidebar-extracurricular">
                                            Vui lòng đăng ký thông tin <br/>Tư vấn sẽ gọi điện cho bạn<br/>
                                            sau 24h , xin cảm ơn!<br/>
                                        </p>
                                    </div>
                                    <a className="a-advertisement-slidebar-extracurricular-1" href="#">
                                        Nộp hồ sơ ► 
                                    </a>
                                </div> 
                                <div className="advertisement-slidebar-extracurricular-main-2">
                                    <div className="advertisement-slidebar-extracurricular-body-2">
                                        <h3 className="h3-advertisement-slidebar-extracurricular-2">
                                            Tìm văn phòng tuyển sinh<br/><br/>
                                        </h3>
                                    </div>
                                    <a className="a-advertisement-slidebar-extracurricular-2" href="#">
                                           follow me ► 
                                        </a>
                                </div>
                            </div>
                        <div className="col-md-9">
                            <div className="box-text-extracurricular">
                                <div className="title-extracurricular">
                                    <h1 className="h1-title-extracurricular-1">
                                        <span className="span-title-extracurricular">◆</span> Những giờ ngoại khóa vô cùng bổ ích
                                    </h1>
                                    <h1 className="h1-title-extracurricular-2">và ý nghĩa tại các trung tâm REACH</h1>
                                </div>
                                <div className="text-extracurricular-1">
                                   <p className="text-title-extracurricular-1">
                                   Hoạt động ngoại khóa là hoạt động thường xuyên diễn ra một lần trong mỗi khóa tại trung tâm REACH.<br/><br/>

                                    Bên cạnh những giờ đào tạo chuyên môn chuyên ngành về pha chế, nấu ăn, 
                                    làm tóc, bán hàng, buồng phòng, thiết kế đồ họa 2D, đồ họa 3D, lập trình, 
                                    nghiệp vụ khách sạn 5 sao, spa và vẽ móng, cho những học viên tại REACH, các 
                                    trung tâm REACH ở Hà Nội, Hội An, Hải Dương, Đà Nẵng, Huế còn tổ chức những giờ 
                                    ngoại khóa bổ ích cho các em.<br/><br/>

                                    Những giờ ngoại khóa này sẽ giúp học viên thư giãn sau những giờ học căng thẳng. 
                                    Chương trình còn có nhiều game để gắn kết học viên trong lớp, giữa các lớp khác 
                                    nhau và toàn trung tâm cũng như gắn kết học viên và giáo viên tại REACH. Các em 
                                    cũng được rèn luyện tinh thần làm việc nhóm, cùng nhiều hoạt động bổ ích tăng sự tự tin, 
                                    khả năng giao tiếp.<br/><br/>
                                    <h4 className="h4-title-extracurricular">Chương trình ngoại khóa tại REACH Hải Dương</h4>
                                    Trung tâm REACH Hải Dương đã tổ chức giao lưu bóng đá 
                                    giữa cựu học viên REACH Hà Nội và REACH Hải Dương trong 
                                    ngày ngoại khóa. Đặc biệt, Trung tâm đã tổ chức đóng góp 
                                    từ chính cựu học viên để tổ chức và tham gia chương trình 
                                    "Vui tết trung thu" cùng các bé khiếm thị ở Hội người mù tình 
                                    Hải Dương.<br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/hd1.JPG")}></img>
                                    <p className="title-img-extracurricular">Giao lưu bóng đá giữa cựu học viên Hà Nội và Hải Dương</p><br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/hd2.jfif")}></img>
                                    <p className="title-img-extracurricular">Hình ảnh chương trình trung thu cho các cháu bé khiếm thị ở Hải Dương </p><br/><br/>


                                    <h4 className="h4-title-extracurricular">Chương trình ngoại khóa ở REACH Hội An</h4>
                                    Tại REACH Hội An, các học viên đã có những giờ ngoại khóa bổ ích ở Khu du lịch sinh 
                                    thái xứ dừa với nhiều trò chơi bổ ích như Nhảy chicken dance, Nhảy chicken dance, Hoá trang Halloween, 
                                    Biểu diễn thời trang, Rồng rắn lên mây, ...<br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/Ha1.jpg")}></img>
                                    <p className="title-img-extracurricular">Hình ảnh ngoại khóa của REACH Hội An</p><br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/Ha2.jpg")}></img>
                                    <p className="title-img-extracurricular">Học viên hào hứng tham gia các trò chơi tại chương trình ngoại khóa</p><br/><br/>


                                    <h4 className="h4-title-extracurricular">Chương trình ngoại khóa ở REACH Huế</h4>
                                    Tại Huế, các học viên đã có một ngày ngoại khóa đầy năng lượng ở chính sân trường của REACH Huế. 
                                    Rất nhiều trò chơi và tiết mục giao lưu văn nghệ đã được chuẩn bị kỹ càng.<br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/hue1.JPG")}></img>
                                    <p className="title-img-extracurricular">Học sinh tập trung sẵn sàng cho chương trình ngoại khóa</p><br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/hue2.JPG")}></img>
                                    <p className="title-img-extracurricular">Các đội nhóm chia team và cùng tham gia trò chơi</p><br/><br/>


                                    <h4 className="h4-title-extracurricular">Chương trình ngoại khóa ở REACH Hà Nội</h4>
                                    Trung tâm đã có cả ngày ngoại khóa tại Sân bóng Hải Đăng gần trung tâm REACH. 
                                    Đây là khóa đông nhất từ trước đến nay tại REACH Hà Nội cùng rất nhiều trò chơi 
                                    và hoạt động như: giao lưu và tìm hiểu về người khiếm thị (dự án STEP UP), tìm hiểu 
                                    về lịch sử ngày hội Cây gậy trắng, trải nghiệm trở thành người khiếm thị, trò chơi tìm 
                                    kho báu, nhảy bao bố, giải bóng đá, cùng nhiều hoạt động hấp dẫn khác.<br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/hn1.jpg")}></img>
                                    <p className="title-img-extracurricular">Trải nghiệm trở thành người khiếm thị</p><br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/hn2.png")}></img>
                                    <p className="title-img-extracurricular">Học viên tham gia nhiệt tình các trò chơi</p><br/><br/>


                                    <h4 className="h4-title-extracurricular">Chương trình ngoại khóa ở REACH Đà Nẵng</h4>
                                    REACH Đà Nẵng cũng có nhiều hoạt động ngoại khóa bổ ích cho các học viên tại trung tâm.
                                    Một số hình ảnh tại ngày ngoại khóa.<br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/dn1.jpg")}></img>
                                    <p className="title-img-extracurricular">Chơi trò chơi và nhận quà</p><br/><br/>
                                    <img className="img-extracurricular" src={require("../images/image-extracurricular/dn2.jpg")}></img>
                                    <p className="title-img-extracurricular">Thảo luận và giải đáp bài toán</p><br/><br/>
                                   </p>
                                </div>
                                <div className="icon-extracurricular">                        
                                    <ul className="nav">
                                        <li className="nav-item li-text-main-extracurricular-1"><a className="nav-link disabled link-text-main-extracurricular-1" href="#" ><i class="fa fa-slideshare"></i></a></li>
                                        <li className="nav-item li-text-extracurricular-main"><a className="nav-link link-text-extracurricular-main"  href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li className="nav-item li-text-extracurricular-main"><a className="nav-link link-text-extracurricular-main"  href="#"><i class="fa fa-youtube-play"></i></a></li>
                                        <li className="nav-item li-text-extracurricular-main"><a className="nav-link link-text-extracurricular-main"  href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li className="nav-item li-text-extracurricular-main"><a className="nav-link link-text-extracurricular-main"  href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li className="nav-item li-text-extracurricular-main"><a className="nav-link link-text-extracurricular-main"  href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Extracurricular
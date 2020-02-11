import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from '../../../../public/css/MessageFromTheDirector/MessftBoss.css';

class MessftBoss extends React.Component{
    render(){
        return(
            <div>
                 <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                                <div className="slidebar-MessftBoss">
                                    {/* Đây là phần 1 */}
                                    <a type="button" className="button-slidebar-MessftBoss-1" href="#"><p className="text-button-slidebar-MessftBoss">Sứ mệnh, tầm nhìn, giá trị</p></a>
                                    {/* Đây là phần 2 */}
                                    <a type="button" className="button-slidebar-MessftBoss-2" href="#"><p className="text-button-slidebar-MessftBoss">Lịch sử</p></a>
                                    {/* Đây là phần 3 */}
                                    <a type="button" className="button-slidebar-MessftBoss-3"  href="#"><p className="text-button-slidebar-MessftBoss">Nhân sự</p></a>
                                    {/* Đây là phần 4 */}
                                    <a type="button" className="button-slidebar-MessftBoss-4"  href="#"><p className="text-button-slidebar-MessftBoss">Thông điệp từ Giám Đốc</p></a>
                                </div>
                                <div className="advertisement-slidebar-MessftBoss-main-1">
                                    <div className="advertisement-slidebar-MessftBoss-body-1">
                                        <h3 className="h3-advertisement-slidebar-MessftBoss-1">
                                            Nộp hồ sơ xét tuyển trực tiếp
                                        </h3>
                                        <p className="p-advertisement-slidebar-MessftBoss">
                                            Vui lòng đăng ký thông tin <br/>Tư vấn sẽ gọi điện cho bạn<br/>
                                            sau 24h , xin cảm ơn!<br/>
                                        </p>
                                    </div>
                                    <a className="a-advertisement-slidebar-MessftBoss-1" href="#">
                                        Nộp hồ sơ ► 
                                    </a>
                                </div> 
                                <div className="advertisement-slidebar-MessftBoss-main-2">
                                    <div className="advertisement-slidebar-MessftBoss-body-2">
                                        <h3 className="h3-advertisement-slidebar-MessftBoss-2">
                                            Tìm văn phòng tuyển sinh<br/><br/>
                                        </h3>
                                    </div>
                                    <a className="a-advertisement-slidebar-MessftBoss-2" href="#">
                                           follow me ► 
                                        </a>
                                </div>
                            </div>
                        <div className="col-md-9">
                            <div className="box-text-MessftBoss">
                                <div className="title-MessftBoss">
                                    <h1 className="h1-title-MessftBoss-1">
                                        <span className="span-title-MessftBoss">◆</span> Khởi động chuỗi hoạt động và sự kiện
                                    </h1>
                                    <h1 className="h1-title-MessftBoss-2">
                                        Kỷ niệm 10 năm thành lập REACH
                                    </h1>
                                </div>
                                <div className="title-img-MessftBoss">
                                    <h5 className="h5-title-img-MessftBoss">Thông điệp từ Giám đốc Trung tâm REACH</h5>
                                </div>
                                <div className="img-MessftBoss-1">
                                    <img src={require("../../../../public/images/image-main/CEO_REACH.png")} className="img-inside-MessftBoss-1"/>
                                </div>
                                <div className="text-MessftBoss-1">
                                    <p className="p-text-MessftBoss-1">
                                        Là người sáng lập và điều hành tổ chức REACH, tôi rất vinh dự và tự hào được 
                                        gửi thông điệp này tới tất cả nhân viên, học viên, bạn bè, đối tác và các nhà 
                                        tài trợ của REACH, những người đã đồng hành cùng chúng tôi trong suốt thập kỷ 
                                        vừa qua.
                                    </p>
                                    <p className="p-text-MessftBoss-1">
                                    2018 là một năm đặc biệt của REACH, là dấu mốc ghi nhận hành trình 10 năm đầy 
                                    gian truân nhưng vô cùng tự hào.
                                    </p>
                                    <p className="p-text-MessftBoss-1">
                                    Chủ đề năm thứ 10 của REACH được lựa chọn là “YES, YOU CAN!” (Bạn có thể) để 
                                    tiếp tục khẳng định niềm tin trong việc thực hiện sứ mệnh phát triển thanh niên 
                                    Việt Nam của chúng tôi. Thông điệp này cũng nhằm truyền cảm hứng cho cộng đồng, 
                                    tăng thêm động lực cho các cá nhân và tổ chức cùng với REACH mang lại cơ hội và 
                                    sự hỗ trợ cần thiết để thanh niên phát huy hết tiềm năng và có tương lai tươi sáng hơn.
                                    </p>
                                    <p className="p-text-MessftBoss-1">
                                    rong suốt chặng đường 10 năm, mỗi cá nhân tại REACH đã không ngừng quyết tâm và 
                                    bền bỉ theo đuổi sứ mệnh hỗ trợ các thanh niên có hoàn cảnh khó khăn trên khắp 
                                    Việt Nam. Cùng với sự đồng hành và phối hợp chặt chẽ của bạn bè và các đối tác, 
                                    chúng tôi đã “biến những điều không thể trở thành có thể”
                                    </p>
                                    <p className="p-text-MessftBoss-1">
                                    Xuyên suốt năm 2018 này, chúng tôi vui mừng được chia sẻ về sự phát triển, 
                                    những thành tựu REACH đã đạt được trong suốt 10 năm qua và kế hoạch của 10 năm tới.
                                    </p>
                                    <p className="p-text-MessftBoss-1">
                                    Nhân dịp kỷ niệm 10 năm thành lập, REACH sẽ có các hoạt động và sự kiện đặc 
                                    biệt nhằm kết nối cộng đồng, kết nối cựu học viên, ra mắt các dự án mới, nâng 
                                    cao hình ảnh của REACH, đồng thời ghi nhận nỗ lực của nhân viên và học viên REACH, 
                                    tri ân bạn bè và đối tác đã đồng hành cùng chúng tôi.
                                    </p>
                                    <p className="p-text-MessftBoss-1">
                                    Hãy cùng chúng tôi chào đón những điều đặc biệt trong năm thứ 10 đầy hào hứng và 
                                    quyết tâm của REACH!
                                    </p>
                                </div>
                                <div className="img-MessftBoss-2">
                                    < img src={require("../../../../public/images/image-main/REACH10year.png")} className="img-inside-MessftBoss-2"/>
                                </div>
                                <div className="text-MessftBoss-2">
                                    <p className="p-text-MessftBoss-2">
                                        Giám đốc Trung tâm<br/><br/>Phạm Thị Thanh Tâm
                                    </p>
                                </div>
                                <div className="icon-MessftBoss">                        
                                    <ul className="nav">
                                        <li className="nav-item li-text-main-MessftBoss-1"><a className="nav-link disabled link-text-main-MessftBoss-1" href="#" ><i class="fa fa-slideshare"></i></a></li>
                                        <li className="nav-item li-text-MessftBoss-main"><a className="nav-link link-text-MessftBoss-main"  href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li className="nav-item li-text-MessftBoss-main"><a className="nav-link link-text-MessftBoss-main"  href="#"><i class="fa fa-youtube-play"></i></a></li>
                                        <li className="nav-item li-text-MessftBoss-main"><a className="nav-link link-text-MessftBoss-main"  href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li className="nav-item li-text-MessftBoss-main"><a className="nav-link link-text-MessftBoss-main"  href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li className="nav-item li-text-MessftBoss-main"><a className="nav-link link-text-MessftBoss-main"  href="#"><i class="fa fa-pinterest-p"></i></a></li>
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
export default MessftBoss
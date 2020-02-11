import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from '../../../../../public/css/former-student/former-student.css';

class FormerStudent extends React.Component{
    render(){
        return(
            <div>
                 <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                                <div className="slidebar-former-student">
                                    {/* Đây là phần 1 */}
                                    <a type="button" className="button-slidebar-former-student-1" href="#"><p className="text-button-slidebar-former-student">Cựu Học Viên</p></a>
                                    {/* Đây là phần 2 */}
                                    <a type="button" className="button-slidebar-former-student-2" href="#"><p className="text-button-slidebar-former-student">Hoạt Động Ngoại Khóa</p></a>
                                    {/* Đây là phần 3 */}
                                    <a type="button" className="button-slidebar-former-student-3" href="#"><p className="text-button-slidebar-former-student">Lớp Học Võ Thuật</p></a>
                                </div>
                                <div className="advertisement-slidebar-former-student-main-1">
                                    <div className="advertisement-slidebar-former-student-body-1">
                                        <h3 className="h3-advertisement-slidebar-former-student-1">
                                            Nộp hồ sơ xét tuyển trực tiếp
                                        </h3>
                                        <p className="p-advertisement-slidebar-former-student">
                                            Vui lòng đăng ký thông tin <br/>Tư vấn sẽ gọi điện cho bạn<br/>
                                            sau 24h , xin cảm ơn!<br/>
                                        </p>
                                    </div>
                                    <a className="a-advertisement-slidebar-former-student-1" href="#">
                                        Nộp hồ sơ ► 
                                    </a>
                                </div> 
                                <div className="advertisement-slidebar-former-student-main-2">
                                    <div className="advertisement-slidebar-former-student-body-2">
                                        <h3 className="h3-advertisement-slidebar-former-student-2">
                                            Tìm văn phòng tuyển sinh<br/><br/>
                                        </h3>
                                    </div>
                                    <a className="a-advertisement-slidebar-former-student-2" href="#">
                                           follow me ► 
                                        </a>
                                </div>
                            </div>
                        <div className="col-md-9">
                            <div className="box-text-former-student">
                                <div className="title-former-student">
                                    <h1 className="h1-title-former-student-1">
                                        <span className="span-title-former-student">◆</span> Cựu Học Viên
                                    </h1>
                                </div>
                                <div className="text-former-student-1">
                                   <p className="text-title-former-student-1">
                                   Ngay trước dịp Tết Canh Tý, các cựu sinh viên REACH đã cùng ra quân làm sạch đường phố và chuẩn bị thực phẩm cho những gia đình khó khăn ở Hải Dương. Hoạt động này nhằm hương tới tinh thần và hình ảnh như một tổ chức “vì cộng đồng” ở REACH.<br/><br/>

                                    Sự kiện được điều phối bởi Trung tâm REACH Hải Dương, đã tạo cầu nối giữa các cựu học viên tại hai địa bàn Hà Nội và Hải Dương.<br/><br/>

                                    Nguyễn Thị Là, một cựu học viên đã tốt nghiệp từ REACH vào tháng 7 năm 2019, cho biết.: “Đây là một cách tuyệt vời để khép lại năm 2019 đối với mình. Sự kiện đã cho mình cơ hội gặp lại những bạn học cũ.”.<br/><br/>

                                    Tham gia sự kiện có 55 cựu học viên REACH Hải Dương, và 20 sinh viên và cựu sinh viên của REACH Hà Nội.<br/><br/>
                                    <img className="img-former-student" src={require("../../../../../public/images/image-former-student/anh1.jpg")}></img>
                                    <p className="title-img-former-student">Hình ảnh cựu học viên Hà Nội và Hải Dương</p><br/><br/>
                                    Đoàn Thanh Niên Hải Dương, đối tác lâu năm của REACH tuyển sinh, cũng đóng một vai trò quan trọng trong chương trình này. Họ đã giúp tổ chức sự kiện và 
                                    tham gia cùng với cựu sinh viên REACH dọn dẹp làm sạch nghĩa trang liệt sỹ và những tuyến phố gần đó.<br/><br/>
                                    <img className="img-former-student" src={require("../../../../../public/images/image-former-student/anh2.jpg")}></img>
                                    <p className="title-img-former-student">300 chiếc bánh chưng xanh đã được gói</p><br/>
                                    <img className="img-former-student" src={require("../../../../../public/images/image-former-student/anh3.jpg")}></img>
                                    <p className="title-img-former-student">Cựu học viên REACH cùng tham gia gói bánh</p><br/>
                                    Một đối tác tuyển sinh khác của REACH Câu lạc bộ từ thiện Thiên Nhân Tâm,  
                                    đã cùng với các học viên và cựu sinh viên gói bánh Chung. Những chiếc bánh 
                                    này sau đó được trao đến tận tay những người có hoàn cảnh khó khăn ở địa 
                                    phương với hy vọng mang đến cho họ một cái Tết ấm áp yêu thương.<br/><br/>

                                    “Quả thực là rất mệt, mệt nhưng mình cảm thấy vui vì đã giúp đỡ được 
                                    cộng đồng và nhiều người xung quanh”, Nguyễn Đức Long, một học viên 
                                    lớp web-coding chia sẻ.<br/><br/>

                                    Các cựu sinh viên không chỉ thực hiện các hoạt động thiện nguyện, 
                                    mà sau đó họ còn có một thời gian tuyệt vời ở bên nhau. Đã có rất nhiều 
                                    tiếng cười, những câu chuyện nhỏ về công việc và cuộc sống sau khi tốt 
                                    nghiệp ở REACH được các thành viên chia sẻ trong một hoạt động kết nối 
                                    thành viên do nhân viên của REACH điều hành.<br/><br/>
                                    <img className="img-former-student" src={require("../../../../../public/images/image-former-student/anh4.jpg")}></img>
                                    <p className="title-img-former-student">Giao lưu giữa cựu học viên REACH Hà Nội và Hải Dương</p><br/>
                                    <img className="img-former-student" src={require("../../../../../public/images/image-former-student/anh5.jpg")}></img>
                                    <p className="title-img-former-student">Hình phạt nhỏ trong ngày hôm đó</p><br/><br/>
                                    
                                    Nhìn chung sự kiện đã mang đến cho các cựu học viên tham dự một ngày vô cùng ý nghĩa.<br/><br/>

                                    Quản lý trung tâm Hải Dương, Anh Phạm Văn Biên, tự hào nhìn lại kết quả của một ngày hoạt động.<br/><br/>

                                    “Trong cái lạnh buốt giá của Tết Nguyên đán, tôi cảm thấy vui vẻ khi thấy mạng lưới cựu học viên của REACH
                                     ngày càng lớn mạnh. Điều này không chỉ phù hợp với mục tiêu phát triển của chúng tôi, mà còn đóng vai trò là 
                                     nền tảng vững chắc cho việc tuyển dụng trong những năm tới. Cựu sinh viên của chúng tôi chắc chắn là bằng 
                                     chứng thực tế cho thấy REACH có thể và đang thay đổi nhiều cuộc đời, nhiều số phận”.”<br/><br/>

                                    Tại REACH, chúng tôi tự hào không chỉ về chất lượng các khóa đào tạo nghề mà chúng tôi mang lại cho các học viên hiện tại, mà còn về cam kết đồng hành cùng các cựu học viên của chúng tôi nhằm tạo ra một thế hệ tương lai Việt Nam tốt đẹp hơn.
                                    Chúng tôi tin chắc rằng sự phát triển cá nhân không chỉ là kiến thức hay kỹ năng, mà còn là những kết nối, là tình bạn lâu dài, tạo ra một mạng lưới hỗ trợ vững chắc dành cho họ.<br/>
                                   </p>
                                </div>
                                <div className="icon-former-student">                        
                                    <ul className="nav">
                                        <li className="nav-item li-text-main-former-student-1"><a className="nav-link disabled link-text-main-former-student-1" href="#" ><i class="fa fa-slideshare"></i></a></li>
                                        <li className="nav-item li-text-former-student-main"><a className="nav-link link-text-former-student-main"  href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li className="nav-item li-text-former-student-main"><a className="nav-link link-text-former-student-main"  href="#"><i class="fa fa-youtube-play"></i></a></li>
                                        <li className="nav-item li-text-former-student-main"><a className="nav-link link-text-former-student-main"  href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li className="nav-item li-text-former-student-main"><a className="nav-link link-text-former-student-main"  href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li className="nav-item li-text-former-student-main"><a className="nav-link link-text-former-student-main"  href="#"><i class="fa fa-pinterest-p"></i></a></li>
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
export default FormerStudent
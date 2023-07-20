import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
    <div className="birthdayContainer">
    <img className="birthdayImg" src="assets/gift.png" alt=""/>
      <span className="birthdayText">
      <b>William smith</b> and <b>4 other friends</b>have a birthday today
      </span>
    </div>
    <img className="rightbarAd" src="assets/ad1.jpg" alt=""/>
     <h4 className="rightbarTitle">Online</h4> 
     <ul className="rightbarFriendList">
     <li className="rightbarFriend">
     <div className="rightbarProfileImgContainer">
     <img className="rightbarProfileImg" src="assets/people/3.jpeg" alt=""/>
     <span className="rightbarOnline"></span>
     </div>
     <span className="rightbarUsername">Jenni Roy</span>
     </li>

     <li className="rightbarFriend">
     <div className="rightbarProfileImgContainer">
     <img className="rightbarProfileImg" src="assets/people/3.jpeg" alt=""/>
     <span className="rightbarOnline"></span>
     </div>
     <span className="rightbarUsername">Jenni Roy</span>
     </li>

     <li className="rightbarFriend">
     <div className="rightbarProfileImgContainer">
     <img className="rightbarProfileImg" src="assets/people/3.jpeg" alt=""/>
     <span className="rightbarOnline"></span>
     </div>
     <span className="rightbarUsername">Jenni Roy</span>
     </li>

     <li className="rightbarFriend">
     <div className="rightbarProfileImgContainer">
     <img className="rightbarProfileImg" src="assets/people/3.jpeg" alt=""/>
     <span className="rightbarOnline"></span>
     </div>
     <span className="rightbarUsername">Jenni Roy</span>
     </li>

     <li className="rightbarFriend">
     <div className="rightbarProfileImgContainer">
     <img className="rightbarProfileImg" src="assets/people/3.jpeg" alt=""/>
     <span className="rightbarOnline"></span>
     </div>
     <span className="rightbarUsername">Jenni Roy</span>
     </li>

     <li className="rightbarFriend">
     <div className="rightbarProfileImgContainer">
     <img className="rightbarProfileImg" src="assets/people/3.jpeg" alt=""/>
     <span className="rightbarOnline"></span>
     </div>
     <span className="rightbarUsername">Jenni Roy</span>
     </li>
     
     </ul>
    </div>
      </div>
  );
}

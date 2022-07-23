import React, { useState } from "react";
import { TbLogout } from "react-icons/tb";

import "./style.scss";

import avata from "../../assets/image/avata-user.png";
import { actLogout } from "../../redux/actions/auth/authAction";
import { useDispatch } from "react-redux";

const Accout = ({ profile }) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const handleProfile = () => {
    setIsShow(!isShow);
  };

  const handleLogout = () => {
    dispatch(actLogout());
  };
  const handleToProfile = () => {
    console.log("to profile");
  };

  return (
    <div className="author-avata_header rounded-full cursor-pointer relative">
      <div className="w-[40px] h-[40px]">
        <img
          className="w-full h-full  rounded-full  hover:opacity-80"
          src={avata}
          alt="avata"
          onClick={handleProfile}
        />
      </div>
      <div
        className={`${
          isShow ? "opacity-100 visible" : "opacity-0 invisible"
        } absolute right-0 author author-main_header transition trani`}
      >
        <div
          className="flex items-center author-sub rounded gap-3"
          onClick={handleToProfile}
        >
          <div className="w-[30px] h-[30px]">
            <img
              className="w-full h-full  rounded-full"
              src={avata}
              alt="avata"
              onClick={handleProfile}
            />
          </div>
          <h2>{profile.fullName}</h2>
        </div>
        <div
          className="author-sub author_logout p-3 flex items-center gap-3"
          onClick={handleLogout}
        >
          <TbLogout style={{ fontSize: "2.5rem", width: "30px" }}></TbLogout>
          <h2>Log out</h2>
        </div>
      </div>
    </div>
  );
};

export default Accout;

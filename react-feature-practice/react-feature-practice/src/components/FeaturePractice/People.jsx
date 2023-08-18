import React from "react";
import defaultImgPath from "../../assets/default-avatar.svg";

const People = (props) => {
  const {value: {name='User', nickName='User Nickname', images}} = props;
  const imgPath = images?.[0]?.small?.url || defaultImgPath

  return (
    <div className=" flex flex-col items-center">
      <img className=" w-12" src={imgPath} alt={'No Image'} />
      <h4 className=" font-bold text-2xl">{name}</h4>
      <h4>Nickname: {nickName}</h4>
    </div>
  );
};

export default People;

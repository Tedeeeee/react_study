import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    // 새로운 배열을 반환한다
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return (
          Number(a.createdDate) - Number(b.createdDate)
        );
      } else {
        return (
          Number(b.createdDate) - Number(a.createdDate)
        );
      }
    });
  };

  const sortedData = getSortedData();

  const nav = useNavigate();
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => {
            nav(`/new`);
          }}
          text={"새 일기 쓰기"}
          type={"positive"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;

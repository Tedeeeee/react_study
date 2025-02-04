import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary.jsx";
import { getStringedDate } from "../util/get-stringed-date.js";

const Diary = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const currentDiaryItem = useDiary(id);

  if (!currentDiaryItem) {
    return <div>데이터 로딩중....</div>;
  }

  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;

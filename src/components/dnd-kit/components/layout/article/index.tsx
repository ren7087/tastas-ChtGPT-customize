import DndWrapper from "../../../components/elements/dnd/dndWrapper";
import Callout from "../../callout";

const Article = () => {
  return (
    <>
      <Callout />
      <div className="flex mx-10 my-10">
        <DndWrapper />
      </div>
    </>
  );
};
export default Article;

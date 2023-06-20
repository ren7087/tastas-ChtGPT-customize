import DndWrapper from "../../../components/elements/dnd/dndWrapper";
import Callout from "../../callout";

const Article = () => {
  return (
    <>
      <Callout />
      <div className="flex sm:mx-10 mx-2 my-10">
        <DndWrapper />
      </div>
    </>
  );
};
export default Article;

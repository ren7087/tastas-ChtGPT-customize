import Article from "../components/dnd-kit/components/layout/article";
import HeaderComponent from "@/components/header";

export default function Index() {
  return (
    <>
      <HeaderComponent />
      <div className="flex">
        <div className="flex-1 w-full m-1 p-1">
          <Article />
        </div>
      </div>
    </>
  );
}

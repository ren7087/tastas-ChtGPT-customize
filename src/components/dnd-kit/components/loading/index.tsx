type Props = {
  text?: string;
};

const Loading = (props: Props) => {
  return (
    <div className="m-auto mt-24 flex justify-center items-center">
      <div className="mr-5">
        <h2 className="font-bold">ローディング中.....</h2>
        {props.text && <h2 className="font-bold">{props.text}</h2>}
      </div>
      <div className="animate-spin h-20 w-20 bg-blue-300 border-2 border-blue-300 rounded-xl"></div>
    </div>
  );
};

export default Loading;

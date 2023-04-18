const Loading = () => {
  return (
    <div className="m-auto mt-24 flex justify-center items-center">
      <div className="mr-5">
        <h2 className="font-bold">ローディング中.....</h2>
        <h2 className="font-bold">30秒ほどお待ちください</h2>
      </div>
      <div className="animate-spin h-20 w-20 bg-blue-300 border-2 border-blue-300 rounded-xl"></div>
    </div>
  );
};

export default Loading;

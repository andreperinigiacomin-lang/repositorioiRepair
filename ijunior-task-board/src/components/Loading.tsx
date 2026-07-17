const Loading = () => {
  return (
    <div className="flex justify-center items-center py-12 gap-4">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-[#10b981] rounded-full animate-spin"></div>
      <p className="text-slate-500 text-lg font-medium">
        Carregando...
      </p>
    </div>
  );
};

export default Loading;
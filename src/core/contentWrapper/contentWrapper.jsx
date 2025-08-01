function ContentWrapper({ children, className }) {
  return (

    <div className={`flex sm:border sm:border-stone-400 sm:rounded-3xl sm:w-[80%] p-4 m-4 h-screen`}>
      {children}
    </div>
  );
}

export default ContentWrapper
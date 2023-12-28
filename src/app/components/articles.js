function articles ({articles}) {

  console.log("articles", articles)
    return(
    <div className="flex mt-7 flex-col w-[50vh] border-opacity-50">
      {articles.map((article, index) => (
        <>
        <div className="divider"></div>
        <div key={index} className="grid h-10 card bg-base-300 rounded-box place-items-center">
          {article.title}
        </div>
        </>
      ))}
</div>
    )


}

export default articles



const Repos = ({repos,info,url,watcher,star,openIssues,fork})=>{

    const check = ()=>{
        window.open(url, '_blank');
    }

    return(
        <div onClick={check} className="p-5 bg-[#3C4048] mx-4 rounded my-3 hover:bg-[#181818]">
            <h3 className="text-white"><i className="fas fa-link text-white pr-2"></i><a href={url} target="_blank" rel="noreferrer">{repos}</a></h3>
            <p className="py-1 text-white">{info}</p>
            <div className="flex gap-2">
                <div className="shadow-md border-black text-blue-400 rounded-xl p-1"><i className="fas fa-eye px-1"></i>{watcher}</div>
                <div className="shadow-md border-black text-green-400 rounded-xl p-1"><i className="fas fa-star px-1"></i>{star}</div>
                <div className="shadow-md border-black text-red-400 rounded-xl p-1"><i className="fas fa-info px-1"></i>{openIssues}</div>
                <div className="shadow-md border-black text-yellow-400 rounded-xl p-1"><i className="fas fa-utensils px-1"></i>{fork}</div>
            </div>
        </div>
    )
}

export default Repos
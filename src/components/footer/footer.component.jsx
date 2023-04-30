

const Footer = ()=>{

    let date = new Date().getFullYear();

    return(
        <div className="flex justify-center bg-gray-800 py-6 text-[#F9F9F9]" >
            <div>
                <div className="text-center text-[3rem]"><i className="fab fa-slack-hash"></i></div>
                <p>Copyright &copy; {date} All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer


const Alart =({msg})=>{

    // return(<div>
    //     <h1 className="container mx-auto">{msg.msg}</h1>
    // </div>);

    return(
        <div class="container mx-auto p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 ">
            <span class="font-medium">Warning</span> {msg.msg}.
        </div>
    )
}

export default Alart;
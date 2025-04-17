const Button = (props)=>{
    return(
    <div className="">
        <button onClick={props.onGameEnrolled} className=" text-white rounded-md px-16 py-4 font-bold bg-violet-800 hover:bg-violet-950 transition-colors cursor-pointer">{props.string}</button>
      </div>
    );
}

export default Button
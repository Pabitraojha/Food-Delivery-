function Button(props){
    return(
        <div className="text-gray-700 border rounded-full px-2 py-1 my-3 cursor-pointer">
            <p className="text-sm">{props.value}</p>
        </div>
    )
}
export default Button;
import Button from "./Button";
function CategoryFilter(){
    return(
        <div className="flex gap-5 bg-white mx-10 px-15 py-1 border-t  border-b border-gray-300">
            <Button value="all"/>
            <Button value="Mains"/>
            <Button value="Snacks"/>
            <Button value="Bowls"/>
            <Button value="Sushi"/>
            <Button value="Pizza"/>
        </div>
    )
}
export default CategoryFilter;
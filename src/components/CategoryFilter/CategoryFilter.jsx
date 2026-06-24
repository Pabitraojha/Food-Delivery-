import Button from "./Button";
function CategoryFilter(){
    return(
        <div className="flex flex-wrap gap-3 bg-white px-4 sm:px-6 md:px-10 py-3 border-t border-b border-gray-300 justify-center">
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
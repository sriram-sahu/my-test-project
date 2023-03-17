const EachItem=props=>{
    const {details,deleteItem}=props
    const deleteItemItem=()=>{
        deleteItem(details.id)
    }
return(
    <li className="list-item">
        <h1>{details.name}</h1>
        <h1>{details.city}</h1>
        <h1>{details.salary}</h1>
        <h1>{details.mobile}</h1>
        <img src={details.proflePic} />
        <button type='button' className="buttons">Edit</button>
        <button type='button' className="buttons" onClick={deleteItemItem}>Delete</button>
    </li>
)
}

export default EachItem
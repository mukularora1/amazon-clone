const reducer=(state,action)=>{
switch (action.type){
    case "add":
    return [...state,action.payload];
    case "remove":
     let newArr=   state.filter((element)=> element.id!==action.payload.id )
    return [...newArr];
    default:
    return [...state];
}
}
export default reducer;

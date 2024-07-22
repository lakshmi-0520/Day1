function Condition() {
    const value=true;
    if(value){
        return(
            <div><h1>True statement</h1></div>
        );
    }
    else{
        return(
            <div><h1>False statement</h1></div>
        );
    }
}
export default Condition;
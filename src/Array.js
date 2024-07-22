function Array()
{
    const array = [1,2,3,3,5]
    const arr = ["kalyani","yasaswini","mouna","prasanaa"]
    return(
        <div>
            <h1>{array[0]}</h1>
            <h1>{array[1]}</h1>
            <h1>{array[2]}</h1>
            <h1>{array[3]}</h1>
            <h1>{array[4]}</h1>
            <h1>By using map function list of names</h1>
            <ul>{arr.map((item,index)=>(
            <li key={index}>{item}</li>
            ))} 
            </ul>
        </div>
    );
}
export default Array;
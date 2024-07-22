function Ternary()
{
    const val = false;
    return(
        <div>
            {val?<h1>This is true</h1>:<h1>This is false</h1>}
        </div>
    );
}
export default Ternary;
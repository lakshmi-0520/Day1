function Image()
{
    return(
        <div>
            <table cellspacing="0" cellpadding="10">
                <tr>
            <td><img alt="img" src={`${process.env.PUBLIC_URL}/img.jpeg`} height="100"></img></td>
            <td><dl>
                <dt>kalyani</dt>
                    <dd>this is good</dd>
            </dl>
            </td>
            </tr>
            <tr>
            <td><img alt="img" src={`${process.env.PUBLIC_URL}/logo.png`} height="100"></img></td>
            <td><dl>
                <dt>kalyaniiii</dt>
                    <dd>this is not good</dd>
            </dl>
            </td>
            </tr>
            </table>
        </div>
    );
}
export default Image;
import {Link} from "react-router-dom";
function Customer(){
    return (
        <>
        <h1>Customer home</h1>
        <Link to="/DisplaySongs">View songs</Link><br/>
    <Link to="/createplaylist">Create Playlist</Link><br/>
    </>
    )
}
export default Customer;
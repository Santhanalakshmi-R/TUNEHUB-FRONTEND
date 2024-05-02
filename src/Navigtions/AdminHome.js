import React from "react";
import {Link} from 'react-router-dom';
function Admin(){
    return (
    <>
    <h3>Admin page</h3>
    <h1>Welcome to admin home</h1>
    <Link to="/addsongs">Add songs</Link><br/>
    <Link to="/DisplaySongs">View songs</Link><br/>
    <Link to="/createplaylist">Create Playlist</Link><br/>
    <Link to="/viewplaylist">View Playlist</Link>
    </>
    )
}
export default Admin;
import React,{ useState } from "react";
import axios from "axios";

function AddSongs(){
    const [name,setName]=useState();
    const [artist,setArtist]=useState();
    const [genre,setGenre]=useState();
    const [link,setLink]=useState();
    async function handleSubmit(e){
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:8080/addsongs',{
                name,artist,genre,link
            } );
            console.log(response.data);
            if(response.data=='Songsuccess'){
                // window.location.href='/login';
                alert("song added successfully")
            }
            else if(response.data='Songfail'){
                alert("song failed");
            }
            else{
                alert("error occured");
            }
        }
       
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
        <h3>Add songs</h3>
        <form action="/addsongs"  onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" name="name"value={name} onChange={e=>setName(e.target.value)} />
            <br/><br/>
            <label>Song Artist:</label>
            <input type="text" name="artist" value={artist} onChange={e=>setArtist(e.target.value)}/>
            <br/><br/>
            <label>Song Genre:</label>
            <input type="text" name="genre" value={genre} onChange={e=>setGenre(e.target.value)}/>
            <br/><br/>
            <label>Song link:</label>
            <input type="text" name="link" value={link} onChange={e=>setLink(e.target.value)}/>
            <br/><br/>
            <input type="submit" value="ADD SONGS"/>
        </form>
        </>
    )
}
export default AddSongs;
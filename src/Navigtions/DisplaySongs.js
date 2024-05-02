import axios from "axios";
import { useEffect } from "react";
import {useState} from "react";
function DisplaySongs(){
    const [songs,setSongs]=useState([]);
    // const [name,setName]=useState();
    // const [artist,setArtist]=useState();
    // const [genre,setGenre]=useState();
    // const [link,setLink]=useState();
    useEffect(() => {
        axios.get("http://localhost:8080/viewsongs")
          .then(response => {
            setSongs(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.error("Error fetching songs:", error);
          });
      }, []);
    return(
        <>
        <h1>Songs page</h1>
        <table border="1">
        <thead>
            <tr>
            <td>Name</td>
            <td>Artist</td>
            <td>Genre</td>
            <td>Link</td>
            </tr>
            </thead>
        <tbody>
            {/* <tr th:each="songslist:${songslist}">
                <td th:text=${songslist.name}></td>
                <td th:text=${songslist.artist}></td>
                <td th:text=${songslist.genre}></td>
                <td>
                    <audio controls>
                        <source th:src=${songslist.link} type="audio/mpeg">
                    </audio>
                </td>
            </tr> */}
            
        </tbody>
</table>
</>
    )
}
export default DisplaySongs;
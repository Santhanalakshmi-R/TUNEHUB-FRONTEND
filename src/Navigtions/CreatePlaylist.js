function CreatePlaylist(){
    return(
        <>
        <h1>create CreatePlaylist</h1>
        <form action="/addplaylist" method="post">
<label>Playlist name</label>
<input type="text" name="name"/>
<br/>
{/* <div th:each="songs: ${songslist}"> */}

	{/* <input type="checkbox" th:name="songs" th:value="${songs.id}"/> */}
	{/* <label th:text="${songs.name}"></label> */}
{/* </div> */}
<input type="submit" value="add playlist"/>
</form>
        </>
    )
}
export default CreatePlaylist;
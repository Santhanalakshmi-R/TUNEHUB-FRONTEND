function ViewPlaylist(){
    return(
        <>
        <h3>View Play list</h3>
        <table border="1">
		<thead>
		<tr>
			<th>playlist id</th>
			<th>playlist name</th>
			<th>playlist songs</th>
			</tr>
		</thead>
		<tbody>
			{/* <tr th:each="pl:${playlist}">
			<td th:text="${pl.id}"></td>
			<td th:text="${pl.name}"></td> */}
			<td >
				<ul>
					{/* <li th:each="s:${pl.songs}"> */}
					{/* <span th:text="${s.name}"></span>
					<audio controls>
							<source th:src="${s.link}"  type="audio/mpeg">
					</audio> */}
					{/* </li> */}
				</ul>
			</td>
			{/* </tr> */}
			</tbody>
		</table>
        </>
    )
}
export default ViewPlaylist;
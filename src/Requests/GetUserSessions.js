class GetUserSessions {
    // Return the promise which will resolve to return the response.json
	static GetUserSessionsData() {
		return fetch('http://localhost:3001/getUserSessions/113340512880134517454').then(function(response) {
			return response.json();
		});
	}
}
export default GetUserSessions;

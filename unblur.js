(async () => {
	const apiUrl = "https://api.gotinder.com/v2/fast-match/teasers";
	const teasers = await fetch(apiUrl, {
	  headers: {'X-Auth-Token': localStorage.getItem('TinderWeb/APIToken')}
	})
	const res = teasers.json().then(response => {
	  response.data.results.map(result => {
		console.log(result.user.photos[0].url)
	  })
  
	})
  })()
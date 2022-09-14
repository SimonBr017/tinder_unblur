(async () => {
	const apiUrl = "https://api.gotinder.com/v2/fast-match/teasers";
	const teasers = await fetch(apiUrl, {
	  headers: {'X-Auth-Token': localStorage.getItem('TinderWeb/APIToken')}
	}).then((response) => response.json()).then((response) => response.data.results);
const teaserElements = document.querySelectorAll('.Expand.enterAnimationContainer > div:nth-child(1)');

for (let i = 0; i < teaserElements.length; ++i) {
	const teaser = teasers[i];
	const teaserElement = teaserElements[i];

	const teaserImage = teaser.user.photos[0].url;

	teaserElement.style.backgroundImage = `url(${teaserImage})`;
}
  })()

const datastore = {
	fetchMaps: () => {},
};

export function handleGetMaps() {
	console.log("Getting maps!");
	const maps = datastore.fetchMaps();
	return maps;
}

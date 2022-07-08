export const getGifs = async (category) => {
    {/* T9eZ3fYKGsVEY7OiprzE9PK9sSXL37tJ */ }
    const url = `https://api.giphy.com/v1/gifs/search?api_key=T9eZ3fYKGsVEY7OiprzE9PK9sSXL37tJ&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;
}
export const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "43128831d2msh6c9edd68097a267p1545e3jsn7658546f7215",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
};

export const fetchData = async (url, options) => {
    const key = "276890b7f18145f587527c7904171ba2"; // Em um projeto real essa key ficaria em um .env
    const data = await fetch(url + "?key=" + key, options);
    const json = await data.json();

    return json;
};

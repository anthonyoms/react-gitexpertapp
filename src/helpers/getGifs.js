export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria) }+&limit=10&api_key=QTx3IU90Qy6x06xBObO6F5wNA5dirV6w`;

   const resp = await fetch( url );

   const { data } = await resp.json();

   const gifs = data.map(({id, title, images: { downsized_medium: { url } } }  ) => {

    return {
        id,
        title,
        url
    }
       
   });

   return gifs
};
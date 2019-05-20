import React from 'react';


const Albums = (props) => (
    props.results != '' && props.results.albums.items.map((result, i) => {
        return (
            <div class="media p-3" key={i}>
            {result.images == "" ? <img src="https://st2.depositphotos.com/2923481/7931/i/950/depositphotos_79311902-stock-photo-lp-platinum-album.jpg" width="120" class="mr-3" alt="img" />
            : <img src={result.images[0].url} width="120" class="mr-3" alt="img" />}
            
            <div class="media-body">
                <h5 class="mt-0">{result.name}</h5>     
                {result.artists.map((artist, i) => {
                    return <span key={i} className="text-light">{artist.name} <br /> </span>
                })}
            </div>
            </div>
        )
    })
)


export default Albums
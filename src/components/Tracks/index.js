import React from 'react';

function duration(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

const Tracks = (props) => (
    props.results != '' && props.results.tracks.items.map((result, i) => {
        return (
            <div className="media p-3" key={i}>
            {result.album.images == "" ? <img src="https://st2.depositphotos.com/2923481/7931/i/950/depositphotos_79311902-stock-photo-lp-platinum-album.jpg" width="120" className="mr-3" alt="img" />
            : <img src={result.album.images[0].url} width="120" className="mr-3" alt="img" />}
            
            <div className="media-body text-light">
                <h5 className="mt-0">{result.name}</h5>  
                <h6>{result.album.name}</h6>   
                {result.artists.map((artist, i) => {
                    return <span key={i} className="text-light">{artist.name} | </span>
                })}
                <h6>Duração: {duration(result.duration_ms)}</h6>
            </div>
            </div>
        )
    })
)


export default Tracks
import React from 'react';

function popularity(value){
    if(value > 80 ){
        return <div><span className="level bg-danger">Quente</span></div>
    } else if(value >= 60 && value <=79 ){
        return <div><span className="level bg-success">Cool</span></div>
    } else if(value >= 30 && value <=59 ){
        return <div><span className="level bg-warning">Regular</span></div>
    } else if(value < 30 ){
        return <div><span className="level bg-info">Underground</span></div>
    }
}

const Artists = (props) => (

    props.results != '' && props.results.artists.items.map((result, i) => {
        return (
            <div className="media p-3" key={i}>
            {result.images == "" ? 
            <img src="https://st2.depositphotos.com/2923481/7931/i/950/depositphotos_79311902-stock-photo-lp-platinum-album.jpg" width="120" className="mr-3" alt="img" />
            : <img src={result.images[0].url} width="120" className="mr-3" alt="img" />}
            
            <div className="media-body">
                <h5 className="mt-0">{result.name}</h5>     
                {result.genres.map((genre, i) => {
                    return <span key={i} className="text-light">{genre}, </span>
                })}
                {popularity(result.popularity)}
            </div>
            </div>
        )
    })
)


export default Artists
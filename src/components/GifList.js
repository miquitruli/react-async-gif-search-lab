import React, { Component } from 'react'

class GifList extends Component {
    listGifs = () => {
        if (this.props.gifs[0] !== undefined) {
            return this.props.gifs.map( gif => <li><img alt="" src={gif.images.original.url}></img></li>)
        } 
    }

    render() {
        return(
            <ul>{this.listGifs()}</ul>
        )
    }
}

export default GifList
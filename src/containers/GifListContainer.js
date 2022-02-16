import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
    state = {
        query: '',
        gifs: []
    }

    fetchData = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=VorhTRrD05LDN5qInGhNnUmqZtbSmcDs&rating=g`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs: [data.data[0], data.data[1], data.data[2]]
                })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // TODO: fill this out
        this.setState({
          query: event.target.firstChild.value
        })
      }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    componentDidMount() {
        this.fetchData()
    }

}

export default GifListContainer
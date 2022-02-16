import React, { Component } from 'react'

class GifSearch extends Component {
    state = {
        search: ''
    }

    handleSubmit = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" value={this.state.search} onChange={this.handleSubmit}></input>
                <input type="submit" value="Search"></input>
            </form>
        )
    }
}

export default GifSearch
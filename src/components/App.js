import React, { Component } from 'react'; 

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {

    state = { artistQuery: '', artist: null, tracks: [] };

    updateArtistQuery = event => {
        // console.log('event.target.value', event.target.value);
        this.setState({ artistQuery: event.target.value });
    }

    searchArtist = () => {
        fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
        .then(response => response.json())
        .then(json => {
            console.log('json', json);

            if(json.artists.total > 0) {
                const artist = json.artists.items[0];

                // console.log('artist', artist);
                this.setState({ artist });

                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json => this.setState({ tracks: json.tracks }))
                .catch(error => alert(error.message));
            }
        })
        .catch(error => alert(error.message));
    }

    handleKeyPress = event => {
        if(event.key === 'Enter') {
            this.searchArtist();
        }
    }

    render() {
        console.log('this.state', this.state);

        return (
            <div>
                <h2>Music Master</h2>
                    <input 
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handleKeyPress} 
                    placeholder="Cari Musisi Atau Band"
                />
                <button onClick={this.searchArtist}>Search</button>

            </div>
        );
    }
}

export default App;
import React, { Component } from 'react'; 

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {

    state = { artistQuery: '' };

    updateArtistQuery = event => {
        console.log('event.target.value', event.target.value);
        this.setState({ artistQuery: event.target.value });
    }

    searchArtist = () => {
        console.log('this.state', this.state);
    }

    handleKeyPress = event => {
        if(event.key === 'Enter') {
            this.searchArtist();
        }
    }

    render() {
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
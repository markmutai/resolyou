import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const style = {
    width: '100%'
}

class MapContainer extends Component {
    render() {
        return (
            <>
                <div className='w-full h-full overflow-hidden'>
                    <Map
                        google={this.props.google}
                        // style={{ width: "35%", height: "30%" }}
                        containerStyle={{ position: 'relative', width: '100%', height: '800px' }}
                        style={style}
                        zoom={16}
                        initialCenter={
                            {
                                lat: -1.2653712484771338,
                                lng: 36.79825221936327,
                            }
                        }
                    >
                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                    </Map>
                </div>
            </>
            // -1.2653712484771338, 36.79825221936327
        )
    }
}

// const containerStyle = {
//     position: 'relative',
//     width: '100%',
//     height: '100%'
// }

export default GoogleApiWrapper({
    apiKey: "AIzaSyC_HndgijGfo3m0-ofhV-9_BmeIKjdDcZE"
})(MapContainer);
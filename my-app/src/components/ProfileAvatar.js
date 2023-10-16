import React from "react";
import Settings  from "../Settings";

export default class Profile extends React.Component {
    render() {
        const image = `${ Settings.avatar.baseUrl }/${ this.props.photo} `;
        return(
            <img src={ image} className="rounded-circle img-fluid" style={ {width: '100px' }} />
        );
    }
}
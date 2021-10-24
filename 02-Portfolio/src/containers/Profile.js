import React, { Component } from 'react';

class Profile extends Component
{
    constructor() {
        super();
        this.state = {
            data: {},
            loading: true
        }
    }
    
    async componentDidMount() {
        const username = 'vasilijus',
                profile = await fetch(`https://api.github.com/users/${username}`),
                profileJSON = await profile.json();

        if (profileJSON) {
            this.setState({
                data: profileJSON,
                loading: false
            })
        }

    }

    render() {
        return (
            <div></div>
        );
    }
    
}

export default Profile;
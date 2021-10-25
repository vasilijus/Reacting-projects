import React, { Component } from 'react';
import Link from '../components/Link/Link';
import List from '../components/List/List';
import './Profile.css';

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
        const username = 'vasilijus';
        // const profile = await fetch(`https://api.github.com/users/${username}`);
        // profile = await fetch(datajson);
        // const profileJSON = await profile.json();

        const temp = '{"login":"vasilijus","id":6454612,"node_id":"MDQ6VXNlcjY0NTQ2MTI=","avatar_url":"https://avatars.githubusercontent.com/u/6454612?v=4","gravatar_id":"","url":"https://api.github.com/users/vasilijus","html_url":"https://github.com/vasilijus","followers_url":"https://api.github.com/users/vasilijus/followers","following_url":"https://api.github.com/users/vasilijus/following{/other_user}","gists_url":"https://api.github.com/users/vasilijus/gists{/gist_id}","starred_url":"https://api.github.com/users/vasilijus/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/vasilijus/subscriptions","organizations_url":"https://api.github.com/users/vasilijus/orgs","repos_url":"https://api.github.com/users/vasilijus/repos","events_url":"https://api.github.com/users/vasilijus/events{/privacy}","received_events_url":"https://api.github.com/users/vasilijus/received_events","type":"User","site_admin":false,"name":"Sergej Vasiljev","company":null,"blog":"","location":"Birmingham","email":null,"hireable":null,"bio":"Mobile and Web Developer","twitter_username":null,"public_repos":102,"public_gists":16,"followers":0,"following":0,"created_at":"2014-01-20T21:26:48Z","updated_at":"2021-10-24T20:29:52Z"}'
        
        const profileJSON = JSON.parse(temp);

        if (profileJSON) {
            this.setState({
                data: profileJSON,
                loading: false
            })
        }

    }

    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <div>Loading</div>;
        }

        const items = [
            { label: 'html_url', value: <Link url={data.html_url} title='Github URL' /> },
            { label: 'repos_url', value: data.repos_url },
            { label: 'name', value: data.name},
            { label: 'company', value: data.company },
            { label: 'location', value: data.location },
            { label: 'email', value: data.email },
            { label: 'bio', value: data.bio }
        ]
        return (
            <div className='Profile-container'>
                <img className='Profile-avatar' src={data.avatar_url} alt='avatar' />

                <ul>
                    <List items={items} />
                </ul>
                </div>
        );
    }
    
}

export default Profile;
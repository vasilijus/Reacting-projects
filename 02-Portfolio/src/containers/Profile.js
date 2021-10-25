import React, { Component } from 'react';
import Link from '../components/Link/Link';
import List from '../components/List/List';
import './Profile.css';
import {reposJSON} from './repos';

class Profile extends Component
{
    constructor() {
        super();
        this.state = {
            data: {},
            repositories: [],
            loading: true
        }
    }
    
    async componentDidMount() {
        const temp = '{"login":"vasilijus","id":6454612,"node_id":"MDQ6VXNlcjY0NTQ2MTI=","avatar_url":"https://avatars.githubusercontent.com/u/6454612?v=4","gravatar_id":"","url":"https://api.github.com/users/vasilijus","html_url":"https://github.com/vasilijus","followers_url":"https://api.github.com/users/vasilijus/followers","following_url":"https://api.github.com/users/vasilijus/following{/other_user}","gists_url":"https://api.github.com/users/vasilijus/gists{/gist_id}","starred_url":"https://api.github.com/users/vasilijus/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/vasilijus/subscriptions","organizations_url":"https://api.github.com/users/vasilijus/orgs","repos_url":"https://api.github.com/users/vasilijus/repos","events_url":"https://api.github.com/users/vasilijus/events{/privacy}","received_events_url":"https://api.github.com/users/vasilijus/received_events","type":"User","site_admin":false,"name":"Sergej Vasiljev","company":null,"blog":"","location":"Birmingham","email":null,"hireable":null,"bio":"Mobile and Web Developer","twitter_username":null,"public_repos":102,"public_gists":16,"followers":0,"following":0,"created_at":"2014-01-20T21:26:48Z","updated_at":"2021-10-24T20:29:52Z"}'
        const tempProfileJSON = JSON.parse(temp);
        const username = tempProfileJSON.login;
        debugger
        let profile = null;
        let profileJSON = null;

        if( !localStorage.getItem("profile") ){
            profile = await fetch(`https://api.github.com/users/${username}`);
            profileJSON = await profile.json();
            localStorage.setItem('profile', JSON.stringify(profileJSON) );
        } else {
            profileJSON = JSON.parse(localStorage.getItem('profile') );
        }

        if (profileJSON) {
            let repos, reposJSON;

            if( !localStorage.getItem("repos") ){
                repos = await fetch(profileJSON.repos_url);
                reposJSON = await repos.json();
                localStorage.setItem('repos', JSON.stringify(reposJSON) );
            } else {
                reposJSON = JSON.parse(localStorage.getItem('repos') );
            }

            this.setState({
                data: profileJSON,
                repositories: reposJSON,
                loading: false
            })
        }

    }

    render() {
        const { data, loading, repositories } = this.state;

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
        ];

        const projects = repositories.map( repository => ({
            label: repository.name,
            value: <Link url={repository.html_url} title='Github URL' />
        }));

        return (
            <div className='Profile-container'>
                <img className='Profile-avatar' src={data.avatar_url} alt='avatar' />

                <List items={items} />
                <List items={projects} />
            </div>
        );
    }
    
}

export default Profile;
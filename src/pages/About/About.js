import axios from "axios";
import { useState, useEffect } from 'react';
import Followers from './components/Followers'
import { Avatar } from 'antd';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import './Style.css'
import { Card } from 'antd';

export default function About() {

  const [data, setData] = useState({})
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    const api = axios.get('https://api.github.com/users/josevalim')
    .then((response) => {
        setData(response.data)
    })

  }, [])

  useEffect(() => {
    const Getfollowers = axios.get(data.followers_url)
    .then((response) => {
        setFollowers(response.data)
    })

  }, [data])

  console.log(followers)

  return (

    <div className="container">

        <div className="content">

            <Card style={{ padding: '0px 50px 0px 50px'}}>
                <h1 className="title">About</h1>
                <div className="profile">
                    <Avatar size={100} src={data.avatar_url} />

                    <div className="social">
                        <div className="github">
                            <GithubOutlined style={{ fontSize: '25px'}} />
                            <p>{`@${data.login}`}</p>
                        </div>
                        <div className="twitter">
                            <TwitterOutlined style={{ fontSize: '25px'}} />
                            <p>{`@${data.twitter_username}`}</p>
                        </div>
                    </div>
                </div>
                
                <p className="bio">{data.bio}</p>

                <div className="followers">
                    <h1>GitHub Followers:</h1>
                    <Avatar.Group maxCount={5} style={{ marginTop: '10px'}} size="large">
                        {followers.map((follower) => <Followers avatar_url={follower.avatar_url} name={follower.login} />)}
                    </Avatar.Group>
                </div>
            </Card>
        </div>
    </div>
  )
}

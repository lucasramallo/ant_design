import axios from "axios";
import { useState, useEffect } from 'react';
import Followers from './components/Followers'
import { Avatar } from 'antd';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import './Style.css'
import { Card } from 'antd';
import { ApiService } from "../../service/ApiService";

export default function Home() {

  const [data, setData] = useState({})
  const [followers, setFollowers] = useState([])

  const apiService = new ApiService();

  useEffect(() => {
    apiService.getApi().then((data) => setData(data)); 
  });

  useEffect(() => {
    axios.get(data.followers_url)
    .then((response) => {
        setFollowers(response.data)
    })

  }, [data])

  return (
    <div className="container">

        <div className="content">

            <Card style={{ padding: '0px 50px 0px 50px'}}>
                <h1 className="title">{data.name}</h1>
                <div className="profile">
                    <Avatar size={100} src={data.avatar_url} />

                    <div className="social">
                        <div className="github">
                            <GithubOutlined style={{ fontSize: '25px'}} />
                            <p>{`@${data.login}`}</p>
                        </div>
                        <div className="twitter">
                            <TwitterOutlined style={{ fontSize: '25px'}} />
                            <p>{data.twitter_username ? `@${data.twitter_username}` : "@notwitter"}</p>
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
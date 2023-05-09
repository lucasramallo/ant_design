import { useState, useEffect } from 'react';
import { ApiService } from "../../service/ApiService";
import './Style.css'

export default function About() {

  const [data, setData] = useState({})

  const apiService = new ApiService();

  useEffect(() => {
    apiService.getApi().then((data) => setData(data)); 
  });

  return (
    <div className="container">
      <div className="content">
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
      </div>
    </div>
  )
}

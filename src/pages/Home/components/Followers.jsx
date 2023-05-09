import { Avatar, Tooltip } from 'antd';

export default function About(props) {

  return (
    <>
        <a href={`https://github.com/${props.name}`}>
            <Tooltip title={props.name} placement="top">
                <Avatar src={props.avatar_url} />
            </Tooltip>
        </a>
    </>
  )
}

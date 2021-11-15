interface Props {
    user: any;
}

function SuggestionsUser(props:Props) {
    return (
        <div className="user-card">
            <img src={props.user.avatar_url} alt="avatar" />
            <a href={props.user.html_url}><h3>{props.user.login}</h3></a>
        </div>
    );
}

export default SuggestionsUser;
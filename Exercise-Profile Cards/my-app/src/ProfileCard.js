function ProfileCard(props) {
    return (
        <div>
            <div>Title is {props.title}</div>
            <div>{props.handle}</div>
        </div>
    );
}

export default ProfileCard;
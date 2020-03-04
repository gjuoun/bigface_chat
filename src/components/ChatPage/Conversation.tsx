import React, { useEffect } from "react";
import { fetchFriends } from "../../actions";
import { connect } from "react-redux";
import { State } from "../../types";

interface Props {
  friends: any[];
  fetchFriends: Function;
}

const Conversation: React.FC<Props> = ({ friends, fetchFriends }) => {
  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);

  if (!friends) {
    return <div>no Conversations</div>;
  }
  console.log("frineds- ", friends);

  return (
    <div>
      {friends.map(friend => {
        return (
          <article className="media" key={friend.id}>
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{friend.name}</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { fetchFriends })(Conversation);

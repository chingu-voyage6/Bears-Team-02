import React from 'react';
import Conversation from './Conversation';

const Messages = ({ conversations, connections, markAsRead }) => {
	let listConversationsStarted = conversations.started.map(conversation => {
		let { _id, subject, messages, receivingUser } = conversation;
		return <Conversation id={_id} subject={subject} user={receivingUser} messages={messages} />;
	});
 
	let listConversationsReceived = conversations.received.map(conversation => {
		let { _id, subject, messages, sendingUser } = conversation;
		return (
			<Conversation id={_id} subject={subject} user={sendingUser} messages={messages} markAsRead={markAsRead} />
		);
	});

	let filteredConnections = connections.filter(connection => connection.username === 'sackfield');

	return (
		<div>
			{/* <div>
				Testing filtering user for sending a message from here
				<p>Connections</p>
				<ul>
					{filteredConnections.map(connection => {
						return <li key={connection._id}>{connection.username}</li>;
					})}
				</ul>
			</div> */}
			<p>Conversations Started: {listConversationsStarted}</p>
			<hr/>
			<p>Conversations Received: {listConversationsReceived}</p>
		</div>
	);
}
export default Messages;

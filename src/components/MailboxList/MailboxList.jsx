import { Link } from 'react-router';

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox</h2>
      <ul>
        {props.mailboxes.map((currentMailbox) => (
          <li key={currentMailbox._id}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
            Mailbox {currentMailbox._id}: {currentMailbox.boxOwner}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
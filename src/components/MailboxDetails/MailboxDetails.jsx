// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId));
    console.log('mailbox object:', selectedBox);
    
    if (!selectedBox) {
        return (
            <main>
                <h2>Mailbox not found!</h2>
            </main>
        );
    }

    return (
        <>
        <h2>{selectedBox.boxOwner}</h2>
        <dl>
            <dt>Box Size:</dt>
            <dd>{selectedBox.boxSize}</dd>
            <dt>Owner:</dt>
            <dd>{selectedBox.boxOwner}</dd>
        </dl>
        </>
    )
};

export default MailboxDetails;
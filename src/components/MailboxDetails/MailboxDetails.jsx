// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from 'react-router';

const MailboxDetails = ({ mailboxes, letters }) => {
    const { mailboxId } = useParams();
    
    const selectedBox = mailboxes.find(
        (mailbox) => Number(mailbox._id) === Number(mailboxId));
    console.log('mailbox object:', selectedBox);

    const selectedLetters = letters.filter((letter) => Number(letter.mailboxId) === Number(mailboxId));
    
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

        <h3>Letters</h3>
        {selectedLetters.length === 0 ? (<p>No letters yet!</p>) : (
            <ul>
                {selectedLetters.map((letter, index) => (
                    <li key={index}>
                        <p>To: {letter.recipient}</p>
                        <p>Message: {letter.message}</p>
                    </li>
                ))}
            </ul>
        )}
        </>
    );
};

export default MailboxDetails;
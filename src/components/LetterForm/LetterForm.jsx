import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    mailboxId: '', 
    recipient: '',
    message: ''
};

const LetterForm = ({ mailboxes, addLetter }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({...initialState, mailboxId: mailboxes.length > 0?     mailboxes[0]._id : ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addLetter(formData);
        setFormData(initialState);
        navigate(`/mailboxes/${formData.mailboxId}`);
    };

    return (
        <main>
            <h2>New Letter</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select Mailbox:</label>
                <select name="mailboxId" id="mailboxId" value={formData.mailboxId} onChange={handleChange} required>
                    <option value='' disabled>Select a Mailbox:</option>
                    {mailboxes.map((box) => (
                        <option key={box._id} value={box._id}>Mailbox {box._id}</option>
                    ))}
                </select>
                <label htmlFor="recipient">Recipient Name:</label>
                <input 
                    name='recipient' 
                    value={formData.recipient} 
                    onChange={handleChange} required />
                <label htmlFor="message">Message:</label>
                <textarea 
                    name='message' 
                    value={formData.message} 
                    onChange={handleChange} required />
                <button type='submit'>Send Letter</button>
            </form>
        </main>
    )
}

export default LetterForm;
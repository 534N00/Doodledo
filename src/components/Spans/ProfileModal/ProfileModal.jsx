// simple modal for viewing profile settings
import { useState } from 'react';
import ShortTextField from '../../Elements/ShortTextField/ShortTextField';
import Button from '../../Elements/Button/Button';
import ExitButton from '../../Elements/ExitButton/ExitButton';

const ProfileModal = ({
    isOpen,
    onClose,
    onSave,
    onClickDelete,

}) => {
    if (!isOpen) {
        return null;
    }

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setnewPassword] = useState('');
    const [newPassword2, setnewPassword2] = useState('');
    const [newEmail, setnewEmail] = useState('');
    

    return (
        <div className="profile-modal">
            <ExitButton onClick={onClose} />
            <h1>Profile</h1>
            <ShortTextField placeholder="Enter new username" onChange={(e) => setNewUsername(e.target.value)} />
            <ShortTextField placeholder="Enter new password" type="password" onChange={(e) => setnewPassword(e.target.value)} />
            <ShortTextField placeholder="Confirm new password" type="password" onChange={(e) => setnewPassword2(e.target.value)} />
            <ShortTextField placeholder="Enter new email" onChange={(e) => setnewEmail(e.target.value)} />
            <Button text="Save Changes" onClick={onSave} />
            <button onClick={onClickDelete}>Delete Account</button>
            
        </div>
    );
}

export default ProfileModal;
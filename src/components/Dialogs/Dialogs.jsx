import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';




const Dialogs = (props) => {



    let dialogElements = props.state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map((m) => <Message messages={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
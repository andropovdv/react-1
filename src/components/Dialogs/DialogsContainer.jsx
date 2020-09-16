import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import storeContext from '../../storeContext';
import Dialogs from './Dialogs';




const DialogsContainer = () => {

    return <storeContext.Consumer> 
        { (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state} />
        }
    }
    </storeContext.Consumer>


}

export default DialogsContainer;
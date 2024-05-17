import { getMessages, getMessageById, getMessagesByUserId, createMessage, deleteMessageById, updateMessageById } from '../mongodb/models/message.js';
import { createChat } from '../utlils/gemini.js';

export const getAllMessages = async (req, res) => {
  try {
    const messages = await getMessages();

    return res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id  } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'No id provided' });
    }

    const message = await getMessageById(id);

    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    return res.json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getMessagesByuserId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'No user_id provided' });
    }

    const messages = await getMessagesByUserId(id);

    if (!messages) {
      return res.status(404).json({ message: 'Messages not found' });
    }

    return res.json(messages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createNewMessage = async (req, res) => {
  try {
    const { user_id, sent_By, message_content } = req.body;
    console.log(req.body);

    if (!user_id || !sent_By ||!message_content) {
      return res.status(400).json({ message: 'User ID and sent_By are required' });
    }

    const message = await createMessage({ user_id, sent_By, message_content });
    // const messages = await getMessagesByUserId(user_id);
    // console.log(messages);
    // const history = messages.map(message => ({
    //   role: message.sent_By,
    //   parts: [{ text: message.message_content }],
    // }));
    // console.log(history);

    // const response = await createChat(history,message_content);
    const response = await createChat(message_content);

    const gemini_response = await createMessage({ user_id, sent_By : "gemini", message_content : response });

    return res.status(201).json(gemini_response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMessage = await deleteMessageById(id);

    return res.json(deletedMessage);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, sent_By, message_content } = req.body;

    if (!user_id || !sent_By){
      return res.sendStatus(400);
    }

    const updatedMessage = await updateMessageById(id, { user_id, sent_By, message_content });

    return res.status(200).json(updatedMessage).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
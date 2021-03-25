import {useEffect, useState} from "react"
import {socket} from "../service/socket"
import {useDispatch, useSelector} from "react-redux"
import {setActiveContacts, setActualConversation, setContacts, setConversations, setUser} from "../redux/global";
import {getFromLocalStorage, localStorageConstants} from "../constants/localStorage";

const useChat = () => {

  const dispatch = useDispatch()
  const conversations = useSelector(({global}) => global.conversations)


  useEffect(() => {

    socket.on('login', ({activeUsers, user}) => {
      setUser({dispatch, user: user})
      setActiveContacts({dispatch, activeUsers: activeUsers})
    })

    socket.on('contacts', data => {
      setContacts({dispatch, contacts: data})
    })

    socket.on('message', data => {
      if (conversations && conversations.length > 0) {
        let conv = conversations.find(el => el.id === data.chatId)
        conv.messages[data.messageId] = data.message
        setConversations({dispatch, conversations: [...conversations]})
      } else
        handleConversations()
    })

    socket.on('conversations', (conversations) => {
      setConversations({dispatch, conversations: conversations})
    })

    return () => {
      socket.off('login')
      socket.off('contacts')
      socket.off('message')
      socket.off('conversations')
    }
  }, [])

  const handleLoginRequest = (user) => {
    socket.emit('join', user)
  }

  const handleContacts = () => {
    socket.emit('contacts')
  }

  const handleConversations = () => {
    socket.emit('conversations')
  }

  const handleSendMessage = (chatId, message, sender) => {
    const newMessage = {chatId, message, sender}
    socket.emit('sendMessage', newMessage)
  }

  const handleCreateChat = ({receiver}) => {
    const sender = getFromLocalStorage(localStorageConstants.user)
    socket.emit('joinChat', {sender, receiver})
  }

  return {handleContacts, handleLoginRequest, handleCreateChat, handleConversations, handleSendMessage}

}
export default useChat

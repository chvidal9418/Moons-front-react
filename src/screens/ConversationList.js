import {Box, Hidden, Typography} from "@material-ui/core";
import ConversationTile from "../components/ConversationTile";
import {v4 as idV4} from "uuid";
import {setActualConversation} from "../redux/global";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import useChat from "../hooks/socket";
import {useEffect, useState} from "react";
import {getFromLocalStorage, localStorageConstants} from "../constants/localStorage";

const ConversationList = () => {

  const storedConversationList = useSelector(({global}) => global.conversations)
  const user = getFromLocalStorage(localStorageConstants.user)

  const dispatch = useDispatch()
  const history = useHistory()
  const {handleConversations} = useChat()

  const [conversationsList, setConversationList] = useState([])

  useEffect(() => {
    handleConversations()
  }, [])

  useEffect(() => {

    if (user !== '') {
      let filter = storedConversationList.filter(el => el.sender === user || el.receiver === user)
      setConversationList(filter)
    } else
      setConversationList(storedConversationList)

  }, [storedConversationList])


  const handleConversationClick = (conversation) => {
    setActualConversation({dispatch, actualConversation: conversation})
    history.push(`/conversations/${conversation.id}`)
  }

  const handleConversationMobileClick = (conversation) => {

    setActualConversation({dispatch, actualConversation: conversation})
    history.push(`/${conversation.id}`)
  }

  return <Box>
    <Hidden lgDown>
      {
        conversationsList.map((conversation, index) =>
          <ConversationTile key={idV4()} conversation={conversation}
                            onClick={() => handleConversationClick(conversation)}/>
        )
      }
    </Hidden>
    <Hidden lgUp>
      {
        conversationsList.map((conversation, index) =>

          <ConversationTile key={idV4()} conversation={conversation}
                            onClick={() => handleConversationMobileClick(conversation)}/>
        )
      }
    </Hidden>
  </Box>
}
export default ConversationList

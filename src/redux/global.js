const actions = {
  setDarkMode: 'SET_DARK_MODE',
  setUser: 'SET_USER',
  setContacts: 'SET_CONTACTS',
  setConversations: 'SET_CONVERSATIONS',
  setActiveContacts: 'SET_ACTIVE_CONTACTS',
  setActualConversation: 'SET_ACTUAL_CONVERSATION',
}

const initialState = {
  isDarkMode: false,
  user: {},
  contacts: [],
  activeContacts: [],
  conversations: [],
  actualConversation: undefined
}

export default (state = initialState, action) => {
  if (action.type === actions.setDarkMode) return {...state, isDarkMode: action.isDarkMode}
  if (action.type === actions.setUser) return {...state, user: action.user}
  if (action.type === actions.setContacts) return {...state, contacts: action.contacts}
  if (action.type === actions.setActiveContacts) return {...state, activeContacts: action.activeContacts}
  if (action.type === actions.setConversations) return {...state, conversations: action.conversations}
  if (action.type === actions.setActualConversation) return {...state, actualConversation: action.actualConversation}
  else return state
}

export const setDarkMode = ({dispatch, darkMode}) => {
  dispatch({
    type: actions.setDarkMode,
    isDarkMode: darkMode
  })
}
export const setUser = ({dispatch, user}) => {
  dispatch({
    type: actions.setUser,
    user
  })
}

export const setContacts = ({dispatch, contacts}) => {
  dispatch({
    type: actions.setContacts,
    contacts
  })
}

export const setActiveContacts = ({dispatch, contacts}) => {
  dispatch({
    type: actions.setActiveContacts,
    contacts
  })
}

export const setConversations = ({dispatch, conversations}) => {
  dispatch({
    type: actions.setConversations,
    conversations
  })
}


export const setActualConversation = ({dispatch, actualConversation}) => {
  dispatch({
    type: actions.setActualConversation,
    actualConversation
  })
}

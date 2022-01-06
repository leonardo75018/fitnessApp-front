//const state avec les informations
const dataInicial = {
  firstName: "",
  lastName: "",
  id: ""

}

const GET_USER_DATA_LOGIN = "GET_USER_DATA_LOGIN"


//reducer garde les data des actions
export default function userReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_USER_DATA_LOGIN: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        id: action.payload.id,
      }
    }
    default: {
      return state
    }

  }
}


//actions  vas chercher les data api
export const getUserDataLogin = () => async (dispatch, getState) => {
  dispatch({
    type: GET_USER_DATA_LOGIN,
    payload: {
      "id": "0ecfe4a5-75a2-40b9-bf5f-1c79ed7827bb",
      "firstName": "leo",
      "lastName": "antonio",
    }
  }
  )

}


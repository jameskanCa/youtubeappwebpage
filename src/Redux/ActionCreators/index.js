import {
  deleteSession,
  editSpecificMessage,
  loadSessions,
  errorMessage,
  loading,
} from "../Actions/index";
import { baseUrl } from "../../Utils/RequestUtils";

const API_ROOT = baseUrl();

// export const EditMessage = (_id, newMessage) => {
//   return async (dispatch) => {
//     try {
//       dispatch(loading("Editing message!"));
//       let response = await fetch(`${API_ROOT}/editMessage`, {
//         method: "POST",
//         body: JSON.stringify({ _id: _id, newMessage: newMessage }),
//         headers: new Headers({
//           "content-type": "application/json",
//           "Access-Control-Allow-Origin": "*",
//         }),
//       });

//       if (response.status === 200) {
//         dispatch(editSpecificMessage(_id, newMessage));
//       }
//     } catch (error) {
//       dispatch(errorMessage("Unable to Edit, try again!"));
//       return;
//     }
//   };
// };

export const DeleteSession = (sessionId, userId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${API_ROOT}/delete/${userId}/${sessionId}`, {
        method: "DELETE",
      });
      console.log(response);
      if (response.status === 200) {
        dispatch(deleteSession(sessionId));
      }
    } catch (error) {
      dispatch(errorMessage("Unable to Delete, try again!"));
      return;
    }
  };
};

export const LoadSessions = (userId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${API_ROOT}/getUserSessions/${userId}`, {
        method: "GET",
        headers: new Headers({ "content-type": "application/json" }),
      });
      if (response.status === 200) {
        dispatch(loadSessions(await response.json()));
      }
    } catch (error) {
      dispatch(errorMessage("Unable to Load, try again!"));
      return;
    }
  };
};

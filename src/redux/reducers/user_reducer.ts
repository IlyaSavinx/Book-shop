import { SET_USER, LOG_OUT, TOGGLE } from "../action-types/index";
import { IUserData } from "../../types";

const initialState = {
	authorizedUser: {
		name: "Lightzone",
		email: "",
		id: "",
	},
}

const getInitialState = () => {
	const localState = localStorage.localBooksState
	if (localState) {
		const parse = JSON.parse(localState)
		const { user } = parse
		return user
		
	}
	return initialState
};

const userReducer = (state = getInitialState(), action: any) => {
	switch (action.type) {
		case SET_USER: {
			const { user } = action;
			return {
				...state,
				authorizedUser:user,
			};
		}

		case LOG_OUT: {
			return {
				...state,
				authorizedUser: {
					username: "",
					email: "",
					id: "",
				},
			};
		}
		case TOGGLE: {
			const { books } = action;
            const index = state.books?.findIndex((el: { id: any; }) => el.id === books.id);
			const newFavorites = [...state?.favorites] || []
 
            if (index === -1) {
                newFavorites.push(books);
            } else {
                newFavorites.splice(index, 1);
            }
            return {
                ...state,
                favorites: newFavorites,
            }
        }
		
		default: {
			return state;
		}
	}
};

export { userReducer };

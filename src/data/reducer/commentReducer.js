const defaultValue = {
    comments: []
}

const ADD_COMMENT = "ADD_COMMENT"

export const commentReducer = (state = defaultValue, action) => {
    switch (action.type) {

        case ADD_COMMENT:
            return {...state, comments: [...state.comments, action.payload]}
        default: 
            return state
    }
}

export const addComment = (payload) => ({type: ADD_COMMENT, payload})

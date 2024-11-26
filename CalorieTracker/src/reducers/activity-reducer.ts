import { Activity } from "../types"

export type ActivityActions = {

}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities : []
}

export const activityReducer = (
        state : ActivityState = initialState,
        action : ActivityActions
    ) => {


}
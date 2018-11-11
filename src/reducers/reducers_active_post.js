export default function ReducerActivePost(state=null, action ){
    switch(action.type){
        case 'READ':
            return action.payload;
        default :
            return state;
    }
}
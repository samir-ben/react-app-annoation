const initState = {
    posts: [
      {id: '1', number_verse: 2, selection: 'çà et là', content: 'Voici un commentaire intéressant, vraiment ! Super Génial même je dirais !'},
      {id: '2', number_verse: 5, selection: 'l’automne des idées', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '3', number_verse: 11, selection: 'mystique aliment', content: 'Encore un joli commentaire tout frais. Trop de la bale !'},
      {id: '4', number_verse: 8, selection: 'es', content: 'Soyons fou'},
    ]
  }
  
  
 
  const ReducerPosts = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
     let newPosts = state.posts.filter(post => {
       return post.id !== action.id
     });
     return {
       ...state,
       posts: newPosts
     }
    }
    return state;
  }
  
  export default ReducerPosts;
  
  
export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const readPost = (id) => {
  return {
    type: 'READ',
    id
  }
}
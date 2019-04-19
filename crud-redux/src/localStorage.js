

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('users_list');
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

export const saveState = (state) => {
  console.log(state)
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('users_list', serializedState)
  } catch(err) {
    console.log('loi roi')
  }
}

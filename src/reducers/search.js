let initData = {
  hotData: [
    {
      id: 1,
      text: 'The accountant from'
    },
    {
      id: 2,
      text: 'C language programming'
    },
    {
      id: 3,
      text: 'Higher mathematics'
    },
    {
      id: 4,
      text: 'JavaScript'
    },
    {
      id: 5,
      text: 'Web design'
    },
    {
      id: 6,
      text: 'Photoshop'
    },
    {
      id: 7,
      text: 'English cet 4'
    },
    {
      id: 8,
      text: 'Linear algebra'
    },
    {
      id: 9,
      text: 'Civil service exam'
    }
  ]
}

export function search(state = initData, action) {
  switch (action.type) {
    case 'RECEIVE_HOT_SEARCH':
      return {
        ...state
      }

    default:
      return state
  }
}

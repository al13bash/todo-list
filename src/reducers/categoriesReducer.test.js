import categories, { categoriesInitialState } from './categoriesReducer'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      categories(undefined, {})
    ).toEqual( categoriesInitialState )
  })  

  it('should handle ADD_CATEGORY', () => {
    expect(
      categories([], {
        type: 'ADD_CATEGORY',
        id: 3,
        name: 'New category',
        parentId: undefined,
        isRoot: true
      })
    ).toEqual(
      [
        {
          id: 3,
          name: 'New category',
          done: true,
          children: []
        }
      ]
    )

    expect(
      categories(
        [
          {
            id: 3,
            name: 'New category',
            done: true,
            children:
            [
              {
                id: 4,
                name: 'Not new category',
                done: true,
                children: []
              }
            ]
          }
        ],
        {
          type: 'ADD_CATEGORY',
          id: 5,
          name: 'Child category',
          parentId: 3,
          isRoot: false
        })
    ).toEqual(
      [
        {
          id: 3,
          name: 'New category',
          done: true,
          children:
          [
            {
              id: 4,
              name: 'Not new category',
              done: true,
              children: []
            },
            {
              id: 5,
              name: 'Child category',
              done: true,
              children: []
            }
          ]
        }
      ]
    )
  })

  it('should handle REMOVE_CATEGORY', () => {
    expect(
      categories(
        [
          {
            id: 3,
            name: 'New category',
            done: true,
            children:
            [
              {
                id: 4,
                name: 'Not new category',
                done: true,
                children: []
              },
              {
                id: 5,
                name: 'Child category',
                done: true,
                children: []
              }
            ]
          }
        ],
        {
          type: 'REMOVE_CATEGORY',
          id: 3
        }
      )
    ).toEqual( [] )

    expect(
      categories(
        [
          {
            id: 3,
            name: 'New category',
            done: true,
            children:
            [
              {
                id: 4,
                name: 'Not new category',
                done: true,
                children: []
              },
              {
                id: 5,
                name: 'Child category',
                done: true,
                children: []
              }
            ]
          }
        ],
        {
          type: 'REMOVE_CATEGORY',
          id: 4
        }
      )
    ).toEqual(
      [
        {
          id: 3,
          name: 'New category',
          done: true,
          children:
          [
            {
              id: 5,
              name: 'Child category',
              done: true,
              children: []
            }
          ]
        }
      ]
    )
  })

  it('should handle CHANGE_CATEGORY_NAME', () => {
    expect(
      categories(
        [
          {
            id: 3,
            name: 'New category',
            done: true,
            children:
            [
              {
                id: 4,
                name: 'Not new category',
                done: true,
                children: []
              }
            ]
          }
        ],
        {
          type: 'CHANGE_CATEGORY_NAME',
          id: 4,
          name: 'new name'
        }
      )
    ).toEqual(
      [
        {
          id: 3,
          name: 'New category',
          done: true,
          children:
          [
            {
              id: 4,
              name: 'new name',
              done: true,
              children: []
            }
          ]
        }
      ]
    )
  })
})

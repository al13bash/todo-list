import { ADD_TODO, TOGGLE_TODO, CHANGE_TODOS_CATEGORY, EDIT_TODO } from '../constants/actionTypes';
import todos, { todosInitialState } from './todosReducer';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      todos(undefined, {}),
    ).toEqual(todosInitialState);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: ADD_TODO,
        id: 11,
        text: 'Todos text',
        categoryId: 2,
      }),
    ).toEqual(
      [
        {
          id: 11,
          title: 'Todos text',
          done: false,
          description: '',
          categoryId: 2,
        },
      ],
    );

    expect(
      todos(
        [
          {
            id: 11,
            title: 'Todos text',
            done: false,
            description: '',
            categoryId: 2,
          },
        ],
        {
          type: ADD_TODO,
          id: 13,
          text: 'Next todos text',
          categoryId: 3,
        },
      ),
    ).toEqual(
      [
        {
          id: 13,
          title: 'Next todos text',
          done: false,
          description: '',
          categoryId: 3,
        },
        {
          id: 11,
          title: 'Todos text',
          done: false,
          description: '',
          categoryId: 2,
        },
      ],
    );
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        [
          {
            id: 11,
            title: 'Todos text',
            done: false,
            description: '',
            categoryId: 2,
          },
        ],
        {
          type: TOGGLE_TODO,
          id: 11,
        },
      ),
    ).toEqual(
      [
        {
          id: 11,
          title: 'Todos text',
          done: true,
          description: '',
          categoryId: 2,
        },
      ],
    );
  });

  it('should handle EDIT_TODO', () => {
    expect(
      todos(
        [
          {
            id: 11,
            title: 'Todos text',
            done: false,
            description: '',
            categoryId: 2,
          },
        ],
        {
          type: EDIT_TODO,
          id: 11,
          title: 'Edited todos text',
          description: 'Description',
          done: true,
        },
      ),
    ).toEqual(
      [
        {
          id: 11,
          title: 'Edited todos text',
          done: true,
          description: 'Description',
          categoryId: 2,
        },
      ],
    );
  });

  it('should handle CHANGE_TODOS_CATEGORY', () => {
    expect(
      todos(
        [
          {
            id: 11,
            title: 'Todos text',
            done: false,
            description: '',
            categoryId: 2,
          },
          {
            id: 10,
            title: 'Todos text kek',
            done: true,
            description: '',
            categoryId: 3,
          },
        ],
        {
          type: CHANGE_TODOS_CATEGORY,
          todosId: 11,
          categoryId: 5,
        },
      ),
    ).toEqual(
      [
        {
          id: 11,
          title: 'Todos text',
          done: false,
          description: '',
          categoryId: 5,
        },
        {
          id: 10,
          title: 'Todos text kek',
          done: true,
          description: '',
          categoryId: 3,
        },
      ],
    );
  });
});

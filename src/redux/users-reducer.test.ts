import { StateType, usersActions, usersReducer } from "./users-reducer";

let state: StateType;
beforeEach(() => {
  state = {
    users: [
      {
        followed: false,
        id: 1,
        name: "User1",
        photos: { large: null, small: null },
        status: "User 1 status",
        uniqueUrlName: "user1",
      },
      {
        followed: true,
        id: 2,
        name: "User2",
        photos: { large: null, small: null },
        status: "User 2 status",
        uniqueUrlName: "user2",
      },
    ],
    fetchingInProgress: [],
    isLoading: false,
    pageSize: 10,
    totalCount: 10,
  };
});

test("follow user should be correct", () => {
  const changedState = usersReducer(state, usersActions.follow(1));

  expect(changedState.users[0].followed).toBe(true);
  expect(changedState.users[1].followed).toBe(true);
});

test("unfollow user should be correct", () => {
  const changedState = usersReducer(state, usersActions.unfollow(2));

  expect(changedState.users[0].followed).toBe(false);
  expect(changedState.users[1].followed).toBe(false);
});

test("set users user should be correct", () => {
  const changedState = usersReducer(
    state,
    usersActions.setUsers([
      {
        followed: false,
        id: 3,
        name: "User3",
        photos: { large: null, small: null },
        status: "User 3 status",
        uniqueUrlName: "user3",
      },
      {
        followed: false,
        id: 4,
        name: "User4",
        photos: { large: null, small: null },
        status: "User 4 status",
        uniqueUrlName: "user4",
      },
    ])
  );

  expect(changedState.users).toHaveLength(2);
  expect(changedState.users[0].id).toBe(3);
  expect(changedState.users[1].id).toBe(4);
});

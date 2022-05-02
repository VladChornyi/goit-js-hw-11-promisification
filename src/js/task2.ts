// Перепиши функцию `toggleUserState()` так, чтобы она не использовала
// callback-функцию `callback`, а принимала всего два параметра `allUsers` и
// `userName` и возвращала промис.
interface User {
  name: string,
  active : boolean
}
type Users = User[]


const users : Users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers: Users, userName : string) => {
  return new Promise(resolve =>
    resolve(
      allUsers.map(user => (user.name === userName ? { ...user, active: !user.active } : user)),
    ),
  );
};

const logger = (updatedUsers: Users) => console.table(updatedUsers);


/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

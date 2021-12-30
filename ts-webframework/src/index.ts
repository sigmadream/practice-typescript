import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserForm } from './views/UserForm';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
    // new UserForm(root, User.buildUser({ name: 'name', age: 20 })).render();
  }
});

users.fetch();

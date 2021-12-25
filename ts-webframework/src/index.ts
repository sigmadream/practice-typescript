import { User } from './models/User';

const user = new User({ name: 'new22', age: 22 });

user.on('save', () => {
  console.log(user);
});

user.save();

import { User } from './models/User';

const user = new User({ id: 4 });

user.set({ name: 'save4', age: -4 });

user.save();

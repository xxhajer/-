const formData = {
  name: 'Test Company',
  email: 'test@company.com',
  nationalId: '12345',
  password: 'Password1!',
  confirmPassword: 'Password1!',
  type: 'company',
  companyField: 'Tech',
  companyDescription: 'Test'
};

const users = [];
const newUser = {
  id: Date.now(),
  ...formData
};
delete newUser.password;
const newUserWithPass = { ...newUser, password: formData.password };
users.push(newUserWithPass);

console.log('DB Users:', users);

const email = 'test@company.com';
const password = 'Password1!';
const user = users.find(u => u.email === email && u.password === password);
console.log('Login Match:', user);

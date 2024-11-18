import specialists from './data/specialists.js';

function initializeApp() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const specialistsEmails = specialists.map((s) => s.email);
  const existingSpecialists = users.filter((u) => specialistsEmails.includes(u.email));

  if (existingSpecialists.length === 0) {
    const updatedUsers = [...users, ...specialists];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    console.log('Especialistas agregados al localStorage:', updatedUsers);
  }
}

export default initializeApp;

import React, { useEffect, useState } from 'react';
import AppointmentList from '../components/AppointmenList';

const Profile: React.FC = () => {
  const [userType, setUserType] = useState<'patient' | 'specialist'>();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const { userType } = JSON.parse(loggedInUser);
      setUserType(userType);
    }
  }, []);

  if (!userType) {
    return <p>Debe iniciar sesión para ver su perfil.</p>;
  }

  return (
    <div>
      <h1>Perfil</h1>
      <AppointmentList userType={userType} />
    </div>
  );
};

export default Profile;

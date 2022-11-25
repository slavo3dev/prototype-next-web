import Link from 'next/link';
import LoginForm from '../components/Authentication/LoginForm';
import RegisterForm from '../components/Authentication/RegisterForm';

const Authentication = () => {
  return (
    <>
      <div className='profile-authentication-area'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container'>
              <div className='row'>
                <LoginForm />
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
        <Link className='back-icon' href='/'>
            <i className='bx bx-x'></i>
        </Link>
      </div>
    </>
  );
};

export default Authentication;

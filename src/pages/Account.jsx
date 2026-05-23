import { Navigate, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useAuth } from '../context/AuthContext';
import '../styles.css';
import './Account.css';

export default function Account() {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn || !user) {
    return <Navigate to="/signin" replace />;
  }

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  const displayName = user.email.split('@')[0] || user.email;

  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />
      <main className="account-main">
        <section className="section account-section">
          <Link to="/" className="account-back" aria-label="Back to home">
            <span className="account-back-arrow" aria-hidden="true">
              ←
            </span>
            Back
          </Link>

          <div className="account-card">
            <div className="account-avatar" aria-hidden="true">
              {displayName.slice(0, 1).toUpperCase()}
            </div>
            <h1 className="account-title">Your account</h1>
            <p className="account-greeting">Signed in as {displayName}</p>

            <dl className="account-details">
              <div className="account-detail-row">
                <dt>Email</dt>
                <dd>{user.email}</dd>
              </div>
              <div className="account-detail-row">
                <dt>Status</dt>
                <dd>
                  <span className="account-status">Active</span>
                </dd>
              </div>
            </dl>

            <div className="account-actions">
              <button type="button" className="account-signout" onClick={handleSignOut}>
                Sign out
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

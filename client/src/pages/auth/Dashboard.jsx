import useAuth from '../../hooks/useAuth'
import RdrCard from '../../components/common/RdrCard';
import RdrButton2 from '../../components/common/RdrButton';

const Dashboard = () => {
  // HOOK: CONTEXT FOR AUTH
  const { user, logout } = useAuth();

  // CONDITIONAL LOAD: USER ERROR [POSSIBLY REPLACE WITH LOADING STATE]
  if (!user) {
    return (
      <RdrCard title="Profile" authform>
        <div className="text-center mb-4">
          Cannot Retrieve User
        </div>
      </RdrCard>
    )
  }

  return (
    <RdrCard title="Profile" authform>
      <div className="text-center mb-4">
        <h4>Welcome {user.username}!</h4>
      </div>
      <p><strong>Email: </strong>{user.email}</p>
      { user.isAdmin && <p><strong>Secret: </strong> Hello Admin - nice to see you here</p>}

      {/* Log Out & Forces a Redirect */}
      { user &&
        <div className="mt-5">
          <RdrButton2 onClick={() => { logout() }}>
            Log Out
          </RdrButton2>
        </div>
      }
    </RdrCard>
  )
}

export default Dashboard
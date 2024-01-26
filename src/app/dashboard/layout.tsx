export default function Dashboard({ 
  children, 
  notification, 
  revenuMatrics, 
  userAnalytics,
  login
}: { 
    children: React.ReactNode, 
    notification: React.ReactNode, 
    revenuMatrics: React.ReactNode, 
    userAnalytics: React.ReactNode,
    login: React.ReactNode
  }) {
    const isLogedIn = true;

  return isLogedIn ? (
    <>
        <h1>{children}</h1>
        <div style={
          {
            display: 'flex',
            width: '100%',
            height: '100%',
            border: '1px solid #ccc',
            padding: '1rem',
          }
        }>
          <div>
            <div><h2>{notification}</h2></div>
            <div><h2>{revenuMatrics}</h2></div>
          </div>
          <div><h2>{userAnalytics}</h2></div>
        </div>
    </>
  ) : (<>{login}</>)
}

- Dashboard
  - Add functionality to update form

- Global
  - Add ability to remove connection

Future Features
- Notifications
- Message a Connection
- Delete User Profile
- Add oAuth - Github/ Google

Sign up/ Login Form
 - Sanitize username to Remove case sensitivity

Styling
  - Restyle Landing Title and Navbar
  - Icons? - Do we need a package for icons to render?
  
Revisit 
- Refactor Connect/Dashboard re-render after getPendingRequest update

Possible Refactor
- The list for rendering: connection, pendingConnection and connect users is the same except the buttons
- perhaps I will refactor this as a function to return JSX and map over any buttons passed in.

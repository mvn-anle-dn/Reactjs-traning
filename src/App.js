import './App.css';
import Login from './pages/Login/Login';
import { useEffect , useState } from 'react';
import { supabase } from './hook/supabaseClient';
import Admin from './pages/Admin/Admin';

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="App">
      { !session ? <Login/> : <Admin/> }
    </div>
  );
}

export default App;

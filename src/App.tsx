import './App.css';
import Textarea from './components/Textarea/Textarea';
// import UserBanner from './components/UserBanner/UserBanner';

export default function App() {
  // let userName = 'Igor Klimenka'
  // let userInitials = userName.split(" ").map(item => item.slice(0, 1)).join("")

  return (
    
    <>
      {/* <UserBanner initials={userInitials}  name={userName}></UserBanner> */}
      <Textarea></Textarea>
    </>
  );
}
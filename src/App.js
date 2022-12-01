import { useState } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import Card from './Components/Card';
import Chip from './Components/Chip';
import Dialog from './Components/Dialog';
import Form from './Components/Input';

function App() {
  const [text,setText]=useState('Yes')
  const iconMoney='https://img.icons8.com/ios/512/money-bag.png'
  const iconOffer='https://img.icons8.com/wired/512/barcode.png'
  const iconList='https://img.icons8.com/ios/512/activity-history.png'
  
  return (
    <div>
        <Buttons text={text} setText={setText}/>
        <Form/>
        <Card/>
        <Chip iconMoney={iconMoney} iconOffer={iconOffer} iconList={iconList} />
        <Dialog/>
    </div>
  );
}

export default App;

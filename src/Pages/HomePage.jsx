import React,{useState} from 'react'
import Card from '../Components/Card';
import MainLayout from '../MainLayout/MainLayout';

function HomePage() {
  const [isCardLoaded, setIsCardLoaded] = useState(false);

  return (
    <MainLayout isCardLoaded={isCardLoaded}>
        <Card setIsCardLoaded={setIsCardLoaded}/>
    </MainLayout>
  )
}

export default HomePage
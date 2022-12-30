import Headers from './Components/Headers/Headers';
import LeftSide from './Components/leftSide/LeftSide';
import Main from './Components/MainMedile/Main';
import RightSide from './Components/RightSide/RightSide';



function App() {
  return (
    <div className="bg-[#EEEAFB] font-Poppins">
      <Headers></Headers>
      <main className='container mx-auto'>

        <div className=' flex gap-[2%] my-3 '>
          <LeftSide></LeftSide>
          <Main></Main>
          <RightSide></RightSide>
        </div>
      </main>
    </div>
  );
}

export default App;

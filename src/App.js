import './App.css';
// import './components/PersonCard'; /*do we need this? */
import PersonCard from './components/PersonCard';

function App(props) {
  return (
    <div className='App'>
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Gray"}
        />
      <PersonCard
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
        />
</div>
  );
}

export default App;


import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
function App() {
  return (
    <div className="App clear">
      
      <Drawer/>

      <Header/>
      <div className="content">
        <div className="h1-search">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search-block.svg" alt="" />
            <input placeholder="Поиск..." type="text" />
          </div>  
        </div>
        <div className="sneackers">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        ...
      </div>
    </div>
  );
}

export default App;

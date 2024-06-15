import ReactDOM from 'react-dom/client'
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import store
import {store} from "./redux/store";
import {Provider} from "react-redux";
// 
import { createBrowserHistory } from 'history';
export const navigateHistory = createBrowserHistory();
import  {unstable_HistoryRouter as HistoryRouter, Routes, Route} from "react-router-dom";
import HeaderHome from './template/HeaderHome';
import Home from './page/Home';
import TableStore from './page/CRUD_redux/TableStore';
// 




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HistoryRouter history={navigateHistory}>
      <Routes>
        <Route path="" element={<HeaderHome></HeaderHome>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='store_redux' element={<TableStore></TableStore>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
)

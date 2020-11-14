import React from "react";
import { HashRouter, Route } from "react-router-dom";
import anotherPage from "./routes/anotherPage";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/anotherPage" component={anotherPage}></Route>
      <Route path="/movieDetails" component={MovieDetails}></Route>
      <Route path="/" exact={true} component={Home}></Route>
    </HashRouter>
  );
}
// 책을 만들고(router) 그 아래 페이지(route)를 붙임
//router는 모든 해당하는 요소들을 가져옴. A/B하면 A라는 스크린과 A/B라는
//화면을 둘다 가져와서 표현함. 이를 막기위해 exact라는 attr사용해야 함

//모든 route들은 이동하면서 디폴트로 props를 해당 컴포넌트에 전달한다. 이를 활용하면
//컴포넌트간에 state를 주고받을 수 있다.

//movieDetails는 Home에서 Link를 통해 이동하게 됨
export default App;

import React, { Component } from "react";

// 함수형 컴포넌트로 받으면 컴포넌트간 Link를 이용해 이동시 props가
// 전달되어 화면에 잘 표시되지만, 바로 url에 찍어서 router가 동작할 경우
// props가 전달되지 않아 에러가 난다. 이를 막기 위해 클래스 컴포넌트 사용
// const MovieDetails = (props) => {
//   console.log(props.location.state);
//   const { title, summary } = props.location.state;
//   return (
//     <>
//       <h1>{title}</h1>
//       <h4>{summary}</h4>
//     </>
//   );
// };

class MovieDetails extends Component {
  //url에 직접 MovieDetail을 입력했을 때 홈페이지로 이동하도록 리다이렉트 시켜주기
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //리다이렉트 시켜주는 함수
    }
  }
  render() {
    const { location } = this.props;
    // 처음에 렌더링 된 후, url(MovieDeatil)을 브라우저에서 바로 다시 실행하면 앞서 불려왔던
    // location은 값이 더이상 없으므로 렌더할 때 실행되지 않는다. 이때는 다시 리다이렉트 되도록
    // null값을 넣어줘야 한다.
    if (location.state) {
      return (
        <>
          <h1>{location.state.title}</h1>
          <h4>{location.state.summary}</h4>
        </>
      );
    } else {
      return null; //null을 해줘야 이후 DidMount에서 없다는 걸 확인하고 리다이렉트 시켜 줌
    }
  }
}

export default MovieDetails;

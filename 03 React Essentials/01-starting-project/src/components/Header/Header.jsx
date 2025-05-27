// 이미지 파일을 사용하는 경우 import하여 사용하는 것을 권장
import reactImg from "../../assets/react-core-concepts.png";
import "./header.css";

//reactDescriptions 배열에서 랜덤으로 하나의 단어를 선택하기 위한 준비
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

//genRandomInt(2)`는 0, 1, 2 중 무작위 정수 반환
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

//Header 컴포넌트 내 동적 표현 적용
export default function Header() {
  // 변수로 활용 description으로 지정하여 return값에 사용한다. javascript 표현은 코드 밖으로 옮기면 jsx코드가 조금 깔끔해 질 수 있다.
  const descriptions = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="..." /> */}
      {/* src속성에 경로 직접 입력은 비추천 배포 시 이미지가 사라질 수 있으며, 최적화에 불리함 */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/*reactDescriptions[genRandomInt(2)]}*/}
        {/* 대신 import 문으로 이미지 파일을 JS 변수로 불러오고, JSX에서 중괄호 문법으로 참조함 */}
        {/* 이 방식은 빌드 도구가 이미지 파일까지 자동으로 번들링해 배포에 적합 */}
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

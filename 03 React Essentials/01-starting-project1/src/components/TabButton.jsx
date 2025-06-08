/* 컴포넌트 사이에 text는 props.children받을수있다. */
export default function TabButton({ children, isSelected, ...props }) {
  //({children})가능 컴포넌트 속성인 label로 넘기면 ({label}) 가능
  return (
    <li>
      {/* props의 내장객체인 children 컴포넌트 태그 사이에 text를 받아옴 */}
      {/* 이벤트 처리 onClick 버튼 클릭시 이벤트 발생 handleClick 함수 호출 */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

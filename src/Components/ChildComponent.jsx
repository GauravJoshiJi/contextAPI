import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => (
  <div
    style={{
      width: "200px",
      border: `10px solid black`,
      margin: "15px",
      padding: "10px",
    }}
  >
    <GrandChildComponent color={props.color} />
  </div>
);

export default ChildComponent;

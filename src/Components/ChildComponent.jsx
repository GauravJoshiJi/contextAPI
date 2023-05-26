import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => (
  <div
    style={{
      width: "200px",
      border: `5px solid black`,
      margin: "15px",
      padding: "10px",
    }}
  >
    <GrandChildComponent />
  </div>
);

export default ChildComponent;

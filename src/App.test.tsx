import { create } from "react-test-renderer";
import { Status } from "./components/Profile/ProfileInfo/Status/Status";

let component: any;
beforeEach(() => {
  component = create(<Status statusText="test status" setStatus={() => {}} />);
});

describe("Status component", () => {
  test("status from props shoult be equal state status", () => {
    expect(component.root.findByType("span")).not.toBeNull();
  });

  test("span should be visible after render", () => {
    expect(() => component.root.findByType("input")).toThrow();
  });

  test("span should be corrent", () => {
    expect(component.root.findByType("span").children[0]).toBe("test status");
  });

  test("editMode should be corrent", () => {
    const span = component.root.findByType("span");
    span.props.onDoubleClick();
    const input = component.root.findByType("input");
    expect(input.props.value).toBe("test status");
  });
});

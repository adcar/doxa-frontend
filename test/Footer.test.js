import { createShallow } from "@material-ui/core/test-utils";
import Footer from "../src/components/Footer";

describe("<Footer />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should render a <footer />", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("footer")).toHaveLength(1);
  });
});

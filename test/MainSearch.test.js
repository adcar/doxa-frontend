import { createShallow, createMount } from "@material-ui/core/test-utils";
import MainSearch from "../src/components/MainSearch";
import { withRouter } from "next/router";
const Search = withRouter(MainSearch);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe("<MainSearch />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should render a <form />", () => {
    const wrapper = shallow(<MainSearch />);
    expect(wrapper.find("form")).toHaveLength(1);
  });
  it("should render two <input />s", () => {
    const wrapper = shallow(<MainSearch />);
    expect(wrapper.find("input")).toHaveLength(2);
  });
});

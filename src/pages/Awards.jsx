import React, { Component } from "react";
import { withRouter } from "../hooks/withRouter";

class Awards extends Component {
  constructor(props) {
    super(props);
    this.sectionRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { router } = this.props;
    const { location } = router;

    if (prevProps.router !== router && location.pathname === "/awards") {
      this.sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    return (
      <div
        ref={this.sectionRef}
        id="awards"
        className="bg-indigo-100 h-screen snap-center flex flex-col gap-4 justify-center p-10"
      >
        {/* Content for section 2 */}
        <h1 className="font-bold text-3xl uppercase text-indigo-700">Awards</h1>
        <p className="text-indigo-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    );
  }
}

export default withRouter(Awards);

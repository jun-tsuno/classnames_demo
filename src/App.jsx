import Button from "./components/Button";

const App = () => {
	return (
		<div className="flex flex-col gap-2 my-4">
			<Button onClick={() => console.log("clicked")}>Click Here!</Button>
			<Button primary rounded outline>
				Click Here!
			</Button>
			<Button secondary outline>
				Click Here!
			</Button>
			<Button success>Click Here!</Button>
			<Button warning>Click Here!</Button>
		</div>
	);
};

export default App;

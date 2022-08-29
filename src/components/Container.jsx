const Container = (props) => {
	return (
		<div className="container  mx-auto flex flex-col items-center justify-center ">
			{props.children}
		</div>
	);
};

export default Container;

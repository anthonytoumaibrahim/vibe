interface HelloWorldProps {
  name: string;
  colored: boolean;
}

const HelloWorld = ({ name, colored = true }: HelloWorldProps) => {
  return (
    <div style={{ color: colored ? "red" : undefined }}>Hello {name}!</div>
  );
};

export default HelloWorld;

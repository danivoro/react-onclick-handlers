function TestButton(): JSX.Element {
  return <button onClick={() => window.alert('Hello World!')}>
    Make me do something when I'm clicked...</button>;
}

export default TestButton;

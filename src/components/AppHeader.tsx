interface AppHeaderProps {
  title: string;
}

function titleToUpperCase(title: string){
  console.log(title.toUpperCase())
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return <h1 onClick={ () => titleToUpperCase(title) }>{title}</h1>;
}

export default AppHeader;

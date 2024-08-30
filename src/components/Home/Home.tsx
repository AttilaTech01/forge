export interface HomeProps {
  test: string;
}

function Home({ test }: HomeProps) {
  return <div>This is my Home {test}</div>;
}

export default Home;

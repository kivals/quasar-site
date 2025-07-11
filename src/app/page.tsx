import { Header } from "./_components/header";
import { Services } from "./_components/services";
import { Title } from "./_components/title";
import { Trusted } from "./_components/trusted";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Title />

        <Trusted />

        <Services />
      </main>
    </div>
  );
}


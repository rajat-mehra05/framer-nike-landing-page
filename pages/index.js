import Header from "../src/components/Header";
import ImageLayer from "../src/components/ImageLayer";
import TextLayer from "../src/components/TextLayer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TextLayer />
        <ImageLayer />
      </main>
    </div>
  );
}

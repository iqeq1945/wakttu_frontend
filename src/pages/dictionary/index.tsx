import Header from "@/containers/common/Header";
import MainSection from "@/components/dictionary/MainSection";
import WordSection from "@/components/dictionary/WordSection";
import { WordProps } from "@/components/dictionary/Word";
import { Container } from "@/components/dictionary/Container";

const Dictionary = () => {
  const todayWord: WordProps = {
    relevantPersonArray: ["woowakgood"],
    tagArray: ["아이네", "어록"],
    word: "이세계",
    description: "현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말 현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말 현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말 현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말"
  }

  return (
    <Container>
      <Header />
      <MainSection />
      <WordSection {...todayWord} />
    </Container>
  );
};

export default Dictionary;

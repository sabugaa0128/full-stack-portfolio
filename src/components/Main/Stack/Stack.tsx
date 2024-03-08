import {
  StackSection,
  Wrapper,
} from "@/components/Main/Stack/Stack.style";
import AccordionFull from "@/components/Main/Stack/AccordionFull";
import {ITechItem} from "@/types/types";
import SectionHeader from "@/components/SectionHeader";


export const Stack = ({
  stackType,
  techList,
}: {
  stackType: string;
  techList: ITechItem[];
}) => {
  return (
    <StackSection>
      <Wrapper>
        <SectionHeader word={stackType}/>
        <AccordionFull techList={techList} />
      </Wrapper>
    </StackSection>
  );
};

export default Stack;

import './Seasons.scss'
import AccordionGroup from "@/components/AccordionGroup";
import seasonsItems from "@/components/Seasons/seasonsItems";
import Accordion from "@/components/Accordion";

const Seasons = () => {

  return (
    <AccordionGroup
      mode='dark'
      isOrderedList={false}
    >
      {seasonsItems.map(({title, subTitle, episodes}, index) => (
        <Accordion
          title={title}
          titleLevelClassName='h4'
          subtitle={subTitle}
          id={`season-${index}`}
          name='seasons'
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, error?
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
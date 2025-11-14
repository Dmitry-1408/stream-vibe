import './Collections.scss'
import classNames from 'classnames'
import Tabs from "@/components/Tabs";
import collectionGroups from "@/sections/Collections/collectionGroups";
import getIdFromTitle from "@/utils/getidFromTitle";
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/CategoryCard";

const Collections = () => {

  return (
    <Tabs
      className='collections container'
      title='collections'
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroup) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className='collections__group'>
            <p className='collections__title hidden-mobile'>
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((collectionItem, index) => {
              const {
                title,
                categoryItems,
                sliderParams,
              } = collectionItem

              const titleFormated = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleFormated}-title`
              const sliderNavigationId = `${titleFormated}-slider-navigation`

              return (
                <Section
                  className='collections__section'
                  title={title}
                  titleId={titleId}
                  actions={(
                    <SliderNavigation
                      id={sliderNavigationId}
                      mode='tile'
                    />
                  )}
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementTd={sliderNavigationId}
                    isBeyondTheViewportOnMobileS
                  >
                    {categoryItems.map((categoryItem, index) => (
                      <CategoryCard
                        {...categoryItem}
                        key={index}
                      />
                    ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        )
      }))}
    />
  )
}

export default Collections
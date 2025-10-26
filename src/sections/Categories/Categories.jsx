import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";

const Categories = () => {

  return (<Section
    title='Explore our wide variety of categories'
    tittleId='categories-title'
    description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
    actions={(<div>
      <button
        type='button'
      >
        назад
      </button>
      <button
        type='button'
      >
        вперед
      </button>
    </div>)}
    isActionsHiddenOnMobile
  >
    CATIGORIES
  </Section>)
}

export default Categories
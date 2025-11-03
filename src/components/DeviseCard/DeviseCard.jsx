import './DeviseCard.scss'

const DeviseCard = (props) => {
  const {
    className,
    title,
    description,
    imgSrc,
  } = props
  return (
    <div
      className='devise-card'
    >
      <header className='devise-card__header'>
        <div className='devise-card__image-wrapper'>
          <img
            class='devise-card__image'
            src={imgSrc}
            alt=''
            width={40}
            height={40}
            loading='lazy'
          />
        </div>
        <h3 className='devise-card__title h4'>{title}</h3>
      </header>
      <div className='devise-card__description'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DeviseCard
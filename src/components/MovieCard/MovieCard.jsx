import './MovieCard.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Badge from "@/components/Badge";

const MovieCard = (props) => {
  const {
    className,
    title,
    imgSrc,
    duration,
    views,
    href = '/move',
  } = props

  return (
    <a
      className={classNames(className, 'movie-card')}
      href={href}
      title={title}
    >
      <h3 className='visually-hidden'>{title}</h3>
      <Image
        className='movie-card__image'
        src={imgSrc}
      />
      <div className='movie-card__body'>
        {duration && (
          <Badge
          iconName='clock'
          iconAriaLabel='Duration'
          hasFillIcon
          >
            {duration}
          </Badge>
        )}
        {duration && (
          <Badge
            iconName='eve'
            iconAriaLabel='Views'
            hasFillIcon
          >
            {views}
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard
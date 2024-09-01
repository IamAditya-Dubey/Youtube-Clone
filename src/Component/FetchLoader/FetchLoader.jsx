import css from "./FetchLoader.module.css"

function FetchLoader() {
  return (
    <div className={css.loader}>
        <div className={`${css.slide} ${css.slide1}`}></div>
        <div className={`${css.slide} ${css.slide2}`}></div>
        <div className={`${css.slide} ${css.slide3}`}></div>
        <div className={`${css.slide} ${css.slide4}`}></div>
    </div>
  )
}

export default FetchLoader;
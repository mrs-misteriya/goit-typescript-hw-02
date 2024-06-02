import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtn{
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }:LoadMoreBtn) {
  return (
    <div className={css.loadBtn}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

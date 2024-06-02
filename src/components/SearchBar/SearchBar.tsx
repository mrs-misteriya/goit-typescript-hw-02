import { toast } from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FormEvent } from 'react';

interface Search{ 
  onSubmit: (newQuery: string)=>void;
}
export default function Search({ onSubmit }:Search) {
  const handleSubmit = (event: FormEvent <HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
    const query = (form.elements.namedItem("query") as HTMLInputElement).value;
    if (query.trim() === "") {
      return toast.error("This field can't be empty!");
    }
    onSubmit(query.trim());
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <ErrorMessage />
    </header>
  );
}

// import React from "react";
import css from "./Loader.module.css";
// import { RotatingLines } from "react-loader-spinner";

// interface Props {
//   isLoading?: boolean;
// }


// const Loader: React.FC<Props> =({isLoading=true})=> {
//   return (
//       <div className={css.loader}>
//         <RotatingLines
//         visible={isLoading}
//         height="60"
//         width="60"
//         color="#1B5299"
//         strokeWidth="5"
//         animationDuration="0.75"
//         ariaLabel="rotating-lines-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//         />
//       </div>
//     )
// }

// export default Loader;

export default function () {
  return (<>
    <b>Loading...</b>
  </>)
 }


import React, {useState} from "react";
import s from "../../Components/Users/Users.module.css";

const Paginator = (props) => {

    let pages = [];
    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize);

    for (let i = 1; i < pageCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let [portionCountNumber, setPortionCountNumber] = useState(Math.ceil((props.currentPage)/portionSize));

    let portionCount = Math.ceil(pageCount / portionSize);
    let leftPortionNumber = (portionCountNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionCountNumber * portionSize;

    return <div>
        {portionCountNumber > 1 &&
        <button onClick={() => setPortionCountNumber(portionCountNumber - 1)}>&#8592;</button>}
        {
            pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => props.onPageChanged(p)}> {p} </span>
                })
        }
        {portionCountNumber < portionCount &&
        <button onClick={() => setPortionCountNumber(portionCountNumber + 1)}>&#8594;</button>}

    </div>
}

export default Paginator;
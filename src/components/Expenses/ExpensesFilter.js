import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    // const viewAllHandler = () => {
    //     props.onViewAll();
    // };
    
    return (
        <div className="expenses-filter">
            <div className="filter-label">
                <label>Filter By Year</label>
            </div>
            <div className="expenses-filter__control">
                {/* <div className="view-all">
                    <button onClick={viewAllHandler}>View All</button>
                </div> */}
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="all">View All</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;

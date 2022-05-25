import React, {useState, useEffect} from 'react'
import TodoItem from './TodoItem'

const PaginateList = (props) => {

    const [displayedItems, setDisplayedItems] = useState([])
    
    const [currentPage, setCurrentPage] = useState(props.initialPage)
    
    useEffect(() => {
        const startingIndex = ( currentPage - 1 ) * props.itemPerPage
        const endIndex = startingIndex + props.itemPerPage
        const newDisplayedItems = props.items.filter( (item, index) => ( index >= startingIndex && index < endIndex ) )
        setDisplayedItems(newDisplayedItems)
    }, [currentPage, props.itemPerPage, props.items])

    const totalPage = Math.ceil(props.items.length / props.itemPerPage)

    const goToPrev = () => {
        if( currentPage > 1 ){
            setCurrentPage( prev => prev - 1 )
        }
    }

    const goToNext = () => {
        if( currentPage < totalPage ){
            setCurrentPage( prev => prev + 1 )
        }
    }

  return (
    <>
        <ul className="list-group list-group-flush">
        {displayedItems.map(item => (
            <TodoItem item={item} />
        ))}
        </ul>
        { ( totalPage > 0 ) && 
        <div className="page-controller">
            <button className="page-btn" onClick={goToPrev}>Prev</button>
            page {currentPage} of {totalPage}
            <button className="page-btn" onClick={goToNext}>Next</button>
        </div> }
    </>
  )
}

export default PaginateList
import './ProgressBar.css'
export const ProgressBar = (props) => {
    const getBarHeight = () => {
        return `${80*(props.value/100)}px`;
    }
    const getBarTop = () => {
        return `${(80-80*(props.value/100))/2}px`
    }
    //  const message = [{id: 1, name: "Привет"}, {id: 3, name: "Дамир"}, {id: 7, name: "Коля"}];
    //  const listItems = message.map(n => <li key={n.id}>{n.name}</li>) 
    return(
        <div className='wrapper'>
            {/* <ul>{listItems}</ul> */}
            {/* {message.length > 0 && <h2>{message}</h2>} */}
           <p>{props.value}%</p>
           <div className='bar' style={{height: getBarHeight(), top: getBarTop()}}></div> 
           <p style={{top: `${(80-80*(props.value/100))}px`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vero voluptates hic delectus iste dolores unde voluptatum. Inventore quis, soluta sit vel incidunt iste eveniet sunt saepe nisi fuga aut!</p>
        </div>
    )
}
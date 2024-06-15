export function Filter_by(props) {
    let sortedTaskArr = [...props.taskArr]
    if (props.sort === 'Sort By') {
        return (
            <ul>
                {props.taskArr.map((element, index) => (
                    <li key={index}>
                        <input onChange={(event) => { props.handleMark(event, element, index) }} type="checkbox" name="check" checked={element.marked ? true : false} />
                        {element.item}
                        <button onClick={() => { props.deleteItems(index) }}>delete</button>
                    </li>
                ))}
            </ul>
        )
    }
    else if (props.sort === 'newest to oldest') {
        sortedTaskArr.sort((b, a) => new Date(a.date) - new Date(b.date))
        return (
            <ul>
                {sortedTaskArr.map((element, index) => (
                    <li key={index}>
                        {element.item}
                    </li>
                ))}
            </ul>
        )
    }
    else {
        sortedTaskArr.sort((a, b) => new Date(a.date) - new Date(b.date))
        return (
            <ul>
                {sortedTaskArr.map((element, index) => (
                    <li key={index}>
                        {element.item}
                    </li>
                ))}
            </ul>
        )
    }
}

export function Marked(props) {
    const markedArr = props.taskArr.filter((element, index) => {
        return element.marked === true
    })
    let sortedMarkedArr = [...markedArr]
    if (props.sort === "Sort By") {
        return (
            <ul>
                {markedArr.map((element, index) => (
                    <li key={index}>
                        {element.item}
                    </li>
                ))}
            </ul>
        )
    }
    else if (props.sort === "newest to oldest") {
        sortedMarkedArr.sort((b, a) => new Date(a.date) - new Date(b.date))
        return (
            <ul>
                {sortedMarkedArr.map((element, index) => (
                    <li key={index}>
                        {element.item}
                    </li>
                ))}
            </ul>
        )
    }
    else {
        sortedMarkedArr.sort((a, b) => new Date(a.date) - new Date(b.date))
        return (
            <ul>
                {sortedMarkedArr.map((element, index) => (
                    <li key={index}>
                        {element.item}
                    </li>
                ))}
            </ul>
        )
    }
}

export function Unmarked(props) {
    const unMarkedArr = props.taskArr.filter((element, index) => {
        return element.marked === false
    })
    let sortedUnMarkedArr = [...unMarkedArr]
    if (props.sort === "Sort By") {
        return (
            <ul>
                {unMarkedArr.map((element, index) => (
                    <li key={index}>
                        {element.item}
                    </li>
                ))}
            </ul>
        )
    }
    else if (props.sort === "newest to oldest") {
        sortedUnMarkedArr.sort((b, a) => new Date(a.date) - new Date(b.date))
        return (
            <ul>
                {sortedUnMarkedArr.map((element, index) => (
                    <li key={index}>
                        {element.item}
                    </li>
                ))}
            </ul>
        )
    }
    else {
        sortedUnMarkedArr.sort((a, b) => new Date(a.date) - new Date(b.date))
        return (
            <ul>
                {sortedUnMarkedArr.map((element, index) => (
                    <li key={index}>
                        {element.item}
                    </li>
                ))}
            </ul>
        )
    }
}
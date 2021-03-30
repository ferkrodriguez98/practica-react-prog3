function DataCard(props) {
    return(
        <div class="shadow h-100 py-2">
            <div class="card-body">
                <div class="text-center">
                    <img src={props.charactersData.image} alt={props.charactersData.name}></img>
                </div>
                <div class="text-center py-3">
                    <p class="text-info h4">{props.charactersData.name}</p>
                    <p class="h6"> {props.charactersData.status} - {props.charactersData.species}</p>
                    <p class=""> Origin: {props.charactersData.origin.name}</p>
                </div>
            </div>
        </div>
    )
}

export default DataCard
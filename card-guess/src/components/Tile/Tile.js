import React from 'react'
import "./tile.css"

const Tile = props =>(
	<div className="card">
		<div className='img-container'>
		<img onClick={() => props.handleTileClick(props.name)} className= 'tile' alt={props.name} src={props.image} />
		</div>
	</div>
)

export default Tile
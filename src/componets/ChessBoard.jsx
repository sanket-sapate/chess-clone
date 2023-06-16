import React from 'react'
import './ChessBoard.css'
import { knight_b,king_b,rook_b,queen_b,pawn_b,bishop_b,knight_w,king_w,queen_w,rook_w,pawn_w,bishop_w } from "../assests/piece_img";
import Square from './Square'
const vertical = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const horizontal = [1, 2, 3, 4, 5, 6, 7, 8]

const pieces = []
pieces.push({img:rook_b,x:0,y:0})
pieces.push({img:knight_b,x:1,y:0})
pieces.push({img:bishop_b,x:2,y:0})
pieces.push({img:queen_b,x:3,y:0})
pieces.push({img:king_b,x:4,y:0})
pieces.push({img:bishop_b,x:5,y:0})
pieces.push({img:knight_b,x:6,y:0})
pieces.push({img:rook_b,x:7,y:0})
for (let i = 0; i < 8; i++) {
    pieces.push({img:pawn_b,x:i,y:1})
}
for (let i = 0; i < 8; i++) {
    pieces.push({img:pawn_w,x:i,y:6})
}
pieces.push({img:rook_w,x:0,y:7})
pieces.push({img:knight_w,x:1,y:7})
pieces.push({img:bishop_w,x:2,y:7})
pieces.push({img:queen_w,x:3,y:7})
pieces.push({img:king_w,x:4,y:7})
pieces.push({img:bishop_w,x:5,y:7})
pieces.push({img:knight_w,x:6,y:7})
pieces.push({img:rook_w,x:7,y:7})

function ChessBoard() {
    const squares = []
    let active_piece = undefined
    function grab(e) {
        const element = e.target 
        if (element.classList.contains('piece')) {
            const x = e.clientX
            const y = e.clientY
            element.style.position = 'absolute'
            element.style.top = `calc(${y}px - 5vh)`
            element.style.left = `calc(${x}px - 5vh)`
            active_piece = element
        }
    }
    function move(e) {
        if (active_piece === undefined)
            return
        const x = e.clientX
        const y = e.clientY
        active_piece.style.top = `calc(${y}px - 5vh)`
        active_piece.style.left = `calc(${x}px - 5vh)`
    }
    function drop(e) {
        active_piece = undefined
    }
    

    for (let i = 0; i < vertical.length; i++) {
        for (let j = 0; j < horizontal.length; j++) {
            let image = null
            let piece = pieces.find(p => p.x === j && p.y === i)
            if (piece) 
                image = piece.img
            squares.push(<Square number={(i+j)%2} image={image} key={vertical[i]+horizontal[j]} />)
        }
    }
    return (<div onMouseMove={move} onMouseUp={drop} onMouseDown={(e)=>grab(e)} id='chessboard'>{squares}</div>)
}

export default ChessBoard
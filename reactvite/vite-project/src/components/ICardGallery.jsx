import React from 'react'
import ICard from './ICard'

function ICardGallery() {
    const students = [
        {
            college: "ABES Engineering College",
            roll: "2400320100888",
            name: "Rameshwar Tripathi",
            branch: "CSE",
            section: "24",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10"
        },
        {
            college: "IMS College",
            roll: "1234567890",
            name: "Raj shahi",
            branch: "ECE",
            section: "12",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10"
        },
        {
            college: "ITS College",
            roll: "9876543210",
            name: "Johny",
            branch: "ME",
            section: "34",
            pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10"
        }
    ];

  return (
    <div>
        {/* <ICard college="ABES Engineering College" roll="2400320100888" name="Rameshwar Tripathi" branch="CSE" section="24" pic ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10" />
        <ICard college="IMS College" roll="1234567890" name="Raj shahi" branch="ECE" section="12" pic ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10" />
        <ICard college="ITS College" roll="9876543210" name="Johny" branch="ME" section="34" pic ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10" /> */}
        <ICard data = {students[0]}/>
        <ICard data = {students[1]}/>
        <ICard data = {students[2]}/>
    </div>
  )
}

export default ICardGallery

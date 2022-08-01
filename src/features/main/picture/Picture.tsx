import React from 'react'
import css from './Picture.module.scss'
import Stars from '../../../assets/Stars.svg'
import Plane from '../../../assets/space/Plane.svg'
import Elephant from '../../../assets/space/Elephant.svg'
import Clock from '../../../assets/space/Clock.svg'
import Bulb from '../../../assets/space/Bulb.svg'
import Planet1 from '../../../assets/space/Planet1.svg'
import Planet2 from '../../../assets/space/Planet2.svg'
import Planet3 from '../../../assets/space/Planet3.svg'
import Atom from '../../../assets/space/Atom.svg'
import Segmentation from '../../../assets/space/Segmentation.svg'
import Plus from '../../../assets/space/Plus.svg'
import Palette from '../../../assets/space/Palette.svg'
import Rocket from '../../../assets/space/Rocket.svg'
import Balloon from '../../../assets/space/Balloon.svg'
import Group1 from '../../../assets/girl/Group1.svg'
import Group2 from '../../../assets/girl/Group2.svg'
import Group3 from '../../../assets/girl/Group3.svg'
import Group4 from '../../../assets/girl/Group4.svg'
import Group5 from '../../../assets/girl/Group5.svg'
import Group6 from '../../../assets/girl/Group6.svg'
import Group7 from '../../../assets/girl/Group7.svg'
import Group8 from '../../../assets/girl/Group8.svg'
import Group9 from '../../../assets/girl/Group9.svg'
import Hand from '../../../assets/girl/Hand.svg'
import List from '../../../assets/girl/List.svg'
import Pen from '../../../assets/girl/Pen.svg'
import PaperPlanes from '../../../assets/PaperPlanes.svg'

const Picture = () => {
    return (
        <div className={css.picture}>
            <div className={css.picture__space}>
                <img className={css.picture__spaceStars} src={Stars} alt="" />
                <img className={css.picture__spacePlane} src={Plane} alt="" />
                <img className={css.picture__spaceElephant} src={Elephant} alt="" />
                <img className={css.picture__spaceClock} src={Clock} alt="" />
                <img className={css.picture__spaceBulb} src={Bulb} alt="" />
                <img className={css.picture__spacePlanet1} src={Planet1} alt="" />
                <img className={css.picture__spacePlanet2} src={Planet2} alt="" />
                <img className={css.picture__spacePlanet3} src={Planet3} alt="" />
                <img className={css.picture__spaceAtom} src={Atom} alt="" />
                <p className={css.picture__spaceZero}>0</p>
                <p className={css.picture__spaceOne}>1</p>
                <img className={css.picture__spaceSegmentation} src={Segmentation} alt="" />
                <img className={css.picture__spacePlus} src={Plus} alt="" />
                <img className={css.picture__spacePalette} src={Palette} alt="" />
                <img className={css.picture__spaceRocket} src={Rocket} alt="" />
                <img className={css.picture__spaceBalloon} src={Balloon} alt="" />
            </div>
            <div className={css.picture__girl}>
                <img className={css.picture__girlGroup1} src={Group1} alt="" />
                <img className={css.picture__girlGroup2} src={Group2} alt="" />
                <img className={css.picture__girlGroup3} src={Group3} alt="" />
                <img className={css.picture__girlGroup4} src={Group4} alt="" />
                <img className={css.picture__girlGroup5} src={Group5} alt="" />
                <img className={css.picture__girlGroup6} src={Group6} alt="" />
                <img className={css.picture__girlGroup7} src={Group7} alt="" />
                <img className={css.picture__girlGroup8} src={Group8} alt="" />
                <img className={css.picture__girlGroup9} src={Group9} alt="" />
                <img className={css.picture__girlHand} src={Hand} alt="" />
                <img className={css.picture__girlList} src={List} alt="" />
                <img className={css.picture__girlPen} src={Pen} alt="" />
                <img className={css.picture__girlPaperPlanes} src={PaperPlanes} alt="" />
            </div>
        </div>
    )
}

export default Picture
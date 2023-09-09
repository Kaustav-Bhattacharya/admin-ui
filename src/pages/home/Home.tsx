import { Chartbox } from "../../components/chartbox/Chartbox"
import { TopBox } from "../../components/topBox/TopBox"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="box topDeals">
        <TopBox />
      </div>
      <div className="box box2">
        <Chartbox />
      </div>
      <div className="box box3">
        <Chartbox />
      </div>
      <div className="box box4">
        <Chartbox />
      </div>
      <div className="box box5">
        <Chartbox />
      </div>
      <div className="box box6">BOX 6</div>
      <div className="box box7">BOX 7</div>
      <div className="box box8">BOX 8</div>
      <div className="box box9">BOX 9</div>
    </div>
  )
}

export { Home }

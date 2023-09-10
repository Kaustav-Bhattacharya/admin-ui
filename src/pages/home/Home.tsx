import { BarChartBox } from "../../components/barChartBox/BarChartBox"
import { Chartbox } from "../../components/chartbox/Chartbox"
import { TopBox } from "../../components/topBox/TopBox"
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="box topDeals">
        <TopBox />
      </div>
      <div className="box box2">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chartbox {...chartBoxProduct} />
      </div>
      <div className="box box4">BOX 4</div>
      <div className="box box5">
        <Chartbox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="box box7">BOX 7</div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit}/>
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue}/>
      </div>
    </div>
  )
}

export { Home }

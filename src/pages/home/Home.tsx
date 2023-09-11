import { BarChartBox } from "../../components/barChartBox/BarChartBox"
import { BigChartsBox } from "../../components/bigChartsBox/BigChartsBox"
import { Chartbox } from "../../components/chartbox/Chartbox"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
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
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <Chartbox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartsBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  )
}

export { Home }

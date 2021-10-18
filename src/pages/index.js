import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle = "Olivia Sample Page">
      <div>
        <p class="title">Carol E. Cross</p>
        <p class="date">September 23, 1943-November 7, 2020</p>
        <p>
            <StaticImage
              alt = "TBD"
              src = "../images/olivia.jpg"
            />
        </p>
        <p class="patter">Carol passed away peacefully at Abbott Northwestern Hospital on November 7, 2020. She was preceded in death by her parents and two brothers.
              She was survived by her husband, Alan; son, Tom (Erica) Cross; sister Betty (Arnold) Wells; as well as many nieces and nephews.</p>

        <p class="patter">Carol was born September 23, 1943 in Grantsburg, Wisconsin. After graduating high school there in 1961, she moved to the Twin Cities, where she spent the rest of her life.
            Carol was a wonderful wife and companion. She loved her family, friends and all dogs, as well as her gardens, travel, sports and movies. 
            Carol had a friendly, gentle personality, and always stayed cheerful and positive even when dealing with adversity. She will be greatly missed by all who knew her.</p> 
      </div>

      <ul>  
        <li> 
          <StaticImage
            alt = "TBD"
            src = "../images/20180711_121150.jpg"
          />
        </li>
        <li>
          <StaticImage
            alt = "TBD"
            src = "../images/20180711_123838.jpg"
          />
        </li>
        <li>
          <StaticImage
            alt = "TBD"
            src = "../images/IMG_6191.jpg"
          />
        </li>
        <li>
          <StaticImage
            alt = "TBD"
            src = "../images/20180711_123845.jpg"
          />          
        </li>
        <li></li>
        </ul>

        <div class="bottomBox">
            <p class="patterBottom"><a href="https://photos.app.goo.gl/zjYETj5EuYuZMGyr5">Link to Carol's album on Google Photos</a></p>
        </div>
    </Layout>
  )
}

export default IndexPage

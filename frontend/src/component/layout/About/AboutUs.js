import React from "react";
import "./aboutSection.css";
// import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
            <div class="responsive-container-block leftSide">
                <p class="text-blk heading">
                    Meet Our Creative Team
                </p>
                <p class="text-blk subHeading">
                    <b>" Our Priority is Customer Satisfaction "  
                    &emsp;&emsp;&emsp;&emsp;- RRocks Thread and Jari Group</b>
                </p>
            </div>
            <div class="responsive-container-block rightSide">
            <img class="number1img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"/>
            <img class="number2img" src="https://res.cloudinary.com/decygddlu/image/upload/v1680011059/samples/ecommerce/IMG_8494_uk1epq.jpg"/>
            <img class="number3img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"/>
            <img class="number5img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"/>
            <img allowfullscreen="allowfullscreen" class="number4vid" src="https://res.cloudinary.com/decygddlu/image/upload/v1680011763/samples/ecommerce/3_y3keit.webp"/>
            <img class="number7img" src="https://res.cloudinary.com/decygddlu/image/upload/v1680011336/samples/ecommerce/1_z6jqcr.jpg"/>
            <img class="number6img" src="https://res.cloudinary.com/decygddlu/image/upload/v1680011121/samples/ecommerce/IMG_8501_gwqwnn.jpg"/>
            </div>
        </div>
    </div>

  );
};

export default About;

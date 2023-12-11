import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css"
import WorkIcon from "@mui/icons-material/Work"

function Experience(){
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeloine-element--education"
                date="2012"
                iconStyle={{background: "#3e497a",color:"#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bharatiya Vidya Bhavan's Lloyds Vidya Niketan, Wardha, Maharashtra  
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"> GRADE : 9.2</h4>
                    <p> Class 10th CBSC </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeloine-element--education"
                date="2014"
                iconStyle={{background: "#3e497a",color:"#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                       St. Patricks Junior College, Nallakunta, Hyderabad, Telangana
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"> PERCENTAGE : 81.8</h4>
                    <p> Class 12th A.P Board </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeloine-element--education"
                date="2014-2018"
                iconStyle={{background: "#3e497a",color:"#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                       Ramdeobaba College of Engineering and Management, Nagpur(RCOEM), Maharashtra  
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"> GRADE : 6.54</h4>
                    <p> Civil Engineering </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeloine-element--education"
                date="2018-2020"
                iconStyle={{background: "#3e497a",color:"#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                       NICMAR, Goa
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"> GRADE : 8.08 </h4>
                    <p> Post-Graduate Diploma in Advanced Construction Management </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeloine-element--education"
                date="2022"
                iconStyle={{background: "#e9d35b",color:"#fff"}}
                icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                       Ashoka Buildcon Ltd, Karnataka
                    </h3>
                    <p> Post Graduate Management Engineering Trainee </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeloine-element--education"
                date="2023"
                iconStyle={{background: "#3e497a",color:"#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                       CDAC ACTS, Pune
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"> PERCENTAGE : 66.25 </h4>
                    <p> Post-Graduate Diploma in Advanced Computing(PG-DAC) </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    )
}

export default Experience
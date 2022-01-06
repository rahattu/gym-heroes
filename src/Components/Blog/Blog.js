import React from 'react';
import  blog from '../../images/yoga.jpg'
import Footer from '../Footer/Footer';
const Blog = () => {
    return (
       <div>
            <div className="container">
        <div className="row mt-5 pt-5">
            <div className="col-md-6">
                <p> <h1 className="display-2">Benifits of gym</h1></p>
               <h3>Exercise controls weight</h3>
               <p>Exercise can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories. The more intense the activity, the more calories you burn.</p>
               <br/>
               <h3>Exercise combats health conditions and diseases</h3>
               <p>Worried about heart disease? Hoping to prevent high blood pressure? No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, the "good" cholesterol, and it decreases unhealthy triglycerides. This one-two punch keeps your blood flowing smoothly, which decreases your risk of cardiovascular diseases</p>
               <br/>
               <h3>Exercise improves mood</h3>
               <p>Need an emotional lift? Or need to destress after a stressful day? A gym session or brisk walk can help. Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed and less anxious.</p>
               <br/>
               <h3>Exercise promotes better sleep</h3>
               <p>Struggling to snooze? Regular physical activity can help you fall asleep faster, get better sleep and deepen your sleep. Just don't exercise too close to bedtime, or you may be too energized to go to sleep.

</p>
<br/>
<h3> Exercise puts the spark back into your sex life</h3>
<p>Do you feel too tired or too out of shape to enjoy physical intimacy? Regular physical activity can improve energy levels and increase your confidence about your physical appearance, which may boost your sex life.</p>
<br/>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={blog} alt="" />
            </div>

        </div>

    </div>
           <Footer></Footer>
       </div>
    );
};

export default Blog;
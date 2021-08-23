import ProjectCard from '../components/ProjectCard';
import '../App.css'
import { useEffect, useState } from 'react';
import { useEasybase } from 'easybase-react';

function Project() {

    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();

    const mounted = async() => {
        const ebData = await db("PROJECTS").return().limit(15).all();
        setEasybaseData(ebData);
    }

    useEffect(() => {
        mounted();
    }, []);

    const sortedData = easybaseData.sort((a, b) => b.datestarted > a.datestarted ? 1 : -1);


    const addProjectCard = sortedData => {
        return sortedData.map((elem , count = 1) => <ProjectCard key={elem._key} count={count++} title={elem.title} description={elem.description} giturl={elem.giturl} staticimg={elem.staticimg} medialink={elem.medialink} techstack={elem.techstack} datestarted={elem.datestarted} workprogress={elem.workprogress} />)
    }

    return (
        <div className="projects">
            {addProjectCard(sortedData)}
        </div>
    )
}

export default Project;
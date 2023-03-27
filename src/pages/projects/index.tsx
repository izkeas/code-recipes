import ProjectSearch from "@/components/ProjectSearch";
import ProjectList from "@/components/ProjectsList";
import { Stack, Container } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {

  const [ projects, setProjects] = useState([]);

  useEffect( () => {
    async function getProjects(){
      const result = await fetch("/api/projects", {
        method : "GET",
        headers : {
          "Accept" : "Application/json"
        }
      })
  
      const projects = await result.json();
      setProjects(projects);
    }

    getProjects();
    console.log(projects);

  }, [])

  return (
    <>
      <Container>
          <ProjectSearch/>

          <ProjectList projects={projects}/>
      </Container>
    </>
  )
}

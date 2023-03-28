import ProjectSearch from "@/components/ProjectSearch";
import ProjectList from "@/components/ProjectsList";
import { Stack, Container } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {

  const [ projects, setProjects] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState<{text : string, tags : string[]}>({text : "", tags : []});

  useEffect( () => {
    async function getProjects(){
      const result = await fetch("/api/projects", {
        method : "POST",
        headers : {
          "Accept" : "Application/json",
          "Content-Type" : "Application/json"
        },
        body : JSON.stringify({
          query : searchQuery.text || undefined,
          tags : searchQuery.tags
        })
      })
  
      const projects = await result.json();
      setProjects(projects);
      console.log(searchQuery);

    }

    
    getProjects();

  }, [searchQuery.text, searchQuery.tags.length, searchQuery.tags])

  return (
    <>
      <Container>
          <ProjectSearch
            onChangeQuery={ ( str) => { setSearchQuery(str)}}
          />

          <ProjectList projects={projects}/>
      </Container>
    </>
  )
}

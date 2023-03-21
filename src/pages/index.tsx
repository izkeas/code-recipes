import ProjectList from "@/components/ProjectsList";
import projects from "@/tempData/projects";
import { Container } from "@mui/system";

export default function Home() {
  return (
    <>
      <Container>
        <ProjectList projects={projects}/>
      </Container>
    </>
  )
}

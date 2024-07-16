import { useState } from "react";
import DefaultPage from "./component/default/DefaultPage";
import NewProject from "./component/project/NewProject";
import SelectedProject from "./component/project/selectedProject";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectState.selectedProjectId === null) {
    content = (
      <>
        <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
      </>
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <DefaultPage onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;

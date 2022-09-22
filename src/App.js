import './App.css';
import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import Layout from "./components/Layout";

function App() {

  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, 
    { version: "draft", resolve_relations: ['popular-articles.articles']}, {
      resolveRelations: ['popular-articles.articles']
    });

  if (!story || !story.content) {
    
    return (
      <Layout>
        <div>Loading...</div>
        </Layout>)
  }

  return (
        <Layout>
        <StoryblokComponent blok={story.content} />
        </Layout>
    );
} 
export default App;
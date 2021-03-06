import { MainTable } from "../../components/MainTable/MainTable";
import { useEffect, useState } from "react";
import { Icategory } from "../../interfaces/categoryInterfaces";
import { getAll } from "../../services/getAllData";

export const MainPage = () => {
  const [content, setContent] = useState<Icategory[]>([]);

  useEffect(() => {
    getContent();
  }, []);

  const getContent = async (): Promise<void> => {
    const { data } = await getAll();
    setContent(data);
  };

  return <MainTable content={content} setContent={setContent} />;
};

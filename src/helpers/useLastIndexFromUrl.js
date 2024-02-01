import { useParams } from 'react-router-dom'; // Assuming you're using React Router

export const useLastIndexFromUrl = () => {
const { slug } = useParams()
  return slug;
};
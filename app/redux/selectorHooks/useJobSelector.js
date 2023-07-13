import { useSelector } from "react-redux";

const useJobSelector = () => {
  const {jobsPosted = []} = useSelector(state => state.jobsPosted);
  return {
    jobsPosted,
  }
}
export default useJobSelector;

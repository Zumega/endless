import useStore from "../../Utility/Hooks/useStore";

const StoryEdit = ({id, storyId}) => {
  const {story} = useStore('StoryEdit');

  return 'StoryEdit - ' + id + ' - '+ storyId;
};

export default StoryEdit;
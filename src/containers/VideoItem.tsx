const VideoItem: React.FC<{ location: string }> = ({
  location,
}: {
  location: string;
}) => {
  console.log(location);
  return <video src={location}></video>;
};

export default VideoItem;

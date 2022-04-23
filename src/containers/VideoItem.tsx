const VideoItem: React.FC<{ location: string }> = ({
  location,
}: {
  location: string;
}) => <video src={location}></video>;

export default VideoItem;

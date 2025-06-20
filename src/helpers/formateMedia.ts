export const formatImages = (images: string[]) => {
  return images.map((imageUrl, index) => ({
    type: "image" as const,
    url: imageUrl,
    thumbnail: imageUrl,
    alt: `Gallery Image ${index + 1}`,
  }));
};

export const formatVideos = (videos: string[]) => {
  return videos.map((videoUrl, index) => ({
    type: "video" as const,
    url: videoUrl,
    thumbnail:
      "https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: `Gallery Video ${index + 1}`,
  }));
};
